import express from 'express';
import { jediKnights, sithLords } from '../data/characters.js';
const sithRouter = express.Router();

sithRouter.get('/', (req, res) => res.render('pages/force', 
    {
        pageTitle: "Sith",
        subTitle: "Join the dark side",
        className: "sith",
        characters: sithLords
    }))

export default sithRouter;