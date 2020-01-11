
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable().unique()
        tbl.string('description', 256)
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description', 256)
    })
    .createTable('project_resource', tbl => {
        tbl.increments()
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources')
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 256).notNullable()
        tbl.string('note', 128)
        tbl.boolean('completed').notNullable().defaultTo(false)
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resource')
    .dropTableIfExists('projects')
};
