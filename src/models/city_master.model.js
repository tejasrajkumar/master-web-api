
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'city_master';
    
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.uuid('id').notNullable().primary();
        table.uuid('state_id').references('id').inTable('state_master');
        table.string('city_name');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  
  return db;
};
