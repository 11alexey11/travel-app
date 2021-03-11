import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import {countriesRu, countriesEn, countriesFr} from '../public/data';

const router = Router();

/* GET users listing. */
router.get('/ru', function (req, res, next) {
  res.send(countriesRu);
});

router.get('/en', function (req, res, next) {
  res.send(countriesEn);
});

router.get('/fr', function (req, res, next) {
  res.send(countriesFr);
});

export default router;
