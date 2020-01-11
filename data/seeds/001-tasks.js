
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Task 1', note: 'Note 1', completed: 0, project_id: 1},
        {description: 'Task 2', note: 'Note 2', completed: 1, project_id: 1},
      ]);
    });
};
