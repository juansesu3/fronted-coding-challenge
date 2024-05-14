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

-bash
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

- `@apollo/client`: Utilizado para integrar GraphQL con React. Proporciona un cliente GraphQL para interactuar con un servidor GraphQL.
- `formik`: Una librería de React para la gestión de formularios. Simplifica la creación y validación de formularios en React.
- `graphql`: Proporciona las herramientas necesarias para construir y consumir APIs GraphQL en JavaScript.
- `react`: La biblioteca principal de React para construir interfaces de usuario.
- `react-dom`: Utilizado para renderizar componentes de React en el DOM del navegador.
- `yup`: Una librería de validación de esquemas JavaScript. Utilizada en conjunto con Formik para la validación de formularios.


## Project Structure

- `src/`: Directorio principal del código fuente.
- `components/`: Componentes de React.
- `utils/`: Utilidades, como esquemas de validación y configuraciones de GraphQL.
- `App.tsx`: Componente principal de la aplicación.