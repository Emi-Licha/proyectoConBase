
import { schema, fn } from '../database/knex';

schema.createTable('mensajes', table => {
    table.increments('id');
    table.string('mensaje');
    table.string('email');
    table.timestamp('fecha', { useTz: true }).notNullable().defaultTo(fn.now());
}).then(() => {
    console.log('tabla mensajes creada!');
}).catch(error => {
    console.log('error:', error);
    throw error;
}).finally(() => {
    console.log('cerrando conexion...');
    process.exit(0);
});