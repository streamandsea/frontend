// 连接数据库 1.安装mysql 2.创建连接
const mysql = require('mysql')

// 创建数据库连接
const client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerasdf',
    database: 'ego_database'
})

// 封装数据库操作语句 sql语句 参数数组arr callback成功回调结果 
function sqlFun(sql, arr, callback) {
    client.query(sql, arr, function(err, result) {
        if (err) {
            // 打印错误详情
            console.log(err)
            console.log('数据库语句错误')
            return;
        }
        console.log('成功连接到数据库，线程ID:', client.threadId);
        callback(result)
    })
}

module.exports=sqlFun

