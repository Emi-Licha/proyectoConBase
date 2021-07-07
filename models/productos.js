import knex from '../database/knexProductos.js';

class Productos {

    constructor() { }

    async guardar(productos) {
        try {
            productos.fecha = new Date().toLocaleString()
            let resultado = await knex('productos').insert(productos);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar() {
        try {
            let productos = await from('productos').select('*')
            return productos;
        } catch (error) {
            throw error;
        }
    }
    async eliminar(condicion) {
        try {
            let resultado = await from('productos').where('id', parseInt(condicion)).del()
            return resultado;
        } catch (error) {
            throw error;
        }
    }
    async update(condicion,producto) {
        console.log(JSON.stringify(producto))
        try {
           let resultado = await from('productos').where('id', parseInt(condicion)).update({ nombre: producto.nombre,
            foto: producto.foto,
            precio: producto.precio,
            fecha: producto.fecha })
            return resultado
        } catch (error) {
            throw error;
        }
    }
}

export default new Productos();