const Message = require('../models/message');

exports.allMessage = (req, res, next) =>{
    Message.findAll()
    .then( message => {
        // console.log(message.length);
        res.send({ message });
    })
    .catch( error => res.status(500).json({ error }));
};

exports.newMessage = (req, res, next) => {
    console.log(req.body);
    Message.create({
        userId : req.body.userId,
        name: req.body.name,
        message: req.body.message
    })
    .then( ()=> res.status(200).json({ message : 'message enregistré !'}))
    .catch( error => res.status(500).json({ error }));
}