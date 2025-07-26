# Test Automation Facade Pattern

This project is an automated test suite using [Playwright](https://playwright.dev/) to validate authentication and registration flows in a web application. The project adopts the **Facade Pattern** to organize and simplify page interactions, making tests more readable, reusable, and easy to maintain.

## Context

The goal of this repository is to demonstrate how to structure end-to-end (E2E) automated tests using the **Facade** design pattern. This pattern encapsulates complex page operations in facade classes, exposing high-level methods for the tests without requiring them to know implementation details of the interface elements.

## About the Facade Pattern

The **Facade Pattern** is used to provide a simplified interface to a set of interfaces in a subsystem. In the context of this project, each business flow (e.g., authentication, registration) has a facade (`AuthFacade`, `RegisterFacade`) that abstracts interactions with page elements, making test writing and maintenance easier.

**Example:**
```typescript
const register = new RegisterFacade(page);
await register.registerAs("email@teste.com", "Name", "password", "password");
```

## Project Structure

- `ui/pages/`: Page Objects with the elements and actions of each page.
- `ui/facade/`: Facades that encapsulate complete business flows.
- `tests/`: Automated test files.
- `playwright.config.ts`: Playwright configuration (including baseURL).

## Essential Commands

- **Run all tests:**
  ```
  npx playwright test
  ```

- **Run tests in interactive UI mode:**
  ```
  npx playwright test --ui
  ```

- **Run tests in a specific browser:**
  ```
  npx playwright test --project=chromium
  ```

- **Run a specific test file:**
  ```
  npx playwright test tests/login.test.ts
  ```

- **Run in debug mode:**
  ```
  npx playwright test --debug
  ```

- **Automatically generate tests with Codegen:**
  ```
  npx playwright codegen
  ```

## Requirements

- Node.js at least version 18 installed
- Dependencies installed with:
  ```
  npm run setup
  ```

## Notes

- The project uses `baseURL` configured in `playwright.config.ts`, allowing the use of relative paths in tests.
- As the sample application does not have a persistent database, the created data exists only during the session.
