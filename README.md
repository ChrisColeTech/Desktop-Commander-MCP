# Desktop Commander MCP

[![CI Status](https://github.com/ChrisColeTech/Desktop-Commander-MCP/workflows/Validation/badge.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/actions)
[![NPM Publish](https://github.com/ChrisColeTech/Desktop-Commander-MCP/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/actions)
[![NPM Version](https://img.shields.io/npm/v/@chriscoletech/desktop-commander-mcp.svg)](https://www.npmjs.com/package/@chriscoletech/desktop-commander-mcp)
[![NPM Downloads](https://img.shields.io/npm/dm/@chriscoletech/desktop-commander-mcp.svg)](https://www.npmjs.com/package/@chriscoletech/desktop-commander-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/node/v/@chriscoletech/desktop-commander-mcp.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Stars](https://img.shields.io/github/stars/ChrisColeTech/Desktop-Commander-MCP.svg)](https://github.com/ChrisColeTech/Desktop-Commander-MCP/stargazers)

**Model Context Protocol server for terminal operations and file editing**

Execute terminal commands, manage processes, and perform advanced file operations through Claude Desktop via MCP.

## 🛠️ All Your Dev Tools in One Place

Desktop Commander brings terminal access and file system operations directly into Claude Desktop through the Model Context Protocol.

- **🖥️ Terminal Control**: Execute commands and manage long-running processes
- **📁 File Operations**: Read, write, search, and edit files with precision
- **🔍 Code Search**: Advanced search capabilities using ripgrep
- **🔄 Process Management**: Handle SSH sessions, development servers, and background tasks

## 🚀 Key Features

- **🖥️ Enhanced Terminal Control**: Interactive process management with session support
- **🐍 Code Execution**: Run Python, Node.js, R code in memory without saving files  
- **📊 Instant Data Analysis**: Analyze CSV/JSON files directly in chat
- **🔍 Advanced File Search**: Fuzzy search across your entire codebase
- **✏️ Surgical Code Editing**: Precise file modifications with diff previews
- **🔄 Process Management**: Handle SSH, databases, development servers seamlessly

## 📦 Installation

### Option 1: NPX Setup (Recommended)
```bash
npx @chriscoletech/desktop-commander-mcp@latest setup
```

### Option 2: Via Smithery
```bash
npx -y @smithery/cli install @chriscoletech/desktop-commander-mcp --client claude
```

### Option 3: Manual Configuration
Add to your Claude Desktop config file (`claude_desktop_config.json`):

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

After installation, restart Claude Desktop to activate the MCP server.

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

**Get started today** - `npx @chriscoletech/desktop-commander-mcp@latest setup` and bring terminal access into Claude Desktop!