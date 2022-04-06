const express = require('express');
const router = express.Router();
const { relationshipUserTech } = require('../models');

router.get('/', async (req, res) => {
    try {

        const response = await relationshipUserTech.findAll();

        return res.status(200).send(response);

    } catch (error) {

        return res.status(200).send(`${error}`);

    }
});

router.get('/:user_id', async (req, res) => {
    try {
        const response = await relationshipUserTech.findAll({
            where: {
                user_id: req.params.user_id,
            }
        });

        return res.status(200).send(response);
    } catch (error) {
        return res.status(200).send({ error: 'Erro ao tentar pegar suas tecnologias' });
    }
});

router.post('/', async (req, res) => {
    try {

        const { user_id, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9 } = req.body;

        const response = await relationshipUserTech.create({
            user_id, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9
        });

        return res.status(200).send('Tecnologias registradas com sucesso!');

    } catch (error) {

        return res.status(400).send(`${error}`);

    }
});

router.put('/:user_id', async (req, res) => {
    try {

        const response = await relationshipUserTech.update(req.body, {
            where: {
                user_id: req.params.user_id,
            }
        });

        if (response == true) {

            return res.status(200).send(`Tecnologias do usuario #${req.params.user_id} foram atualizadas com sucesso!`);

        } else {

            return res.status(400).send('Nenhuma tecnologia foi atualizada devido a um erro')

        }

    } catch (error) {

        return res.status(400).send('Erro ao tentar atualizar a tecnologia');

    }
});

module.exports = router;