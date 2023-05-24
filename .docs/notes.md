# Notes

## Tutorials
    
### [Learn Tailwind CSS – Course for Beginners](https://www.youtube.com/watch?v=ft30zcMlFao)

### [Tailwind CSS Full Course for Beginners | Complete All-in-One Tutorial | 3 Hours](https://www.youtube.com/watch?v=lCxcTsOHrjo)

## Setup

### [Install Tailwind CSS with Vite and Vue](https://tailwindcss.com/docs/guides/vite#vue)

1. Create the project from scratch or (as such is the case with CodeSandbox) start from a pre-built starter project or template

```bash
npm create vite@latest my-project -- --template vue
cd my-project
```

2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure your template paths

```JavaScript
/* tailwind.config.js */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS

```CSS
/* src/assets/base.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### [Install Preline UI with Vue.js using Tailwind CSS](https://preline.co/docs/frameworks-vuejs.html)

1. Install Preline UI

```bash
npm install preline
```

2. Configure Preline UI JavaScript paths

```JavaScript
/* tailwind.config.js */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the Preline UI JavaScript

```JavaScript
// main.js

import('preline')
```

### Clean the starter project files and assets, leaving only the essential files to make the routing work and to start working with TW. In the end, this is what it should look like:

![hello tailwind](/.docs/Screenshot_20230524_172233.png)
