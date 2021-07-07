import express, { Router } from 'express';
const router = express.Router();
import controlador from '../api/mensajes.js';

router.post('/mensajes', async (req, res) => {
    try {
       
        let mensaje = await controlador.guardar(req.body);
        res.send(mensaje);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/mensajes', async (req, res) => {
    try {
        let mensajes = await controlador.buscar(req.query);
        console.log(mensajes)
        res.send(mensajes);
    } catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/mensajes/:id', async (req, res) => {
    const {id} = req.params
    try {
        let mensajes = await controlador.eliminar(id);
        res.send('El mensaje se elimino ');
    } catch (error) {
        res.status(500).send(error);
    }
});
router.put('/mensajes/:id', async (req, res) => {
    const {id} = req.params
    try {
        let mensajes = await controlador.update(id, req.body);
        res.send('El mensaje se Actualizo con exito');
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;