const express = require('express');
const homeController = require('./controllers/home.js');

module.exports = function(app) {
  const homeRouter = express.Router();

  homeRouter.get('/', homeController.home);
  homeRouter.get('/training', homeController.training);
  homeRouter.get('/recruiting', homeController.recruiting);
  homeRouter.get('/software', homeController.software);
  homeRouter.get('/contact', homeController.contact);

  app.use('/', homeRouter);
};
