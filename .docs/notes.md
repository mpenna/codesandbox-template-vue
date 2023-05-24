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

5. Clean the starter project files and assets, leaving only the essential files to make the routing work and to start working on the TW experiments. In the end, this is what it should look like:

![hello tailwind](/.docs/Screenshot_20230524_113511.png)
