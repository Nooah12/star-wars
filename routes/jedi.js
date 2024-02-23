import express from 'express';
import { jediKnights } from '../data/characters.js';

const jediRouter = express.Router();

jediRouter.get('/', (req, res) => res.render('pages/force', 
    {
        pageTitle: "Jedi",
        subTitle: "May the force be with you",
        className: "jedi",
        characters: jediKnights
    }))

export default jediRouter;

