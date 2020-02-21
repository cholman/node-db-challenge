const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('tasks')
  .join('projects', 'projects.id', '=', 'tasks.project_id')
  .select(
      'tasks.id',
      'tasks.description',
      'tasks.notes',
      'tasks.completed',
      'tasks.project_id',
      'projects.name as project_name',
      'projects.description as project_description'
  )
}

function getById(id) {
  return db('tasks')
    .where({ id })
    .first();
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('tasks')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('tasks')
    .where('id', id)
    .del();
}
