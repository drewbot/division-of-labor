const HomeController = {
    home(req, res) {
        res.render('home');
    },
    training(req, res) {
        res.render('training');
    },
    recruiting(req, res) {
        res.render('recruiting');
    },
    software(req, res) {
        res.render('software');
    },
    contact(req, res) {
        res.render('contact');
    }
};

module.exports = HomeController;