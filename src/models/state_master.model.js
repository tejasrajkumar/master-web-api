
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'state_master';

  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.uuid('id').notNullable().primary();
        table.string('state_name');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  
  return db;
};
