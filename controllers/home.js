const homeContent = require('../content/home.js');

const HomeController = {
  home(req, res) {
    res.render('home', {
      albumContext: homeContent.albumContext,
      cardContext: homeContent.cardContext
    });
  },
  training(req, res) {
    res.render('training');
  },
  recruiting(req, res) {
    res.render('recruiting');
  },
  software(req, res) {
    res.render('software');
  }
};

module.exports = HomeController;
