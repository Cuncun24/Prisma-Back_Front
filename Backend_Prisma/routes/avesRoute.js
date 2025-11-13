const avesController = require('../controllers/avesController');
const express = require('express');
const router = express.Router();

router.get('/aves', avesController.traerAves);
router.post('/aves', avesController.createAve);
router.delete('/aves/:id', avesController.deleteAve);

module.exports = router;