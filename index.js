  
import express from 'express';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* en caso de una excepcion no atrapada */
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send(err);
});

/* configuro las rutas */
import {router as mensajeRouter} from './routes/mensajes.js'
app.use('/api', mensajeRouter);
import {router as productoRouter} from './routes/productos.js';
app.use('/api', productoRouter);
/* obtengo el puerto del enviroment o de la configuracion de la app */
const puerto = process.env.PORT;

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});