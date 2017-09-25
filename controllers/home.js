let HomeController = {
  home: function(req, res) {
    const context = [
      {
        title: "Legacy",
        artist: "David Bowie"
      },
      {
        title: "Starboy",
        artist: "Weeknd"
      },
      {
        title: "Humanz",
        artist: "Gorillaz"
      }
    ];

    const cardContext = [
      {
        name: "Timmy"
      },
      {
        name: "Jimmy"
      }
    ]

    res.render('home', { context, cardContext });
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
