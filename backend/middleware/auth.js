const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    console.log(req.body);
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET');
        const userId = decodeToken.userId;
        console.log(userId);
        console.log(req.body.userId);

        if(req.body.userId && req.body.id !== userId){
            throw 'User Id non valable !';
        }else{
            next();
        }
    }catch (error) {
        res.status(401).json({ error: 'Requète non authentifiée !'});
    }
};