# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Markdown Previewer

Neflify Link: [https://danielhsu-markdownpreviewer.netlify.app/](https://danielhsu-markdownpreviewer.netlify.app/)

## Table of Contents
[Introduction](#introduction)

[Usage](#usage)

## Introduction
It is a tool that takes user input in Markdown format, and displays the converted HTML in real time. 

This project is built using React, Typescript and styled-components.

## Usage
<img width="1512" alt="Screenshot 2023-10-10 at 3 40 41 PM" src="https://github.com/yukfaihsu/Markdown-Previewer/assets/108306347/90af163a-9a65-4d8e-9797-180b0bce3340">
1. This is the UI of the webpage.

##

<img width="1512" alt="Screenshot 2023-10-10 at 3 41 10 PM" src="https://github.com/yukfaihsu/Markdown-Previewer/assets/108306347/10b6cc3e-c32c-41bc-8c71-94c6284bfc2d">
2. A Markdown Guide will appear after clicking the "Markdown Guide" button.

##

<img width="1512" alt="Screenshot 2023-10-10 at 3 42 36 PM" src="https://github.com/yukfaihsu/Markdown-Previewer/assets/108306347/56313a98-8521-40e1-b3a1-f178bb1d4ffc">
3. Follow the Markdown Guide and the corresponding output will appear in real time.
