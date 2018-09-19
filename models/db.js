var Sequelize=require('sequelize');
var sequelize=new Sequelize('seqt','root','12345678',{'dialect': 'mysql','host': 'localhost','port': 3306});

sequelize.authenticate().then(function() {
    console.log("数据库连接成功");
}).catch(function(err) {
    //数据库连接失败时打印输出
    console.log('数据库连接错误',err);
    throw err;
});
module.exports=sequelize;
