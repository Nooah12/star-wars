import express from 'express';
import jediRouter from './routes/jedi.js';
import sithRouter from './routes/sith.js';

const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.render('pages/home',
        {
            pageTitle: "Star Wars",
            subTitle: "This is my Star Wars homepage",
            underline: true
    }
    ); // render create path for ejs
})

app.use(express.static('public')); // look for any static(css) in public folder
app.use('/jedi', jediRouter);
app.use('/sith', sithRouter);
app.set('view engine', 'ejs'); // look for views folder

app.listen(port, () => console.log(`Listening on ${port}`));