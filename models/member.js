var db=require('./db');
var Sequelize=require('sequelize');
var Member=db.define('Member',{
    id:{
        field:'id',
        primaryKey:true,
        autoIncrement: true,
        type:Sequelize.INTEGER,
    },
    userName:{
        field:'username',
        allowNull: false,
        type:Sequelize.STRING,
    },
    password:{
        field:'password',
        allowNull: false,
        type:Sequelize.STRING,
    },
    createTime:{
        field:'create_time',
        // allowNull: false,
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
},
{
    tableName:'member',
    timestamps: false,
});

module.exports = Member;
