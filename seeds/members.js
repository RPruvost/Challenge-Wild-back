/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {id: 1, name: 'Eleftheria'},
        {id: 2, name: 'Gennadios'},
        {id: 3, name: 'Lysimachos'}
      ]);
    });
};
