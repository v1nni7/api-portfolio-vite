const express = require('express');
const verifyJWT = require('../middlewares/auth');
const router = express.Router();
const { Users } = require('../models')

router.get('/', async (req, res) => {
    const response = await Users.findAll();
    res.status(200).send(response);
});

router.get('/:id'/* , verifyJWT */ ,async (req, res) => {
    const response = await Users.findAll({
        where: {
            id: req.params.id,
        }
    });

    res.status(200).send({
        fName: response[0].dataValues.fName,
        lName: response[0].dataValues.lName,
        photo: response[0].dataValues.photo,
        email: response[0].dataValues.email,
        carrer: response[0].dataValues.carrer,
        phone: response[0].dataValues.phone,
        password: response[0].dataValues.password,
        location: response[0].dataValues.location,
        companyWork: response[0].dataValues.companyWork,
        github: response[0].dataValues.github,
        linkedin: response[0].dataValues.linkedin,
        twitter: response[0].dataValues.twitter,
        facebook: response[0].dataValues.facebook,
        whatsapp: response[0].dataValues.whatsapp,
        professionalEmail: response[0].dataValues.professionalEmail,
    });
});

router.post('/', async (req, res) => {
    try {

        const { fName, lName, photo, email, carrer, phone, password, location, companyWork, github, linkedin, twitter, facebook, whatsapp, site, professionalEmail } = req.body;

        const response = await Users.create({
            fName, lName, photo, email, carrer, phone, password, location, companyWork, github, linkedin, twitter, facebook, whatsapp, site, professionalEmail
        });

        return res.status(200).send(response);

    } catch (error) {

        return res.status(400).send(`Error: ${error}`);

    }
});

router.put('/:id', async (req, res) => {
    try {

        const response = await Users.update(req.body, {
            where: {
                id: req.params.id,
            }
        });

        console.log(response)

        if (response == true) {

            return res.status(200).send(`Usuário #${req.params.id} atualizado com sucesso!`);

        } else {

            return res.status(400).send(`Usuário #${req.params.id} não existe no Banco de Dados!`)

        }

    } catch (error) {

        return res.status(400).send('Não foi possível atualizar os usuários');

    }
});

router.delete('/:id', async (req, res) => {
    try {

        const response = await Users.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (response == true){

            return res.status(200).send(`O usuário #${req.params.id} foi removido com sucesso!`);

        } else {

            return res.status(200).send(`O usuário #${req.params.id} foi removido com sucesso!`);

        }

    } catch (error) {

        return res.status(400).send('Erro ao tentar deletar o usuário do Banco de Dados');

    }
});

module.exports = router;