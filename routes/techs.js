const express = require('express');
const router = express.Router();

const { Techs } = require('../models');

router.get('/', async (req, res) => {
    try {

        const response = await Techs.findAll();

        return res.status(200).send(response);

    } catch (error) {

        return res.status(200).send('Erro ao tentar obter as técnologias');

    }
});

router.post('/', async (req, res) => {
    try {

        const { name, logo, color } = req.body;

        const response = await Techs.create({
            name, logo, color
        });

        return res.status(200).send(response);

    } catch (error) {

        return res.status(200).send('Erro ao tentar criar uma nova tech');

    }
});

module.exports = router;