  
import options from '../config/database.js';
const knex = require('knex')(options);


export default knex;