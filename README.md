# case-study

This is a base install of Vue 3 with TypeScript and Cypress similar to our own development environment.

## Task
Your task is to develop an application/component to display the information stored in src/data/dummy.json.
This task is a simplified version of a component we have developed in the past.

The goal is to display the information for different tasks for a user.
There are several tasks that can be switched between and completed.
The time spent on each task should be tracked and displayed as well as sent to the imaginary backend.

### Planning Phase
After reading these requirements spent a few minutes to plan your approach. 
- Create a simple diagram or list of the components you will need,
how they will interact and how data gets passed and/or stored
- Plan the project and create an estimate of how long each part will take (No need to split it into more than two or three parts)
- Document any suggestions or requirements for the backend where you receive and store your data

### UI Requirements
We want a 3 part layout
1. The left hand side has a navigation where the user can switch between tasks.
2. The top shows a timer for the current task with time spent, time planned for the task, and a visual representation of the progress
3. A main content area that shows the task information and allows the user to mark the task as completed.

### Functionality Requirements
1. The user can switch between tasks at any time
2. The timer for a task pauses and resumes when switching between tasks
3. The user can mark a task as completed, which sends a message with the task id and time spent to the imaginary backend

### Technical Requirements
1. Appropriately comment your code, make sure it readable but don't overdo it
2. Write Cypress test(s) for your application and/or component(s)
- The test(s) should cover the functionality of switching between tasks 
- The test(s) should cover the functionality of pausing and resuming the timer
- Optionally hook into your http call to the imaginary backend to validate the data that is sent

### Submitting your work
- Create a fork of this repository and push your work to it
- Prepare a small presentation of your work, explaining your approach and the challenges you faced





















# Default README


## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
bun test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
bun test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
bun build
bun test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
