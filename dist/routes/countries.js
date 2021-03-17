"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("../public/data");
var router = express_1.Router();
/* GET users listing. */
router.get('/ru', function (req, res, next) {
    res.send(data_1.countriesRu);
});
router.get('/en', function (req, res, next) {
    res.send(data_1.countriesEn);
});
router.get('/fr', function (req, res, next) {
    res.send(data_1.countriesFr);
});
exports.default = router;
//# sourceMappingURL=countries.js.map