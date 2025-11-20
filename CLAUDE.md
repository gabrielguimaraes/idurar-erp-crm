# CLAUDE.md - Software Versions

This file contains the software versions detected in the IDURAR ERP CRM repository to help with generating appropriate solutions.

## Project Information

- **Project Name**: IDURAR ERP CRM
- **Version**: 4.0.0
- **Architecture**: MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **License**: Fair-code License (IDURAR License 1.0)
- **Description**: Open "Fair-Code" Source ERP / CRM (Invoice / Inventory / Accounting / HR)

## Runtime Environments

### Node.js
- **Version**: 20.9.0
- **npm Version**: 10.2.4
- **Environment**: ES2020+ (Frontend), CommonJS/ESM hybrid (Backend)

### Docker
- **Base Image**: node:20.9.0-alpine
- **Docker Compose Version**: 3.8

## Backend Technologies

### Core Framework
- **Express.js**: ^4.18.2
- **Node.js**: 20.9.0

### Database
- **MongoDB**: Latest (via official mongo Docker image)
- **Mongoose**: ^8.1.1
- **mongoose-autopopulate**: ^1.1.0
- **mongodb-memory-server**: ^10.1.4 (for testing)

### Authentication & Security
- **jsonwebtoken**: ^9.0.2
- **bcryptjs**: ^2.4.3
- **cookie-parser**: ^1.4.6
- **express-rate-limit**: ^7.1.5

### Key Dependencies
- **dotenv**: 16.3.1
- **cors**: ^2.8.5
- **compression**: ^1.7.4
- **joi**: ^17.11.0 (validation)
- **lodash**: ^4.17.21
- **moment**: ^2.30.1
- **currency.js**: 2.0.4
- **shortid**: ^2.2.16
- **glob**: 10.3.10
- **module-alias**: ^2.2.3
- **node-cache**: ^5.1.2
- **transliteration**: ^2.3.5

### File Handling
- **express-fileupload**: ^1.4.3
- **multer**: ^1.4.4
- **html-pdf**: ^3.0.1

### Cloud Services Integration
- **@aws-sdk/client-s3**: ^3.509.0
- **openai**: ^4.27.0
- **resend**: ^2.0.0 (email service)

### Template Engine
- **pug**: ^3.0.2

### Development Tools
- **nodemon**: 3.0.1

## Frontend Technologies

### Core Framework
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Router DOM**: ^6.22.0

### Build Tool
- **Vite**: ^5.1.4
- **@vitejs/plugin-react**: ^4.2.1

### UI Framework
- **Ant Design (antd)**: ^5.14.1
- **@ant-design/icons**: ^5.3.0
- **@ant-design/pro-layout**: ^7.17.19

### State Management
- **Redux**: ^5.0.1
- **@reduxjs/toolkit**: ^2.2.1
- **react-redux**: ^9.1.0
- **reselect**: ^5.1.0

### Key Dependencies
- **axios**: ^1.6.2
- **dayjs**: ^1.11.10
- **currency.js**: 2.0.4
- **shortid**: ^2.2.16
- **react-quill**: ^2.0.0 (rich text editor)
- **just-compare**: ^2.3.0

### Development Tools
- **ESLint**: ^8.56.0
- **eslint-plugin-react**: ^7.33.2
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.4
- **Prettier**: 3.1.0
- **@types/react**: ^18.2.38
- **@types/react-dom**: ^18.2.17
- **cross-env**: 7.0.3

## Code Quality & Linting

### ESLint Configuration
- **Environment**: ES2020, Browser
- **React Version**: 18.2
- **Parser**: ECMAScript Latest

### Prettier Configuration
- **Print Width**: 100
- **Tab Width**: 2
- **Semi**: true
- **Single Quote**: true
- **Trailing Comma**: es5

## Container Configuration

### Backend Container
- **Port**: 8888
- **Base Image**: node:20.9.0-alpine
- **Node Options**: --openssl-legacy-provider

### Frontend Container
- **Port**: 3000
- **Base Image**: node:20.9.0-alpine
- **Node Options**: --openssl-legacy-provider

### Database Container
- **MongoDB**: Latest official image
- **Port**: 27017 (internal)
- **Data Volume**: mongodb_data

## Development Environment

### Environment Variables (Backend)
- NODE_ENV: development/production
- DATABASE: MongoDB connection string
- JWT_SECRET: Authentication secret
- PORT: 8888
- PUBLIC_SERVER_FILE: File server URL
- RESEND_API: Email service API key
- OPENAI_API_KEY: AI service API key
- USE_MOCK_DB: Boolean for mock database usage

### Environment Variables (Frontend)
- VITE_FRONTEND_SERVER_PORT: 3000 (default)
- VITE_DEV_REMOTE: remote/local toggle
- VITE_BACKEND_SERVER: Backend API URL
- REACT_APP_API_URL: Backend API endpoint

## API & Integration

### Backend API
- **Base URL**: http://localhost:8888/api
- **Protocol**: REST API
- **Port**: 8888

### Frontend Development Server
- **Port**: 3000
- **Proxy**: Configured to forward /api requests to backend

## Database

### MongoDB
- **Type**: NoSQL Document Database
- **Connection**: Via Mongoose ODM
- **Version**: Latest (from official Docker image)
- **Default Database**: local-idurar-erp-crp (development)

## Package Managers

### npm
- **Version**: 10.2.4
- **Lock File**: package-lock.json (present in both frontend and backend)

## Purpose

This information helps Claude understand the technology stack and versions used in the IDURAR ERP CRM project, enabling more accurate and compatible code generation and problem-solving. The project uses modern JavaScript (ES2020+), React 18.2, Node.js 20.9.0, and the latest versions of Express.js and MongoDB with Mongoose ODM.

## Key Considerations for Code Generation

1. **Node.js Version**: Use Node.js 20.9.0 features (ES2022+ supported)
2. **React Version**: Use React 18.2 features (concurrent mode, automatic batching, new hooks)
3. **Module System**: Frontend uses ESM (type: "module"), Backend uses CommonJS with module-alias
4. **Styling**: Ant Design 5.14.1 with component-based styling
5. **State Management**: Redux Toolkit with modern patterns
6. **Database**: MongoDB with Mongoose ODM v8.1.1
7. **OpenSSL**: Legacy provider enabled for compatibility
8. **Code Style**: Prettier with 100 char line width, single quotes, semicolons

## Code Review Notes

### Recent Changes (Company Config)
- **Date**: November 20, 2024
- **Change**: Added `required: true` to country field in frontend Company config
- **⚠️ Action Required**: Backend MongoDB schema should be updated to match frontend validation
  - File: `backend/src/models/appModels/Company.js` (line 118-121)
  - Recommended: Add `required: true` to country field schema
  - Impact: Without backend validation, direct API calls can bypass frontend requirement

## Last Updated

Generated automatically on November 20, 2024
