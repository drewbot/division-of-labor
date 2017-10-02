const homeContent = require('../content/home.js');

const HomeController = {
  home(req, res) {
    res.render('home', {
      navHome: true,
      albumContext: homeContent.albumContext,
      cardContext: homeContent.cardContext
    });
  },
  training(req, res) {
    res.render('training', {
      navDetail: true
    });
  },
  recruiting(req, res) {
    res.render('recruiting', {
      navDetail: true
    });
  },
  software(req, res) {
    res.render('software', {
      navDetail: true
    });
  }
};

module.exports = HomeController;
