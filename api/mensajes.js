
import Mensaje from "../models/mensaje.js";

class MensajeController {

    constructor() { }

    async guardar(mensaje) {
        try {
            return await Mensaje.guardar(mensaje);
        } catch (error) {
            throw error;
        }
    }

    async buscar(condicion) {
        try {
            return await Mensaje.buscar(condicion);
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            return await Mensaje.eliminar(condicion);
        } catch (error) {
            throw error;
        }
    }
    async update(condicion, mensaje) {
        try {
            return await Mensaje.update(condicion, mensaje);
        } catch (error) {
            throw error;
        }
    }
}

export default new MensajeController();