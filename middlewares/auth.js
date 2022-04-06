const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.header['x-access-token'];

    console.log(token)

    if (!token) {
        return res.status(200).send({
            auth: false,
            message: 'Token não encontrado',
        });
    }

    jwt.verify(token, '!us3r70ken', (err, decoded) => {
        if (err) {
            console.log('Falha ao autenticar');
            return res.status(300).send({
                auth:false,
                message: 'Falha ao autenticar'
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyJWT;