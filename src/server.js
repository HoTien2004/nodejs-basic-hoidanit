import express from 'express';
import configViewEngine from './config/viewEngine.js';

const app = express();
const port = 8080;

configViewEngine(app);
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/abc', (req, res) => {
    res.send('abc');
})

app.listen(port,  () => {
    console.log(`listening on port ${port}`);
})
