
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description: 'Test Description 1', completed: 0},
        {name: 'Project 2', description: 'Test Description 2', completed: 1}
      ]);
    });
};
