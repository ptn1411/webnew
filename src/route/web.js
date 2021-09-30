const express = require('express');
const homeController=require('../controllers/homeController');
const Sendmail=require('../controllers/sendmail');
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/send-mail',Sendmail.Sendmail);
    return app.use("/", router);
}

module.exports = initWebRoutes;