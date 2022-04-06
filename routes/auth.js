const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {

    const { email, password } = req.body

    const user = await Users.findAll({
        where: {
            email, password
        }
    });

    if (!user.length) {

        return res.status(200).send({ error: 'Email ou senha incorretos!' });

    } else {

        const userToken = jwt.sign({ id: user.id }, '!us3r70ken', { expiresIn: 600 }); // 10 Minutos de duração

        return res.status(200).send({
            auth: true,
            token: userToken,
            id: user[0].dataValues.id,
        });
    }
});

module.exports = router;