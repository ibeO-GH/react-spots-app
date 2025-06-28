## This Project is a spots-blog page developed with ReactJS

## Hosted link - https://react-spots-app.vercel.app/

# Getting Started with Spots-App

This guide will help you set up and run the Spots-App project from scratch.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## What is Spots-App?

Spots-App is a React-based application for browsing and managing image galleries. It helps users organize and view their favorite spots.

## Checking Node.js and npm

To check if you have Node.js and npm installed, run:

```sh
node -v
npm -v
```

If you see version numbers, you're good to go. If not, download and install from [nodejs.org](https://nodejs.org/).

## Step-by-Step Setup

1. **Clone the Repository**

   ```sh
   git clone <https://github.com/ibeO-GH/react-spots-app>
   cd react-spots-app
   ```

2. **Install Dependencies**

   Install all required packages:

   ```sh
   npm install
   ```

3. **Start the Development Server**

   Run the app in development mode:

   ```sh
   npm run dev
   ```

   This will start the Vite development server. Open the URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

4. **Project Structure Overview**

   - `src/` — Main source code folder
     - `components/` — React components (UI pieces)
     - `assets/images/` — Images used in the app
     - `data/gallaryData.js` — Initial gallery data
   - `public/` — Static files
   - `index.html` — Main HTML file

5. **Linting (Optional)**

   To check for code style issues, run:

   ```sh
   npm run lint
   ```

6. **Building for Production**

   To build the app for production:

   ```sh
   npm run build
   ```

   The output will be in the `dist/` folder.

7. **Preview Production Build (Optional)**

   To preview the production build locally:

   ```sh
   npm run preview
   ```

---

## Common Issues

- **npm: command not found**  
  Make sure Node.js and npm are installed and added to your PATH.
- **Port 5173 already in use**  
  Stop other apps using the port or change the port in `vite.config.js`.

---

## Troubleshooting

- If you encounter errors, ensure Node.js and npm are installed and up to date.
- Delete `node_modules` and run `npm install` again if dependencies are missing.

---

## Contributing

Feel free to fork the repo and submit pull requests!

---

## Screenshots

![Spots-App Screenshot](./assets/images/Overview.png)

![Spots-App Screenshot](./assets/images/Overview2.png)

<img src="../assets/images/Overview.png" alt="page overview" />
<img src="../assets/images/Overview2.png" alt="page overview" />
