'use strict';

const Knex = require('knex');
const knexConfig = require('../knexfile');


// Initialize knex.
const knex = Knex(knexConfig.development);



main()
  .then(() => knex.destroy())
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });