# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a **UT Austin Full Stack Software Development** learning repository containing hands-on projects and practice work from the Texas McCombs professional certificate program. The repository is organized by technology and learning modules, progressing from basic web fundamentals to full-stack applications.

## Repository Structure

The codebase follows a **modular learning progression** structure:

- `CSS/` - CSS fundamentals, Flexbox, Grid, responsive design projects
- `HTML/` - Semantic HTML, forms, accessibility, and basic web structure
- `JavaScript/` - JavaScript fundamentals through advanced concepts (8+ weeks of content)
- `React/` - React components, hooks, state management, and application development

Each technology directory contains:
- **Week-based learning modules** (Week-1, Week-2, etc.)
- **Source Code** - Starting templates and exercises
- **Solution** - Completed implementations
- **Assessment** - Graded project files
- **Summary Documents** - Learning materials and notes

## Common Development Commands

### React Applications
For any React project (found in `React/Week-X/*/` directories):

```bash
# Navigate to a React project directory first
cd React/Week-1/Solution/demo-app/

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### JavaScript Projects
Most JavaScript projects are standalone files that can be run directly:

```bash
# Run a JavaScript file
node JavaScript/Week-1/data-types-and-variables.js

# Or navigate to the specific week directory
cd JavaScript/Week-1/
node branching.js
```

### HTML/CSS Projects
HTML projects are best viewed by opening HTML files in a browser:

```bash
# Open HTML file in default browser (Linux)
xdg-open HTML/e-commerce-app/index.html

# Or serve locally with Python (from project directory)
python3 -m http.server 8000
```

## Architecture Patterns

### Learning Progression Model
The repository follows a **scaffolded learning approach**:

1. **Fundamentals First**: HTML/CSS basics establish web foundation
2. **Progressive Complexity**: JavaScript progresses from basic syntax to advanced concepts
3. **Framework Introduction**: React builds on JavaScript knowledge
4. **Full-Stack Integration**: Later modules combine all technologies

### Project Structure Pattern
Most learning modules follow this consistent pattern:
```
Technology/Week-X/
├── Source Code/          # Starting templates, incomplete exercises
├── Solution/             # Completed implementations
├── Assessment/           # Graded project work
└── Summary Documents/    # Learning materials, notes
```

### React Application Architecture
React projects use **Create React App** structure:
- Standard CRA folder structure with `src/`, `public/`, `package.json`
- Component-based architecture in `src/compontents/` (note: some typos in folder names)
- Uses React 17.x-19.x with modern hooks and functional components
- Bootstrap integration for styling in later projects

### Assessment vs Practice Code
- **Source Code directories**: Starting templates, incomplete exercises for practice
- **Solution directories**: Completed, working implementations
- **Assessment directories**: Graded project work, represents milestone achievements

## Development Workflow

### Working with Learning Modules
1. Start with **Source Code** version for hands-on practice
2. Compare against **Solution** version when stuck or for reference
3. **Assessment** projects represent cumulative learning milestones

### React Development
- Each React project is self-contained with its own `package.json`
- Standard Create React App development workflow applies
- Test suites included via `@testing-library` packages

### JavaScript Practice
- Individual `.js` files can be run directly with Node.js
- Focus on console output for learning fundamentals
- DOM manipulation exercises require browser environment (HTML files included)

## Project-Specific Notes

### Common File Patterns
- Assessment projects often follow naming pattern: `Technology_Assessment#_Source_Code/`
- Guided projects include both source and solution versions
- Some directories contain typos (e.g., `compontents` instead of `components`)

### Technology Versions
- **React**: Versions range from 17.x to 19.x across different modules
- **JavaScript**: ES6+ features introduced progressively through weeks
- **CSS**: Modern CSS including Flexbox, Grid, and responsive design

### Testing
- React projects include Jest and React Testing Library setup
- Run `npm test` in any React project directory for available tests
- JavaScript fundamentals focus on console-based verification