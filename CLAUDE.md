# CLAUDE.md - Software Versions

This file contains the software versions detected in this repository to help with generating appropriate solutions.

## Project Information

- **Project Name**: IDURAR ERP CRM
- **Version**: 4.0.0
- **Description**: Open "Fair-Code" Source ERP / CRM (Invoice / Inventory / Accounting / HR)
- **Architecture**: MERN Stack (MongoDB, Express.js, React.js, Node.js)

## Core Runtime Versions

### Node.js & Package Management
- **Node.js**: 20.9.0 (specified in engines and Dockerfiles)
- **npm**: 10.2.4 (specified in engines and Dockerfiles)
- **Module Type**: ESM (ES Modules) for frontend, CommonJS for backend

## Backend Technologies

### Framework & Core Dependencies
- **Express.js**: ^4.18.2
- **Mongoose**: ^8.1.1 (MongoDB ODM)
- **MongoDB**: Latest (via official Docker image)
- **Module Alias**: ^2.2.3

### Authentication & Security
- **bcryptjs**: ^2.4.3 (Password hashing)
- **jsonwebtoken**: ^9.0.2 (JWT authentication)
- **cors**: ^2.8.5
- **cookie-parser**: ^1.4.6
- **express-rate-limit**: ^7.1.5

### Utilities & Tools
- **dotenv**: 16.3.1 (Environment variables)
- **joi**: ^17.11.0 (Validation)
- **lodash**: ^4.17.21
- **moment**: ^2.30.1 (Date/time manipulation)
- **shortid**: ^2.2.16
- **currency.js**: 2.0.4
- **compression**: ^1.7.4

### File Handling & Storage
- **express-fileupload**: ^1.4.3
- **multer**: ^1.4.4
- **@aws-sdk/client-s3**: ^3.509.0
- **html-pdf**: ^3.0.1

### AI & Communication
- **openai**: ^4.27.0
- **resend**: ^2.0.0 (Email service)

### Development Tools
- **nodemon**: 3.0.1
- **mongodb-memory-server**: ^10.1.4

### Additional Libraries
- **node-cache**: ^5.1.2
- **pug**: ^3.0.2 (Template engine)
- **mongoose-autopopulate**: ^1.1.0
- **transliteration**: ^2.3.5
- **glob**: 10.3.10

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
- **React Redux**: ^9.1.0
- **@reduxjs/toolkit**: ^2.2.1
- **Reselect**: ^5.1.0

### HTTP Client
- **Axios**: ^1.6.2

### Utilities
- **dayjs**: ^1.11.10 (Date/time library)
- **currency.js**: 2.0.4
- **shortid**: ^2.2.16
- **just-compare**: ^2.3.0
- **react-quill**: ^2.0.0 (Rich text editor)

### Development Tools
- **ESLint**: ^8.56.0
- **eslint-plugin-react**: ^7.33.2
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.4
- **Prettier**: 3.1.0
- **@types/react**: ^18.2.38 (TypeScript definitions)
- **@types/react-dom**: ^18.2.17
- **cross-env**: 7.0.3

## Database

- **MongoDB**: Latest (official Docker image)
- **Connection**: Port 27017 (standard MongoDB port)
- **Database Name**: local-idurar-erp-crp (development)

## Container & Orchestration

### Docker
- **Docker Compose Version**: 3.8
- **Base Image**: node:20.9.0-alpine

### Services Configuration
- **Backend Port**: 8888
- **Frontend Port**: 3000
- **MongoDB Port**: 27017

## Development Environment

### Environment Variables
- **NODE_ENV**: development/production
- **NODE_OPTIONS**: --openssl-legacy-provider
- **JWT_SECRET**: Configured per deployment
- **USE_MOCK_DB**: true (for development)

### Development Servers
- **Backend**: Runs on port 8888 with nodemon hot-reload
- **Frontend**: Runs on port 3000 with Vite HMR (Hot Module Replacement)

## Build & Development Tools

### Backend Scripts
- `npm start` - Production server
- `npm run dev` - Development server with hot-reload
- `npm run setup` - Initial setup script
- `npm run upgrade` - Upgrade script
- `npm run reset` - Reset script

### Frontend Scripts
- `npm run dev` - Development server
- `npm run build` - Production build with Vite
- `npm run lint` - ESLint code linting
- `npm run preview` - Preview production build
- `npm run dev:remote` - Development with remote backend

## Code Quality & Standards

### Linting & Formatting
- **ESLint**: ^8.56.0 (with React plugins)
- **Prettier**: 3.1.0

### Module Resolution
- Path aliases configured: `@` points to `src` directory (both frontend and backend)

## API & Integration

### External Services
- **AWS S3**: For file storage (client-s3 SDK)
- **OpenAI API**: AI features integration
- **Resend API**: Email service integration

## Version Control & CI/CD

### GitHub Workflows
- CodeSee Architecture Diagram
- GitHub Repository Stats

## Browser Compatibility

- Modern browsers with ES6+ support
- React 18 compatible browsers

## Purpose

This information helps Claude understand the technology stack and versions used in this project, enabling more accurate and compatible code generation and problem-solving. The project uses:

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Modern JavaScript**: ES6+ features, ES Modules (frontend)
- **UI Framework**: Ant Design 5.x
- **State Management**: Redux Toolkit
- **Build Tool**: Vite (fast, modern build tool)
- **Development**: Hot-reload enabled for both frontend and backend
- **Containerization**: Docker & Docker Compose for consistent development environment

## Important Notes

1. **Node.js 20.9.0** is the target runtime - ensure compatibility with this LTS version
2. **OpenSSL Legacy Provider** is enabled via NODE_OPTIONS for compatibility
3. **Module Systems**: Frontend uses ESM, Backend uses CommonJS
4. **Ant Design 5.x** - Major version with breaking changes from v4
5. **React 18** - Uses concurrent features and new rendering engine
6. **Vite Build Tool** - Faster than webpack, uses native ES modules
7. **MongoDB 8.x** Mongoose driver - Latest major version with new features
8. **Express.js 4.x** - Classic Express, not v5 beta

## Last Updated

Generated automatically during the workflow execution on 2024-11-20.
