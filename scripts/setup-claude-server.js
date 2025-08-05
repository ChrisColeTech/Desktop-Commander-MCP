#!/usr/bin/env node

import { promises as fs } from 'fs';
import { join } from 'path';
import { homedir } from 'os';
import { platform } from 'os';

const PACKAGE_NAME = '@chriscoletech/desktop-commander-mcp';

// Get Claude Desktop config path based on platform
function getClaudeConfigPath() {
  const os = platform();
  switch (os) {
    case 'darwin': // macOS
      return join(homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
    case 'win32': // Windows
      return join(process.env.APPDATA || join(homedir(), 'AppData', 'Roaming'), 'Claude', 'claude_desktop_config.json');
    case 'linux': // Linux
      return join(homedir(), '.config', 'Claude', 'claude_desktop_config.json');
    default:
      throw new Error(`Unsupported platform: ${os}`);
  }
}

// Read existing config or create new one
async function readConfig(configPath) {
  try {
    const content = await fs.readFile(configPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File doesn't exist, return empty config
      return { mcpServers: {} };
    }
    throw error;
  }
}

// Write config to file
async function writeConfig(configPath, config) {
  // Ensure directory exists
  const dir = join(configPath, '..');
  await fs.mkdir(dir, { recursive: true });
  
  // Write config with proper formatting
  await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf8');
}

// Add Desktop Commander to config
function addDesktopCommander(config) {
  if (!config.mcpServers) {
    config.mcpServers = {};
  }
  
  config.mcpServers['desktop-commander'] = {
    command: 'npx',
    args: ['-y', PACKAGE_NAME]
  };
  
  return config;
}

// Remove Desktop Commander from config
function removeDesktopCommander(config) {
  if (config.mcpServers && config.mcpServers['desktop-commander']) {
    delete config.mcpServers['desktop-commander'];
  }
  return config;
}

// Main setup function
async function setup() {
  const isUninstall = process.argv.includes('--uninstall');
  const isDebug = process.argv.includes('--debug');
  
  try {
    console.log(`\n🔧 Desktop Commander MCP Setup`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    
    const configPath = getClaudeConfigPath();
    console.log(`📁 Config location: ${configPath}`);
    
    // Read existing config
    const config = await readConfig(configPath);
    
    if (isUninstall) {
      console.log(`🗑️  Removing Desktop Commander from Claude Desktop...`);
      
      if (!config.mcpServers || !config.mcpServers['desktop-commander']) {
        console.log(`⚠️  Desktop Commander is not currently installed in Claude Desktop config.`);
        return;
      }
      
      const updatedConfig = removeDesktopCommander(config);
      await writeConfig(configPath, updatedConfig);
      
      console.log(`✅ Desktop Commander removed successfully!`);
      console.log(`🔄 Please restart Claude Desktop to complete the removal.`);
      
    } else {
      console.log(`📦 Adding Desktop Commander to Claude Desktop...`);
      
      if (config.mcpServers && config.mcpServers['desktop-commander']) {
        console.log(`ℹ️  Desktop Commander is already configured. Updating configuration...`);
      }
      
      const updatedConfig = addDesktopCommander(config);
      
      if (isDebug) {
        console.log(`🐛 Debug mode enabled - adding debug arguments`);
        updatedConfig.mcpServers['desktop-commander'].args.push('--inspect-brk=9229');
      }
      
      await writeConfig(configPath, updatedConfig);
      
      console.log(`✅ Desktop Commander configured successfully!`);
      console.log(`🔄 Please restart Claude Desktop to activate the MCP server.`);
      console.log(``);
      console.log(`💡 Once restarted, you can use Desktop Commander in Claude Desktop:`);
      console.log(`   • "List the files in my current directory"`);
      console.log(`   • "Run 'npm test' and show me the results"`);
      console.log(`   • "Search for TODO comments in my codebase"`);
      console.log(``);
    }
    
    if (isDebug) {
      console.log(`🐛 Current config:`);
      console.log(JSON.stringify(config, null, 2));
    }
    
  } catch (error) {
    console.error(`❌ Error during setup: ${error.message}`);
    
    if (error.code === 'EACCES') {
      console.error(`\n💡 Permission denied. Try running with elevated permissions:`);
      console.error(`   • macOS/Linux: sudo npx ${PACKAGE_NAME} setup`);
      console.error(`   • Windows: Run as Administrator`);
    } else if (error.code === 'ENOENT') {
      console.error(`\n💡 Claude Desktop directory not found. Make sure Claude Desktop is installed.`);
    }
    
    process.exit(1);
  }
}

// Handle different ways this script might be called
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('setup-claude-server.js')) {
  setup();
}

export default setup;