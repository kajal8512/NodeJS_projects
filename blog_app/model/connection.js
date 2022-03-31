const knex = require('knex')( {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Kajal@123',
        database:"blogdb"
    }

})


// create table of ragister
knex.schema.hasTable('ragistertable', (t) => {
    t.increments("userid").primary()
    t.string("username",255).notNullable()
    t.string("password",255).notNullable()
    t.string("email",255).notNullable().unique()
}).then(()=>console.log("table created"))
.catch((err)=>{
    console.log("table is already exists");
})


// post id outincriment
// user id integer
// title string
// Descriapction string

knex.schema.hasTable('posttable',(t)=>{
    t.increments("postid").primary()
    t.integer("user_id",255)
    t.string("title",255).notNullable()
    t.string("description",255).notNullable()
}).then(()=>console.log("table created"))
.catch((err)=>{
    console.log("table is already exists")
    // console.log(err);
})


knex.schema.hasTable('likeDislike',(t)=>{
    t.integer("user_id")
    t.integer("postid")
    t.boolean("like",255)
    t.boolean("dislike",255)
}).then(()=>console.log("table created"))
.catch((err)=>{
    console.log("table is already exists")
    // console.log(err);
})

module.exports=knex
