# Automated Release Process

This document outlines the **automated** release process for the Desktop Commander MCP project using a **develop → release → main** branching strategy with complete CI/CD automation.

## 🚀 Overview

The automated workflow uses a **develop → release → main** branching strategy:

```
develop branch (work here)
    ↓ (automatic)
  PR to release (validation + review)
    ↓ (manual merge)
  release branch (triggers publish)
    ↓ (automatic)
  main branch (synced after publish)
    ↓ (automatic) 
  NPM + GitHub Release
```

### Complete Automation Flow:

1. **Push to develop** → Triggers validation and PR creation
2. **Auto-validation** → Runs build, tests, type checking, security audit
3. **Smart PR management** → Creates/updates single PR with status
4. **Manual merge** → Developer reviews and merges when ready
5. **Auto-publish** → NPM publish as @chriscoletech/desktop-commander-mcp, version bump, GitHub release
6. **Branch sync** → release branch synced to main automatically

## 🔧 Development Workflow

### Step 1: Work on Develop Branch

All development work should be done on the `develop` branch:

```bash
# Switch to develop branch
git checkout develop
git pull origin develop

# Make your changes
# ... code changes ...

# Commit your changes
git add .
git commit -m "Add new feature or fix"
git push origin develop
```

### Step 2: Automated Validation

**GitHub Actions will automatically:**
- ✅ Auto-merge from `release` branch (if needed)
- ✅ Run `npm run build` (TypeScript compilation)
- ✅ Run `npm test` (all tests)
- ✅ Run `npx tsc --noEmit` (type checking)
- ✅ Check security audit
- ✅ Verify package integrity

### Step 3: Auto-Generated Release PR

The workflow will **automatically create or update** a PR with:
- **Validation status** (all checks completed)
- **Commit summary** (recent commits)
- **Review checklist** for manual approval
- **Merge conflict warnings** (if any)

Example PR title: `🚀 Release Candidate: 2025-08-04 - 3 commits`

### Step 4: Manual Review & Merge

Review the auto-generated PR and merge when ready:

```bash
# View the PR
gh pr view <PR_NUMBER>

# Merge when ready
gh pr merge <PR_NUMBER> --merge
```

### Step 5: Automatic Deployment

**CI will automatically:**
- 🔄 Run all tests again
- 📦 Build the project
- 🏷️ Bump patch version number
- 🏷️ Create Git tag
- 📢 Publish to NPM as @chriscoletech/desktop-commander-mcp
- 🚀 Create GitHub release with release notes
- 🔄 Sync release branch to main

## 🎯 Key Benefits

### ✅ **No Manual Build/Test Required**
- GitHub Actions runs all validation automatically
- Consistent validation across all commits

### ✅ **Automated Release Branch Syncing**
- Auto-merges from `release` branch to avoid conflicts
- Handles merge conflicts gracefully

### ✅ **Smart PR Management**
- One PR per develop branch (updates with each commit)
- Categorized change summaries
- Real-time validation status

### ✅ **Zero Manual Version Management**
- CI auto-increments patch version numbers
- Automatic Git tagging
- Dynamic release notes generation

## 🔧 Workflow Files

The automation is powered by these GitHub Actions:

#### `.github/workflows/validation.yml`
**Triggers:** PRs to develop/release/main, pushes to develop
**Purpose:** Continuous validation
- Executes full validation suite
- Security audit and package integrity checks

#### `.github/workflows/develop-to-release.yml` 
**Triggers:** Push to develop branch
**Purpose:** Automated PR management
- Auto-merges from release branch (conflict prevention)
- Runs comprehensive validation pipeline  
- Creates/updates single release candidate PR

#### `.github/workflows/npm-publish.yml`
**Triggers:** Push to release branch, manual workflow dispatch
**Purpose:** Publication and distribution
- Version management and Git tagging
- NPM publishing as @chriscoletech/desktop-commander-mcp
- GitHub release creation with notes
- Main branch synchronization

## 📋 Manual Tasks (Minimal)

You only need to manually:
1. **Write code** and commit to `develop`
2. **Review PR** created by automation
3. **Merge PR** when ready for release

## 🛡️ Error Handling & Recovery

### 🔧 Validation Failures
**Build/Test/Lint Errors:** When code doesn't pass validation
- PR shows "❌ Validation failed" with error details
- GitHub Actions logs provide specific failure reasons
- **Fix locally:** Address issues and `git push origin develop`
- Workflow automatically re-runs validation on new push

### 🔄 Recovery Scenarios

**Stuck PR:** If develop→release PR becomes stale
```bash
# Close the PR and trigger fresh creation
gh pr close <PR_NUMBER>
git push origin develop --force-with-lease
```

**Branch Sync Issues:** If main gets out of sync
```bash
# Manually sync main with release
git checkout main && git merge origin/release --ff-only && git push origin main
```

## 🔍 Monitoring

### Check Release Status
```bash
# View recent releases
gh release list --limit 5

# Check CI runs
gh run list --limit 5

# View latest PR
gh pr list --head develop
```

## 📊 Branch Strategy

- **develop**: Active development branch - all feature work happens here
- **release**: Stable release candidate - triggers publishing when merged to
- **main**: Production stable - synced automatically after successful publish

## 🎉 Package Information

- **Package Name**: @chriscoletech/desktop-commander-mcp
- **NPM Registry**: https://www.npmjs.com/package/@chriscoletech/desktop-commander-mcp
- **Repository**: https://github.com/ChrisColeTech/Desktop-Commander-MCP

---

*This process is inspired by the claude-wrapper-poc automated release workflow*