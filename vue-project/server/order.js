const express = require("express")

const router = express.Router()

const sqlFn = require("./mysql")

const Mock = require("mockjs");
const { dataTool } = require("echarts");


// 订单列表
router.get("/list", (req, res) => {

    //查询数据库
  const page = req.query.page || 1;
  const sqlLen = "select * from orderinfo where id";
  sqlFn(sqlLen, null, (data) => {
    let len = data.length;
    const sql =
      "select * from orderinfo order by id desc limit 8 offset " +
      (page - 1) * 8;
    sqlFn(sql, null, (result) => {
      if (result.length > 0) {
        res.send({
          status: 200,
          data: result,
          pageSize: 8,
          total: len,
        });
      } else {
        res.send({
          status: 500,
          msg: "暂无数据",
        });
      }
    });
  });
});

// 订单汇总列表

//2. 订单汇总接口---修改汇总状态
/* 
    批量汇总  id标识  
    sql =`delete from project where id in (101,102,103)`;
    前端数据接口：字符串  (数组转字符串)

    参数：
    1. 汇总的id号 字符串
    2. 操作人--登录者
    3. 手机号 
    4. 编号随机生成
*/
router.get("/changeStatus", (req, res) => {
  //ids='1,2,3'
  let ids = req.query.ids; //
  const sql = `update orderinfo set huizongStatus='2' where id in (${ids})`;
  console.log(sql);
  sqlFn(sql, null, (result) => {
    if (result.affectedRows > 0) {
      res.send({
        status: 200,
        msg: "修改成功",
      });
      //修改汇总清单--------------------------------
      //查询数据库
      const sqlLen = `select * from orderinfo where id in (${ids})`;
      sqlFn(sqlLen, null, (data) => {
        let sum = 0;
        data.forEach((ele) => {
          sum += Number(ele.price);
        });
        let code = ~~(Math.random() * 1000000);
        let phone =
          "151" + ~~(Math.random() * 1000000) + ~~(Math.random() * 100);
        const sql = `insert into collect(orderNum,phone,totalPrice,ids,operator) values(${code},${phone},?,?,'张三')`;
        let arr = [sum, ids];
        sqlFn(sql, arr, (result) => {
        });
      });
    } else {
      res.send({
        status: 500,
        msg: "修改失败",
      });
    }
  });
});


//4 汇总清单列表----------------------------------
router.get("/collect", (req, res) => {
  //查询数据库
  const page = req.query.page || 1;
  const sqlLen = "select * from collect";
  sqlFn(sqlLen, null, (data) => {
    let len = data.length;
    const sql =
      "select * from collect order by id desc limit 8 offset " + (page - 1) * 8;
    sqlFn(sql, null, (result) => {
      if (result.length > 0) {
        res.send({
          status: 200,
          data: result,
          pageSize: 8,
          total: len,
        });
      } else {
        res.send({
          status: 500,
          msg: "暂无数据",
        });
      }
    });
  });
});

module.exports = router;