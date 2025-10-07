# Burn Tracking API

A NestJS-based API for tracking and monitoring fire incidents using Clean Architecture principles.

## Architecture

This project follows **Clean Architecture** with clear separation of concerns across layers:

```
src/
├── domain/           # Business logic and entities
│   ├── entities/     # Domain entities
│   └── repositories/ # Repository interfaces
├── application/      # Use cases and business rules
│   └── use-cases/    # Application use cases
├── infrastructure/   # External concerns
│   └── repositories/ # Repository implementations
├── presentation/     # Controllers and DTOs
│   └── controllers/  # HTTP controllers
└── modules/          # NestJS modules
```

### Layer Responsibilities

- **Domain**: Core business logic, entities, and repository contracts
- **Application**: Use cases that orchestrate domain logic
- **Infrastructure**: External services, databases, and repository implementations
- **Presentation**: HTTP controllers, request/response handling
- **Modules**: NestJS dependency injection configuration

## Application Flow

```
HTTP Request → Controller → Use Case → Repository → Database
                    ↓
HTTP Response ← Controller ← Use Case ← Repository ← Database
```

### Request Flow Example

1. **HTTP Request** arrives at `FireController`
2. **Controller** validates input and calls appropriate use case
3. **Use Case** (`GetActiveFiresUseCase`) executes business logic
4. **Repository** (`FireRepositoryImpl`) handles data persistence
5. **Response** flows back through the layers

## Getting Started

### Installation

```bash
npm install
```

### Running the Application

```bash
# Development
npm run start:dev

# Production
npm run start:prod
```

### Testing

```bash
# Unit tests
npm run test

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e
```

## API Endpoints

### Fire Management

- `GET /fires/active` - Get all active fires

## Development

### Code Quality

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message standards

### Scripts

```bash
npm run lint        # Run linter
npm run format      # Format code
npm run commitlint  # Validate commit messages
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for commit message conventions and development guidelines.

## License

This project is licensed under the UNLICENSED License.
