# Falcon Backend

A NestJS backend application with Prisma ORM and PostgreSQL database.

## Project Structure

```
backend/
├── src/
│   ├── app.module.ts              # Root module
│   ├── main.ts                    # Application entry point
│   ├── database/
│   │   ├── database.module.ts     # Database configuration module
│   │   └── prisma.service.ts      # Prisma ORM service
│   ├── modules/                   # Feature modules
│   │   ├── auth/                  # Authentication module
│   │   ├── users/                 # User management module
│   │   ├── contacts/              # Contact form handling
│   │   ├── services/              # Services management
│   │   ├── news/                  # News/Blog management
│   │   └── company/               # Company information
│   └── common/                    # Shared utilities
│       ├── decorators/            # Custom decorators
│       ├── filters/               # Exception filters
│       ├── guards/                # Authentication guards
│       ├── interceptors/          # Response interceptors
│       ├── middleware/            # Custom middleware
│       └── pipes/                 # Data validation pipes
├── prisma/
│   ├── schema.prisma              # Prisma schema definition
│   └── migrations/                # Database migrations
├── test/                          # E2E tests
└── package.json
```

## Technology Stack

- **Framework**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Language**: TypeScript
- **Package Manager**: npm

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

The `.env` file contains the PostgreSQL connection string:

```env
DATABASE_URL="postgresql://postgres:GaToLJBpWjUb4G2c48R39LUMOtcU0ngH2orcfhwbol6D2ntL1G5c6vqCgcpP8XZZ@147.93.107.217:8799/postgres"
PORT=3000
NODE_ENV=development
```

### 3. Generate Prisma Client

```bash
npm run prisma:generate
```

### 4. Run Database Migrations

```bash
npm run prisma:migrate:dev
```

Or reset the database (development only):

```bash
npm run prisma:reset
```

### 5. Start the Server

Development mode:
```bash
npm run start:dev
```

Production mode:
```bash
npm run build
npm run start:prod
```

## Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with auto-reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the project
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run E2E tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate:dev` - Create and apply migrations
- `npm run prisma:reset` - Reset database (development only)
- `npm run prisma:studio` - Open Prisma Studio

## API Endpoints

### Contacts
- `POST /contacts` - Create a new contact/inquiry
- `GET /contacts` - Get all contacts
- `GET /contacts/:id` - Get a specific contact

### Health Check
- `GET /` - Application health check

## Database Models

### User
- `id` - Unique identifier
- `email` - User email (unique)
- `name` - User name
- `password` - Hashed password
- `role` - User role
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

### Contact
- `id` - Unique identifier
- `name` - Sender name
- `email` - Sender email
- `phone` - Sender phone (optional)
- `subject` - Inquiry subject
- `message` - Inquiry message
- `status` - Contact status (pending, resolved, etc.)
- `userId` - Associated user (optional)
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

### Service
- `id` - Unique identifier
- `title` - Service title
- `description` - Service description
- `icon` - Icon URL/identifier
- `category` - Service category
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

### News
- `id` - Unique identifier
- `title` - News/Blog title
- `content` - Article content
- `category` - News category
- `image` - Featured image URL
- `published` - Publication status
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

### CompanyInfo
- `id` - Unique identifier
- `name` - Company name
- `phone` - Company phone
- `email` - Company email
- `address` - Company address
- `data` - JSON data for company information
- `createdAt` - Creation timestamp
- `updatedAt` - Update timestamp

## Running Alongside Frontend

To run both frontend and backend together:

### Terminal 1 - Backend
```bash
cd backend
npm run start:dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

The backend API will be available at `http://localhost:3000`
The frontend will be available at `http://localhost:5173` (Vite default)

## Database Management with Prisma Studio

Open Prisma Studio to view and manage your database:

```bash
npm run prisma:studio
```

This will open a web interface at `http://localhost:5555`

## Troubleshooting

### Connection String Issues
Ensure your PostgreSQL database is accessible at the connection string specified in `.env`

### Prisma Client Issues
If you encounter Prisma client errors, regenerate it:
```bash
npm run prisma:generate
```

### Migration Issues
If migrations are out of sync with the database:
```bash
npm run prisma:reset  # For development only
```

## Next Steps

1. Create additional modules following the contacts module pattern
2. Implement authentication with JWT
3. Add request/response interceptors for logging
4. Set up API documentation with Swagger
5. Configure CORS for frontend communication
6. Add input validation with class-validator
