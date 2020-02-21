const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('projects')
  .join('tasks', 'tasks.project_id', '=', 'projects.id')
  .select(
      'projects.id', 
      'projects.name', 
      'projects.description', 
      'projects.completed',
      'tasks.description as task');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('projects')
    .where('id', id)
    .del();
}
