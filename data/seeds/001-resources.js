
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Test Resource 1', description: 'Description 1'},
        {name: 'Test Resource 2', description: 'Description 2'},
      ]);
    });
};
