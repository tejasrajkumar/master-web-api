
module.exports = function (app) {
    const db = app.get('knexClient');
    const tableName = 'employee_master';
    
    db.schema.hasTable(tableName).then(exists => {
      if(!exists) {
        db.schema.createTable(tableName, table => {
            table.uuid('id').notNullable().primary();
            table.string('first_name');
            table.string('last_name');
            table.string('employee_code');
            table.timestamp("date_of_birth");
            table.string('address');
            table.integer('salary');
            table.uuid('state_id').references('id').inTable('state_master');
            table.uuid('city_id').references('id').inTable('city_master');
        })
          .then(() => console.log(`Created ${tableName} table`))
          .catch(e => console.error(`Error creating ${tableName} table`, e));
      }
    });
  
    return db;
  };
  