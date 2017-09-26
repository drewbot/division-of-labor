# Division of Labor Website

### Installation and setup

#### Prerequisites

Make sure you have Node.js, NPM and Nodemon installed.

#### Clone, Install, and Run

```
git clone git@github.com:drewbot/division-of-labor.git
cd division-of-labor
npm install
npm start
```

Navigate to `http://localhost:8080/`

### Development

Watch and bundle public JS changes

```
npm run watch
```

`npm start` will run `nodemon app.js` and update the server with every change including public JS changes.

Sass changes will automatically be preprocessed. The browser must be refreshed manually.
