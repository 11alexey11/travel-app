import {Router} from 'express';
import {v4 as uuid} from 'uuid';
import {countriesRu, countriesEn, countriesFr} from '../public/data';

const User = require('../model/user')

const router = Router();

router.post('/register', (request, response) => {

    const {name, password, email, avatarUrl} = request.body

    const createUser = new User({
        name, password, email, avatarUrl
    })

    createUser.save().then(data => {
        response.json(data)
    })
        .catch(error => {
            response.json(error)
        })

})

router.post('/login', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    User.findOne({email})
        .then(user => {
            if (user) {
                res.send({
                    user
                })
            } else {
                res.json({
                    message: 'Not user found!'
                })
            }
            console.log(user)
        })

});

router.post('/addScore', (req, res) => {

    const name = req.body.name
    const countryId = req.body.rating.countryId
    const score = req.body.rating.score

    console.log(name, countryId, score);

    const rating = {
        countryId,
        score
    }

    User.findOne({name})
        .then(user => {
            user.rating.push(rating)
            user.save()
            res.send("ok")
        })
})
export default router;