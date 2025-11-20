# CLAUDE.md - Software Versions

This file contains the software versions detected in the IDURAR ERP CRM repository to help with generating appropriate solutions.

## Project Information

- **Project Name**: IDURAR ERP CRM
- **Project Version**: 4.0.0
- **Architecture**: MERN Stack (MongoDB, Express.js, React.js, Node.js)
- **License**: Fair-code License (IDURAR License 1.0)

## Core Technologies

### Runtime & Language

- **Node.js**: 20.9.0 (specified in engines and Dockerfiles)
- **npm**: 10.2.4 (specified in engines and Dockerfiles)
- **ECMAScript**: ES2020 (backend), ES Modules (frontend)

### Backend Stack

#### Framework & Core Dependencies

- **Express.js**: ^4.18.2
- **Mongoose**: ^8.1.1 (MongoDB ODM)
- **MongoDB**: latest (using official mongo Docker image)

#### Backend Libraries

- **Authentication & Security**:
  - bcryptjs: ^2.4.3 (password hashing)
  - jsonwebtoken: ^9.0.2 (JWT authentication)
  - cookie-parser: ^1.4.6
  - express-rate-limit: ^7.1.5

- **File Handling**:
  - express-fileupload: ^1.4.3
  - multer: ^1.4.4
  - @aws-sdk/client-s3: ^3.509.0

- **PDF Generation**:
  - html-pdf: ^3.0.1
  - pug: ^3.0.2 (template engine)

- **Utilities**:
  - lodash: ^4.17.21
  - moment: ^2.30.1 (date/time handling)
  - currency.js: 2.0.4
  - shortid: ^2.2.16
  - joi: ^17.11.0 (validation)
  - dotenv: 16.3.1 (environment variables)
  - cors: ^2.8.5
  - compression: ^1.7.4
  - glob: 10.3.10
  - module-alias: ^2.2.3
  - node-cache: ^5.1.2
  - transliteration: ^2.3.5

- **AI & Email Services**:
  - openai: ^4.27.0
  - resend: ^2.0.0

- **Development Tools**:
  - nodemon: 3.0.1
  - mongodb-memory-server: ^10.1.4

#### Backend Code Quality Tools

- **ESLint**: eslint:recommended configuration
  - ECMAScript Version: 12 (ES2021)
  - Source Type: module
- **Prettier**:
  - Print Width: 100
  - Tab Width: 2
  - Single Quotes: true
  - Trailing Comma: es5

### Frontend Stack

#### Framework & Build Tools

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **Vite**: ^5.1.4 (build tool and dev server)
- **@vitejs/plugin-react**: ^4.2.1

#### UI Framework

- **Ant Design (AntD)**: ^5.14.1
- **@ant-design/icons**: ^5.3.0
- **@ant-design/pro-layout**: ^7.17.19

#### State Management & Routing

- **Redux Toolkit**: ^2.2.1
- **react-redux**: ^9.1.0
- **redux**: ^5.0.1
- **reselect**: ^5.1.0
- **react-router-dom**: ^6.22.0

#### Frontend Libraries

- **axios**: ^1.6.2 (HTTP client)
- **dayjs**: ^1.11.10 (date/time handling)
- **currency.js**: 2.0.4
- **react-quill**: ^2.0.0 (rich text editor)
- **just-compare**: ^2.3.0
- **shortid**: ^2.2.16
- **cross-env**: 7.0.3

#### Frontend Development Tools

- **TypeScript Types**:
  - @types/react: ^18.2.38
  - @types/react-dom: ^18.2.17
- **ESLint**: ^8.56.0
  - eslint-plugin-react: ^7.33.2
  - eslint-plugin-react-hooks: ^4.6.0
  - eslint-plugin-react-refresh: ^0.4.4
- **Prettier**: 3.1.0

### Database

- **MongoDB**: latest (official Docker image)
- **Mongoose ODM**: ^8.1.1
- **mongoose-autopopulate**: ^1.1.0

### Container & DevOps

- **Docker**: Supported (Dockerfiles for both frontend and backend)
  - Base Image: node:20.9.0-alpine
- **Docker Compose**: Version 3.8
  - Backend Port: 8888
  - Frontend Port: 3000
  - MongoDB Port: 27017 (internal)

### Development Environment

- **Backend Dev Server**: nodemon (hot reload)
- **Frontend Dev Server**: Vite dev server (port 3000)
- **Module Type**: ES Modules (frontend), CommonJS with module-alias (backend)
- **Path Aliases**: @ maps to src/ directory (both frontend and backend)

### External Services & APIs

- **AWS S3**: Supported via @aws-sdk/client-s3 ^3.509.0
- **OpenAI API**: Supported via openai ^4.27.0
- **Resend Email API**: Supported via resend ^2.0.0

### Environment Variables

Backend uses the following service configurations:
- MongoDB database connection
- Resend API for email services
- OpenAI API for AI features
- JWT secret for authentication
- AWS S3 for file storage

## Key Features

- **Multi-language Support**: 44 languages
- **Invoice Management**: PDF generation with html-pdf
- **Accounting Management**: Currency handling with currency.js
- **HR Management**: Admin and people models
- **ERP/CRM Functionality**: Lead, Quote, Order, Payment, Product, Shipment management

## Development Scripts

### Backend
- `npm start`: Production server
- `npm run dev`: Development server with nodemon
- `npm run setup`: Initial setup script
- `npm run upgrade`: Database upgrade script
- `npm run reset`: Reset database script

### Frontend
- `npm run dev`: Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview production build
- `npm run lint`: ESLint code checking
- `npm run dev:remote`: Development with remote backend

## Purpose

This information helps Claude understand the technology stack and versions used in this project, enabling more accurate and compatible code generation and problem-solving. The project is a full-stack ERP/CRM application built with modern JavaScript technologies and follows best practices for both frontend and backend development.

## Last Updated

Generated automatically on November 20, 2024 during workflow execution.

## Notes

- The project uses Node.js 20.9.0 (LTS) with npm 10.2.4
- React 18.2.0 is used with modern hooks and functional components
- Mongoose 8.1.1 provides MongoDB ODM with latest features
- Vite 5.1.4 provides fast HMR and optimized builds
- Docker setup is available for containerized development
- Code quality is maintained with ESLint and Prettier configurations
- The project supports both local and cloud deployments

## Code Review Findings

### Company Country Field Validation (frontend/src/pages/Company/config.js)

**Issue**: Frontend-only validation for required country field
- Frontend config marks country as `required: true`
- Backend Mongoose schema (/backend/src/models/appModels/Company.js, lines 118-121) does NOT enforce this requirement
- This creates a validation bypass risk via direct API calls

**Recommendation**: For complete data integrity, add `required: true` to the country field in the backend Mongoose schema to prevent API-level validation bypass
