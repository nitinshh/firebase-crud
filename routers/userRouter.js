const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/get', userController.get);
router.post('/create', userController.add);
router.put('/update', userController.update);
router.delete('/delete', userController.delete);

module.exports = router;
