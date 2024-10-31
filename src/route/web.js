import express from 'express';
import { getHomepage } from '../controller/homeController.js';
// import homeController from '../controller/homeController.js';

let router = express.Router();

const initWebRoute = (app) => {
    // router.get('/', homeController.getHomepage);
    router.get('/', getHomepage);

    router.get('/abc', (req, res) => {
        res.send('abc');
    });

    return app.use('/', router);
}

export default initWebRoute;
