
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
    console.log(req.body.password);
    bcrypt.hash( req.body.password, 10 )
    .then( hash => {
        const user = User.create({
            name: req.body.name,
            password: hash
        })
        .then( () => res.status(201).json({ message: 'Utlisateur bien crée !'}))
        .catch( error => res.status(500).json({ error }));   
    })
    .catch( error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    
    User.findAll({ where: { name: req.body.name } })
    .then( user => {
        // console.log(user[0].password);
        if(!user){
            return res.status(401).json({ error: 'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.password, user[0].password)
        .then( valid => {
            // console.log(valid);
            if(!valid){
                return res.status(401).json({ error: 'Mot de passe incorrect !'});
            }
            // console.log(user[0].id);
            res.status(200).json({ 
                userId: user[0].id,
                token: jwt.sign(
                    { userId: user[0].id },
                    'RAMDOM_TOKEN_SECRET'
                    // { expiresIn: '24h' }
                )
            });
            
            
        })
        .catch( error => res.status(500).json({ error }));
    })
    .catch( error => res.status(500).json({ error }));
};