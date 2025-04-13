const { Sequelize } = require("sequelize")
const dbconfig=require("../DBConfig/Config")

const sequelize=new Sequelize("postgres://postgres:postgres17@localhost:5435/postgres",{dialect:"postgres"})

sequelize.authenticate().then(()=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.error("Unable to connected");
    
})

const BookSchema=sequelize.define(book,{
id:{
    type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
},
name:{
    type:Sequelize.STRING,

},
authorName:{
    type:Sequelize.STRING,
},
releaseDate:{
    type:Sequelize.Date,
}
})

module.exports=BookSchema;