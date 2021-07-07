
import express from 'express';
const router = express.Router();
import controlador from '../api/productos.js'

router.post('/productos', async (req, res) => {
    try {
        let productos = await controlador.guardar(req.body);
        res.send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/productos', async (req, res) => {
    try {
        let productos = await controlador.buscar(req.query);
        console.log(productos)
        res.send(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/productos/:id', async (req, res) => {
    const {id} = req.params
    try {
        let producto = await controlador.eliminar(id);
        res.send('El producto se elimino con exito');
    } catch (error) {
        res.status(500).send(error);
    }
});
router.put('/productos/:id', async (req, res) => {
    const {id} = req.params
    try {
        let producto = await controlador.update(id, req.body);
        res.send('El producto se actualizo con exito');
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;