# CLAUDE.md - Software Versions

This file contains the software versions detected in this repository to help with generating appropriate solutions.

## Project Information

- **Project Name**: IDURAR ERP CRM
- **Project Version**: 4.0.0
- **Description**: Open "Fair-Code" Source ERP / CRM (Invoice / Inventory / Accounting / HR)
- **Architecture**: MERN Stack (MongoDB + Express.js + React.js + Node.js)
- **License**: IDURAR License 1.0 (Fair-code)

## Detected Software Versions

### Core Runtime & Package Management

- **Node.js**: 20.9.0 (specified in Dockerfile and package.json engines)
- **npm**: 10.2.4 (specified in package.json engines and Dockerfile)

### Backend Technologies (Express.js API)

- **Framework**: Express.js ^4.18.2
- **Database**: MongoDB (using Mongoose ^8.1.1)
  - **MongoDB Docker Image**: mongo (latest - from docker-compose.yml)
  - **Connection**: mongodb://mongo:27017/local-idurar-erp-crp (development)
- **ODM**: Mongoose ^8.1.1 with mongoose-autopopulate ^1.1.0
- **Authentication**:
  - bcryptjs ^2.4.3 (password hashing)
  - jsonwebtoken ^9.0.2 (JWT tokens)
- **Validation**: Joi ^17.11.0
- **File Upload**:
  - express-fileupload ^1.4.3
  - multer ^1.4.4
- **Email Service**: Resend ^2.0.0
- **Cloud Storage**: @aws-sdk/client-s3 ^3.509.0
- **AI Integration**: OpenAI ^4.27.0
- **Template Engine**: Pug ^3.0.2
- **PDF Generation**: html-pdf ^3.0.1
- **Rate Limiting**: express-rate-limit ^7.1.5
- **Caching**: node-cache ^5.1.2
- **Other Backend Dependencies**:
  - compression ^1.7.4
  - cookie-parser ^1.4.6
  - cors ^2.8.5
  - currency.js 2.0.4
  - dotenv 16.3.1
  - glob 10.3.10
  - lodash ^4.17.21
  - module-alias ^2.2.3
  - moment ^2.30.1
  - shortid ^2.2.16
  - transliteration ^2.3.5

### Frontend Technologies (React.js SPA)

- **Framework**: React ^18.2.0 with react-dom ^18.2.0
- **Build Tool**: Vite ^5.1.4 with @vitejs/plugin-react ^4.2.1
- **UI Framework**: Ant Design (antd) ^5.14.1
  - **Pro Components**: @ant-design/pro-layout ^7.17.19
  - **Icons**: @ant-design/icons ^5.3.0
- **State Management**:
  - Redux ^5.0.1
  - @reduxjs/toolkit ^2.2.1
  - react-redux ^9.1.0
  - reselect ^5.1.0
- **Routing**: react-router-dom ^6.22.0
- **HTTP Client**: axios ^1.6.2
- **Date Handling**: dayjs ^1.11.10
- **Rich Text Editor**: react-quill ^2.0.0
- **Utilities**:
  - currency.js 2.0.4
  - just-compare ^2.3.0
  - shortid ^2.2.16
  - cross-env 7.0.3

### Development Tools

- **Backend Dev Server**: nodemon 3.0.1
- **Code Quality**:
  - **ESLint**: ^8.56.0
    - ECMAScript Version: es2020 (backend), latest (frontend)
    - React Version: 18.2
    - Plugins: react, react-hooks, react-refresh
  - **Prettier**: 3.1.0
    - Print Width: 100
    - Tab Width: 2
    - Single Quotes: true
    - Trailing Comma: es5
- **TypeScript Definitions** (for IDE support):
  - @types/react ^18.2.38
  - @types/react-dom ^18.2.17

### Container & Orchestration

- **Docker**: Supported (Dockerfiles provided)
  - **Base Image**: node:20.9.0-alpine
  - **Docker Compose Version**: 3.8
- **Backend Port**: 8888
- **Frontend Port**: 3000
- **MongoDB Port**: 27017 (internal)

### Environment Variables & Configuration

- **Backend Environment**:
  - NODE_ENV: development/production
  - NODE_OPTIONS: --openssl-legacy-provider
  - DATABASE: MongoDB connection string
  - JWT_SECRET: JWT signing key
  - PUBLIC_SERVER_FILE: File server URL
  - USE_MOCK_DB: Mock database flag
  - RESEND_API: Email service API key
  - OPENAI_API_KEY: OpenAI integration
  - OPENSSL_CONF: '/dev/null'

- **Frontend Environment**:
  - VITE_FILE_BASE_URL: Backend file URL
  - VITE_BACKEND_SERVER: Backend API URL
  - VITE_FRONTEND_SERVER_PORT: Frontend port (default: 3000)
  - VITE_DEV_REMOTE: Remote development flag
  - PROD: Production flag

### Project Structure

- **Backend Location**: `/backend/`
  - Source Code: `/backend/src/`
  - Entry Point: `server.js`
  - Module Type: CommonJS (default)

- **Frontend Location**: `/frontend/`
  - Source Code: `/frontend/src/`
  - Entry Point: `main.jsx`
  - Module Type: ES Modules

### Key Features & Integrations

- Multi-language support (44 languages)
- Invoice Management
- Accounting Management
- HR Management
- File upload and storage (AWS S3)
- Email notifications (Resend)
- AI capabilities (OpenAI)
- PDF generation
- Rate limiting for API protection
- In-memory caching
- JWT-based authentication
- MongoDB with in-memory server support for testing

### Version Control & CI/CD

- **Git**: Available (repository uses Git)
- **GitHub Actions**:
  - CodeSee architecture diagram workflow
  - GitHub repository stats workflow

## Development Commands

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run setup      # Run initial setup
npm run upgrade    # Run upgrade script
npm run reset      # Reset database
```

### Frontend
```bash
npm run dev            # Start Vite dev server
npm run build          # Build for production
npm run preview        # Preview production build
npm run dev:remote     # Start dev server with remote backend
npm run lint           # Run ESLint
```

### Docker
```bash
docker-compose up      # Start all services (backend, frontend, MongoDB)
```

## Purpose

This information helps Claude understand the technology stack and versions used in this project, enabling more accurate and compatible code generation and problem-solving. The project follows modern JavaScript practices with ES6+ syntax, functional React components with hooks, and MongoDB for data persistence.

## Important Notes

1. **Module Systems**: Backend uses CommonJS, Frontend uses ES Modules
2. **OpenSSL Legacy**: Project requires `--openssl-legacy-provider` flag for Node.js
3. **Database**: Can use either real MongoDB or in-memory MongoDB server for testing
4. **Authentication**: JWT-based with bcrypt password hashing
5. **API Structure**: RESTful API with Express.js middleware
6. **Frontend Routing**: Client-side routing with React Router v6
7. **State Management**: Redux Toolkit for centralized state management
8. **UI Library**: Ant Design v5 with Pro Layout components

## Code Review Notes

### Validation Inconsistency Alert

**Date**: 2025-11-14
**Issue**: Frontend-Backend validation mismatch for Company entity

The frontend `Company/config.js` now requires the `country` field (`required: true`), but the backend MongoDB schema (`backend/src/models/appModels/Company.js` line 118-121) does not enforce this requirement.

**Recommendation**: Add `required: true` to the country field in the backend Company model to maintain data integrity:

```javascript
country: {
  type: String,
  trim: true,
  required: true,  // Add this line
},
```

**Impact**: Without backend validation, users can bypass frontend validation through direct API calls, allowing records without country values.

## Last Updated

Generated automatically on 2025-11-14 during the workflow execution.
