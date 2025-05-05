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

module.exports = router;