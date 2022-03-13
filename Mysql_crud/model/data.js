const knex = require('knex')( {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Kajal@123',
        database: 'ndData'
    }

})
 
// for creating table

// const knex = require('knex')(options);
function create() {
    knex.schema.createTable('srltable', (t) => {
        t.increments('id').primary();
        t.string('name',255);
        t.string('logo',255);
        t.string('notes',255);
        t.string('days_to_complete',255);
        t.string('short_description',255);
        t.string('type',255);
        t.string("course_type",255);
        t.string("lang_available",255);
    }).then(() => console.log("table created"))
        .catch((err) => {
            console.log("table is already exsits")
          })
}
create();


module.exports=knex
