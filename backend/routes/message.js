const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/message');

router.get('/message', messageCtrl.allMessage);
router.post('/message', auth, messageCtrl.newMessage);

module.exports = router;