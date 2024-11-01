import express from 'express';
import configViewEngine from './config/viewEngine.js';
import initWebRoute from './route/web.js';
// import connection from './config/connectDB.js';
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

app.listen(port,  () => {
    console.log(`listening on port ${port}`);
})

