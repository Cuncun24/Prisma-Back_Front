

const aveService = require('../services/avesService');

const avesController = {
    async traerAves(req, res) {
        const avecitas = await aveService.traerAves();
        res.json(avecitas);
    },
    async createAve(req, res) {
        const nuevo = req.body;
        const nuevaave = await aveService.guardarAves(nuevo);
        res.json({mensaje: "nueva ave creada", ave: nuevaave})
    }
}


module.exports = avesController;