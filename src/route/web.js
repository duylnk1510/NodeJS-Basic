import express from "express";
import homeController, { getHomePage } from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res) => {
        res.send('Duy béo ahihi!')
    })

    return app.use('/', router);// dấu / này giống cái request mapping nó sẽ + vs đường dẫn ở trên

}

export default initWebRoute;
