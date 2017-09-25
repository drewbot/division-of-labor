let HomeController = {
  home: function(req, res) {
    const context = {
      itemOne: "itemOne",
      itemTwo: "itemTwo",
      itemThree: "itemThree"
    }
    res.render('home', { context });
  },
  training: function(req, res) {
    res.render('training');
  },
  recruiting: function(req, res) {
    res.render('recruiting');
  },
  software: function(req, res) {
    res.render('software');
  }
};

module.exports = HomeController;
