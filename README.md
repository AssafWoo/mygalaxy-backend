# MyGalaxy Backend: NestJS Application Guide

Welcome to the MyGalaxy Backend! This NestJS application is designed to serve as the backend for presenting various data related to the Star Wars universe. It is structured for scalability and efficient data handling, utilizing REM units for front-end consistency with 1rem equating to 16px.

This project was initialized with NestJS, a progressive Node.js framework for building efficient and reliable server-side applications.

## Scripts for Project Management

Within the project directory, several scripts are provided to manage and interact with the application:

### `npm start`

Starts the NestJS application in the development mode. The application will be available on [http://localhost:3002](http://localhost:3002).

### `npm run start:dev`

Runs the application in watch mode, which is useful for development as the app will automatically reload if you change any of the source files.

### `npm run start:debug`

Runs the application in debug mode with watch enabled, allowing you to attach a debugger to the process for more in-depth debugging.

### `npm run start:prod`

Starts the compiled application in production mode, assuming you have already built the app with `npm run build`.

### `npm run build`

Compiles the application into JavaScript, readying it for production deployment.

### `npm test`

Runs the unit tests for the application using Jest, in an interactive watch mode by default.

### `npm run test:cov`

Runs the unit tests and generates a coverage report to show how much of the codebase is covered by tests.

### `npm run test:debug`

Runs the tests in a mode that allows you to start a debugging session.

### `npm run test:e2e`

Runs end-to-end tests using a separate Jest configuration.

### `npm run lint`

Lints and fixes TypeScript files using ESLint.

### `npm run format`

Formats code using Prettier to ensure code style consistency.

## Additional Information

- **NestJS Documentation**: For comprehensive knowledge about NestJS, visit their [official documentation](https://docs.nestjs.com/).
- **TypeScript Learning**: To learn more about TypeScript, the language used in NestJS, visit the [TypeScript documentation](https://www.typescriptlang.org/docs/).
- **Jest Testing Framework**: For more details on testing with Jest, check out their [documentation](https://jestjs.io/docs/en/getting-started).
- **Code Quality Tools**: This project uses ESLint and Prettier to maintain high code quality standards.

Enjoy building scalable server-side applications with NestJS and exploring the vast Star Wars universe data!
