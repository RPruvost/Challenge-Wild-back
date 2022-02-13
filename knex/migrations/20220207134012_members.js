
exports.up = function(knex) {
    return knex.schema
      .createTable('member', table=>{
          table.increments('id').primary();
          table.string('name', 25).notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('user')
  };
  