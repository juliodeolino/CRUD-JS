const express = require('express');
require('dotenv').config()
const jwt = require('jsonwebtoken')
const UsuariosRotas = require('./UsuarioRotas');
const PostsRotas = require('./PostsRotas');


const RotasPrivadas = express.Router();

RotasPrivadas.use((request, response, next) => {
    console.log(request.headers.token);

    let auth = false

    if(request.headers.token){
        const { token } = request.headers;

        try {
        jwt.verify(token, process.env.APP_KEY_TOKEN);
        auth = true;
            
        } catch (error) {
            return response.status(403).send(error);
        }
    }

    if(auth === false){
        return response.status(403).send("Não Autorizado");
    }
    next();
});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;
