# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


##  Step-by-Step Guide to Get Started

Clone or Download the Repository

- bash
```js
git clone <repo-url>
cd <project-folder>
Install Dependencies
```

- bash
```js
npm install
Start Development Server
```

- bash
```js
npm run dev
Build for Production
```

- bash
```js
npm run build
Linting
```
- bash
```js

npm run lint
Preview Production Build
```

- bash
```js
npm run preview
```

## Dependencies Explained

- `@apollo/client`: Used to integrate GraphQL with React. Provides a GraphQL client to interact with a GraphQL server.
- `formik`: A React library for form management. Simplifies the creation and validation of forms in React.
- `graphql`: Provides the necessary tools to build and consume GraphQL APIs in JavaScript.
- `react`: The core React library for building user interfaces.
- `react-dom`: Used to render React components in the browser's DOM.
- `yup`: A JavaScript schema validation library. Used in conjunction with Formik for form validation.

## Project Structure

- `src/`: Main directory of the source code.
- `components/`: React components.
- `utils/`: Utilities, such as validation schemas and GraphQL configurations.
- `App.tsx`: Main component of the application.
