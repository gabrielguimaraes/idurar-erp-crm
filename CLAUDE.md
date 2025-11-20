# CLAUDE.md - Software Versions

This file contains the software versions detected in this repository to help with generating appropriate solutions.

## Project Information

- **Project Name**: IDURAR ERP CRM
- **Version**: 4.0.0
- **Architecture**: MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **License**: Fair-code License (IDURAR License 1.0)

## Core Runtime Versions

### Node.js and Package Manager
- **Node.js**: 20.9.0 (Alpine Linux in Docker)
- **npm**: 10.2.4
- **Package Type**: ESM (ES Modules) for frontend, CommonJS for backend

## Backend Technologies

### Runtime and Framework
- **Node.js**: 20.9.0
- **Express.js**: ^4.18.2
- **nodemon** (dev): 3.0.1

### Database
- **MongoDB**: Latest (via Docker image `mongo`)
- **Mongoose**: ^8.1.1
- **mongoose-autopopulate**: ^1.1.0
- **mongodb-memory-server**: ^10.1.4 (for testing/mocking)

### Authentication and Security
- **bcryptjs**: ^2.4.3
- **jsonwebtoken**: ^9.0.2
- **cookie-parser**: ^1.4.6
- **cors**: ^2.8.5
- **express-rate-limit**: ^7.1.5

### File Handling and Storage
- **express-fileupload**: ^1.4.3
- **multer**: ^1.4.4
- **@aws-sdk/client-s3**: ^3.509.0

### PDF Generation
- **html-pdf**: ^3.0.1
- **pug**: ^3.0.2 (templating engine)

### Utilities
- **dotenv**: 16.3.1
- **joi**: ^17.11.0 (validation)
- **lodash**: ^4.17.21
- **moment**: ^2.30.1 (date handling)
- **currency.js**: 2.0.4
- **shortid**: ^2.2.16
- **transliteration**: ^2.3.5
- **glob**: 10.3.10
- **compression**: ^1.7.4
- **node-cache**: ^5.1.2
- **module-alias**: ^2.2.3

### AI Integration
- **openai**: ^4.27.0

### Email Services
- **resend**: ^2.0.0

## Frontend Technologies

### Core Framework
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Router DOM**: ^6.22.0

### UI Framework
- **Ant Design (antd)**: ^5.14.1
- **@ant-design/icons**: ^5.3.0
- **@ant-design/pro-layout**: ^7.17.19

### State Management
- **Redux**: ^5.0.1
- **React Redux**: ^9.1.0
- **@reduxjs/toolkit**: ^2.2.1
- **reselect**: ^5.1.0

### Build Tools
- **Vite**: ^5.1.4
- **@vitejs/plugin-react**: ^4.2.1

### Utilities
- **axios**: ^1.6.2 (HTTP client)
- **dayjs**: ^1.11.10 (date handling)
- **currency.js**: 2.0.4
- **react-quill**: ^2.0.0 (rich text editor)
- **just-compare**: ^2.3.0
- **shortid**: ^2.2.16
- **cross-env**: 7.0.3

## Development Tools

### Code Quality
- **ESLint**: ^8.56.0
- **eslint-plugin-react**: ^7.33.2
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.4
- **Prettier**: 3.1.0

### TypeScript Support (Frontend)
- **@types/react**: ^18.2.38
- **@types/react-dom**: ^18.2.17

### ESLint Configuration
- **Backend**: ES2020, Node.js environment, ESLint recommended
- **Frontend**: ES2020, Browser environment, React recommended with hooks

### Prettier Configuration
- Print Width: 100
- Trailing Comma: ES5
- Tab Width: 2
- Semi: true
- Single Quote: true

## Container Technologies

### Docker
- **Docker Compose Version**: 3.8
- **Base Image**: node:20.9.0-alpine
- **MongoDB Image**: mongo:latest

### Container Ports
- **Backend**: 8888
- **Frontend**: 3000
- **MongoDB**: 27017 (internal)

## Environment Configuration

### Backend Environment Variables
- NODE_ENV (production/development)
- DATABASE (MongoDB connection string)
- JWT_SECRET
- RESEND_API (email service)
- OPENAI_API_KEY
- PUBLIC_SERVER_FILE
- USE_MOCK_DB
- NODE_OPTIONS (--openssl-legacy-provider)

### Frontend Environment Variables
- VITE_FILE_BASE_URL
- VITE_BACKEND_SERVER
- VITE_FRONTEND_SERVER_PORT
- VITE_DEV_REMOTE
- PROD

## API and Integration Points

### Backend API
- **Port**: 8888
- **Base Path**: /api

### Frontend Development Server
- **Port**: 3000
- **Proxy**: Configured to proxy /api requests to backend

## Development and Deployment Scripts

### Backend Scripts
- `start`: Production start (node src/server.js)
- `dev`: Development with nodemon
- `setup`: Initial setup script
- `upgrade`: Upgrade script
- `reset`: Reset script

### Frontend Scripts
- `dev`: Development server (vite)
- `build`: Production build (vite build)
- `preview`: Preview production build
- `lint`: ESLint checking
- `dev:remote`: Development with remote backend

## CI/CD and Workflows

### GitHub Workflows
- CodeSee Architecture Diagram
- GitHub Repository Stats
- Code Owners configuration

## Testing Infrastructure

- **Testing Framework**: Not explicitly configured
- **Mock Database**: mongodb-memory-server for in-memory testing

## Additional Notes

### JavaScript Module Systems
- **Backend**: CommonJS (module.alias configured for @ imports)
- **Frontend**: ES Modules (type: "module")

### Path Aliases
- **Backend**: `@` maps to `src/`
- **Frontend**: `@` maps to `src/`

### Supported Features
- Multi-language support (44 languages)
- Invoice Management
- Accounting Management
- HR Management
- ERP and CRM functionality

## Purpose

This information helps Claude understand the technology stack and versions used in this project, enabling more accurate and compatible code generation and problem-solving. When generating code or providing solutions:

1. Use Node.js 20.9.0 compatible syntax and features
2. Follow the established ESLint and Prettier configurations
3. Use appropriate import syntax (CommonJS for backend, ESM for frontend)
4. Ensure compatibility with MongoDB/Mongoose 8.x
5. Follow React 18.2 patterns and hooks
6. Use Ant Design 5.x components and styling
7. Maintain compatibility with Express 4.x middleware patterns
8. Follow Redux Toolkit 2.x best practices

## Last Updated

Generated automatically on 2024-11-20 during the workflow execution.
