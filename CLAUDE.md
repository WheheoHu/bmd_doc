# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for BlackMagic Design's DaVinci Resolve API documentation. The project converts raw README.txt files from BMD into structured, searchable documentation with version management.

## Common Development Commands

### Setup and Development
- `yarn` - Install dependencies
- `yarn start` - Start local development server with hot reload
- `yarn build` - Build static site for production
- `yarn serve` - Serve built site locally
- `yarn typecheck` - Run TypeScript type checking

### Docusaurus Commands
- `yarn docusaurus clear` - Clear build cache
- `yarn docusaurus swizzle` - Customize Docusaurus components
- `yarn docusaurus write-translations` - Extract translatable strings
- `yarn docusaurus write-heading-ids` - Generate heading IDs

### Deployment
- `yarn deploy` - Deploy to GitHub Pages (requires GIT_USER environment variable)
- `USE_SSH=true yarn deploy` - Deploy using SSH

## Architecture

### Documentation Structure
The project manages two separate documentation sets with versioning:

1. **Resolve API Documentation** (`docs/ResolveAPI/`)
   - Main API reference documentation
   - Versioned in `ResolveAPI_versioned_docs/`
   - Sidebars in `ResolveAPI_versioned_sidebars/`
   - Version config in `ResolveAPI_versions.json`

2. **Workflow Integration Documentation** (`docs/workflow/`)
   - Workflow and UI manager documentation
   - Versioned in `workflow_versioned_docs/`
   - Sidebars in `workflow_versioned_sidebars/`
   - Version config in `workflow_versions.json`

### Source Data
- `_README_API/` - Contains original BMD README.txt files organized by version
- `_README_WORKFLOW/` - Contains workflow-related README files
- Raw files are processed and converted into structured Markdown documentation

### Configuration Files
- `docusaurus.config.ts` - Main Docusaurus configuration with dual plugin setup
- `sidebars.ts` - Sidebar configuration for main API docs
- `sidebarsWorkflow.ts` - Sidebar configuration for workflow docs
- `tsconfig.json` - TypeScript configuration

### Key Features
- **Versioned Documentation**: Both documentation sets support multiple versions
- **Search**: Local search functionality via `@cmfcmf/docusaurus-search-local`
- **Dual Navigation**: Separate dropdown menus for API and Workflow docs
- **Version Dropdowns**: Independent version selection for each documentation set

### Content Organization
- API documentation covers Resolve objects like `Project`, `Timeline`, `MediaPool`, etc.
- Settings documentation covers configuration objects and properties
- Workflow documentation covers integration patterns and UI management
- Each version maintains its own complete documentation set

## Development Notes

- Uses Yarn package manager (version 1.22.22)
- TypeScript configuration extends `@docusaurus/tsconfig`
- Custom CSS in `src/css/custom.css`
- Homepage components in `src/components/HomepageFeatures/`
- Static assets in `static/img/`
- Node.js >=18.0 required
- Cheerio resolution pinned to 1.0.0-rc.12 for compatibility