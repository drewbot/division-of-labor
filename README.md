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

#### Public JS

Watch and bundle public JS changes

```
npm run watch
```

#### Server JS and Sass

`npm start` will run `nodemon app.js` and update the server with every change including public JS changes.

Sass changes will automatically be preprocessed by `npm start`. The browser must be refreshed manually.

### Styling

Grid system provided by [Sass Flexbox Grid](http://sassflexboxgrid.com/) via classes, Sass variables, and Sass mixins.

Mobile-first philosophy is applied.
Try to use only min-width media queries.
media range Sass variables are provided by [Sass Flexbox Grid - variables](http://sassflexboxgrid.com/views/variables).