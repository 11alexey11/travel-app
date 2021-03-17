const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt')
const {countriesRu, countriesEn, countriesFr} = require('../public/data');

router.post('/register', async (req, res) => {

    if (!req.body.name || !req.body.password || !req.body.email) {
        return res.json({
            message: 'Имя, пароль и почта обязательны для заполнения'
        });
    }

    try {

        let email = req.body.email;

        const file = req.file
        console.log(file);

        await User.findOne({email})
            .then(user => {
                if (user) {
                    res.json({message: 'Пользователь с такой почтой уже зарегистрирован'})
                } else {

                    console.log(req.body);

                    const hashPassword = bcrypt.hash(req.body.password, 10)
                    console.log(hashPassword)


                    const user = {
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email
                    }


                    if (req.file) {
                        user.avatarUrl = req.file.path
                    }

                    const createUser = new User(user)

                    createUser.save().then(data => {
                        res.json(data)
                    })
                        .catch(error => {
                            res.json(error)
                        })

                }
            })
    } catch (error) {
        console.error(error);
        res.status(400).end();
    }
})

router.post('/login', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    User.findOne({email})
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.send({
                        user
                    })
                } else {
                    res.json({message: 'Неправильно введен пароль'})
                }
            } else {
                res.json({
                    message: 'Пользователя не существует!'
                })
            }
            console.log(user)
        })

});

router.post('/addScore', async (req, res) => {

    const name = req.body.name
    const countryId = req.body.rating.countryId
    const score = req.body.rating.score

    const rat = {
        countryId,
        score
    }

    try {
        await User.findOne({name})
            .then(user => {
                user.rating.push(rat)
                user.save()
                res.send('ok')
            })
    } catch (err) {
        res.json(
            {message: "Пользователя не существует"}
        )
    }
})

router.get('/getScore', async function (req, res) {

    let resultArray = []

    let usr = await User.find()
        .select('name rating')

    usr.map(u => {

        if (u.rating.length != 0) {
            let name = u.name
            let rating = u.rating

            const usr = {

                name,
                rating
            }

            resultArray.push(usr)
        }
    })

    res.send(resultArray)
})

router.get('/countries/ru', function (req, res, next) {
    res.send(countriesRu);
});

router.get('/countries/en', function (req, res, next) {
    res.send(countriesEn);
});

router.get('/countries/fr', function (req, res, next) {
    res.send(countriesFr);
});

module.exports = router