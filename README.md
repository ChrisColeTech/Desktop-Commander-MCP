# Desktop Commander MCP

[![CI Status](https://github.com/ChrisColeTech/Desktop-Commander-MCP/workflows/Validation/badge.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/actions)
[![NPM Publish](https://github.com/ChrisColeTech/Desktop-Commander-MCP/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/actions)
[![NPM Version](https://img.shields.io/npm/v/@chriscoletech/desktop-commander-mcp.svg)](https://www.npmjs.com/package/@chriscoletech/desktop-commander-mcp)
[![NPM Downloads](https://img.shields.io/npm/dm/@chriscoletech/desktop-commander-mcp.svg)](https://www.npmjs.com/package/@chriscoletech/desktop-commander-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/node/v/@chriscoletech/desktop-commander-mcp.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Stars](https://img.shields.io/github/stars/ChrisColeTech/Desktop-Commander-MCP.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/stargazers)

**Search, update, manage files and run terminal commands with AI**

Work with code and text, run processes, and automate tasks through Claude AI - going far beyond other editors without API token costs.

## 🛠️ All Your Dev Tools in One Place

Desktop Commander puts all development functionality in one AI chat interface, eliminating context switching between different tools.

- **🎯 Focus on What Matters**: Stop switching between terminal, editor, file browser, and documentation
- **⚡ Instant Execution**: Run terminal commands, analyze data, and modify files in real-time
- **🔄 Process Management**: Handle long-running commands, SSH sessions, and development servers
- **📁 Smart File Operations**: Search, edit, and manage your entire codebase with AI precision

This approach gives you complete development control while maintaining the natural conversation flow with Claude.

## 🚀 Key Features

- **🖥️ Enhanced Terminal Control**: Interactive process management with session support
- **🐍 Code Execution**: Run Python, Node.js, R code in memory without saving files  
- **📊 Instant Data Analysis**: Analyze CSV/JSON files directly in chat
- **🔍 Advanced File Search**: Fuzzy search across your entire codebase
- **✏️ Surgical Code Editing**: Precise file modifications with diff previews
- **🔄 Process Management**: Handle SSH, databases, development servers seamlessly

## 📦 Installation

```bash
# Install globally from npm  
npm install -g @chriscoletech/desktop-commander-mcp
```

## 🛠️ Development

```bash
# Clone and setup
git clone https://github.com/ChrisColeTech/Desktop-Commander-MCP.git
cd Desktop-Commander-MCP
npm install
npm run build

# Development commands  
npm run watch       # Hot reload development
npm test           # Run test suite
npm run start      # Start the MCP server

# Install CLI globally for testing
npm install -g .
```

## 🚀 Quick Start

### 1. Setup with Claude Desktop

```bash
desktop-commander setup
```

The setup wizard will guide you through:
- Installing the MCP server
- Configuring Claude Desktop integration  
- Testing the connection

**Press Enter** to accept defaults, then restart Claude Desktop to activate.

### 2. Start Using in Claude

Open Claude Desktop and try these commands:

**📁 File Operations:**
- "Show me the files in my current directory"
- "Read the contents of package.json"
- "Search for 'TODO' comments in my codebase"
- "Create a new file called test.js with a hello world function"

**🖥️ Terminal Commands:**
- "Run `npm test` and show me the results"
- "Execute `git status` to see the current repo state"
- "Start a development server with `npm run dev`"
- "List all running processes"

**🔍 Code Analysis:**
- "Analyze this CSV file: data.csv"
- "Search for all functions containing 'auth' in my project"
- "Show me the differences between two files"
- "Find all TypeScript files with errors"

## 🚀 CLI Usage

### Basic Commands

```bash
# Start interactive setup
desktop-commander setup

# Start MCP server directly  
desktop-commander

# Debug mode with verbose logging
desktop-commander --debug --verbose
```

### Development Mode

```bash
# Start development server with hot reload
desktop-commander --dev

# Check server status
desktop-commander --status

# View server logs
desktop-commander --logs
```


## 🔧 Available MCP Tools

Desktop Commander provides these tools through the Model Context Protocol:

### File System Operations
- **`read_file`** - Read file contents with optional offset/length parameters
- **`read_multiple_files`** - Read multiple files simultaneously  
- **`write_file`** - Write or append to files
- **`create_directory`** - Create directories or ensure they exist
- **`list_directory`** - Get detailed directory listings
- **`move_file`** - Move or rename files and directories
- **`get_file_info`** - Get detailed file/directory metadata

### File Search & Code Analysis  
- **`search_files`** - Find files by name (substring matching)
- **`search_code`** - Search text/code patterns in files using ripgrep
- **`edit_block`** - Apply surgical text replacements to files

### Process & Terminal Management
- **`start_process`** - Start terminal processes with intelligent state detection
- **`read_process_output`** - Read output from running processes  
- **`interact_with_process`** - Send input to processes and get responses
- **`list_sessions`** - List all active terminal sessions
- **`force_terminate`** - Force terminate terminal sessions
- **`list_processes`** - List all running system processes
- **`kill_process`** - Terminate processes by PID

### Legacy Terminal Tools (Backward Compatibility)
- **`execute_command`** - Execute terminal commands (legacy)
- **`read_output`** - Read command output (legacy)

### Configuration & Utilities
- **`get_config`** - Get complete server configuration as JSON
- **`set_config_value`** - Set specific configuration values
- **`get_usage_stats`** - Get usage statistics for debugging
- **`give_feedback_to_desktop_commander`** - Open feedback form in browser

## 📋 CLI Options

```bash
Desktop Commander MCP Server

Usage: desktop-commander [options]

Options:
  --setup         Run interactive setup wizard
  --debug         Enable debug mode with verbose logging
  --verbose       Enable detailed output
  --dev           Start in development mode with hot reload
  --status        Check server status
  --logs          View server logs
  --port <port>   Specify port (default: 3000)
  --config <path> Custom config file path
  -h, --help      Display help information
  -v, --version   Display version number
```

## 🔐 Claude Desktop Configuration

Desktop Commander integrates with Claude Desktop through MCP (Model Context Protocol). The setup command automatically configures this, but you can also manually add:

```json
{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["@chriscoletech/desktop-commander-mcp"]
    }
  }
}
```


## 📚 Documentation

📖 **[Full Documentation](docs/README.md)** - Comprehensive guide with detailed examples, production deployment, troubleshooting, and advanced configuration.

See also:
- [FAQ](docs/guides/FAQ.md) - Common questions and solutions
- [Privacy Policy](docs/guides/PRIVACY.md) - Data handling and privacy information
- [Release Process](docs/guides/RELEASE_PROCESS.md) - Development and release workflow

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository** if you find it useful!  
🐛 **Report issues** or suggest features at [GitHub Issues](https://github.com/ChrisColeTech/Desktop-Commander-MCP/issues)

**Get started today** - `npm install -g @chriscoletech/desktop-commander-mcp` and bring all your dev tools into Claude AI!