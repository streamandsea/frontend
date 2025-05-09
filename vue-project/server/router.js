const express = require('express');
const router = express.Router();
// 导入数据库 sqlFn('sql',[],res=>{})
const sqlFn = require('./mysql');
// 图片需要的模块
const multer = require('multer');
const fs = require('fs');
// 路由---接口地址
// 导入mockjs
const Mock = require("mockjs");

// 数据
const data = require("./data/format.json");

const adminLogin = require("./login/data/admin_login.json");
const vipLogin = require("./login/data/vip_login.json");

// 登录-分权限 1.超级管理员 admin 2. 其他账号 vip账号 3.
router.post("/login", (req, res) =>{
    const username = req.body.user;
    const pwd = req.body.pwd;
    if (username === 'admin') { // 超级管理员
        res.send(adminLogin)
    } else {
        res.send(vipLogin) // 普通VIP用户
    }

})

// 首页-销量额等数据统计
router.get("/home/dataCount", (req, res) => {
    res.send(
        Mock.mock({
            info: "数据统计",
            success: true,
            data: {
                list: {
                    id: 1,
                    "viewsTotal|10000-100000": 1,
                    "views|1-30000": 1,
                    viewsFun: function(){
                        if (this.viewsTotal < this.views) {

                            [this.viewsTotal, this.views] = [this.views, this.viewsTotal]
                        }
                    },
                    "salesTotal|10000-100000":1,
                    "sales|1-30000":1,
                    salesFun: function(){
                        if (this.salesTotal < this.sales) {
                            [this.salesTotal, this.sales] = [this.sales, this.salesTotal]
                        }
                    }
                },
            }
        })
    )
})

/* 
   首页 -今日 -订单统计
*/
router.get("/home/orderinfo", (req, res) => {
    res.send(
        Mock.mock({
        info: "订单统计信息",
        success: true,
        list: {
            "orderCount|1-100000": 1,
            "curOrderCount|1-1000": 1,
            count: function () {
            if (this.curOrderCount > this.orderCount) {
                [this.orderCount, this.curOrderCount] = [
                this.curOrderCount,
                this.orderCount,
                ];
            }
            },
            "money|1-200000": 1,
            "curMoney|1-1000": 1,
            moneyfun: function () {
            if (this.curMoney > this.money) {
                [this.money, this.curMoney] = [this.curMoney, this.money];
            }
            },
            "collect|1-99999": 1,
            "curCollect|1-999": 1,
            collectfun: function () {
            if (this.curCollect > this.collect) {
                [this.collect, this.curCollect] = [this.curCollect, this.collect];
            }
            },
            department: "",
            branchSchool: "",
        },
        })
);
});

/**
 * 首页折线图数据统计 月销量、月销售额
 */
router.get("/home/format", (req, res) => {
    res.send(data);
});

/**
 * 商品列表
 */
router.get("/goods/productList", (req, res) => {
    
    // const page = req.query.page || 1;
    // const sqlLen = "select * from project where id";
    // sqlFn(sqlLen, null, (data) => {
    //   let len = data.length;
    //   const sql =
    //     "select * from project order by id desc limit 8 offset " + (page - 1) * 8;
    //   sqlFn(sql, null, (result) => {
    //     if (result.length > 0) {
    //       res.send({
    //         status: 200,
    //         data: result,
    //         pageSize: 8,
    //         total: len,
    //       });
    //     } else {
    //       res.send({
    //         status: 500,
    //         msg: "暂无数据",
    //       });
    //     }
    //   });
    // });

    
    // Mock
    res.send(
        Mock.mock({
            status: 200,
            pageSize: 8,
            total: 13,
            info: "数据统计",
            success: true,
            data: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2017-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2018-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2019-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2020-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2021-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2022-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2023-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2024-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2025-04-13',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                
        })
    )
});



// const vipLogin = require("./login/data/vip_login.json");
// const adminLogin = require("./login/data/admin_login.json");
// const adminPermission = require("./login/data/admin_permission.json");
// const vipPermission = require("./login/data/vip_permission.json");

// // 登录-分权限 1.超级管理员 admin 2.其他账号 vip账号 3.
// router.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     // 超级管理员
//     if(username === 'admin') {
//         res.send(adminLogin);
//     } else {
//         res.send(vipLogin);
//     }
// })

// // 用户权限数据接口
// router.get('/permission', (req, res) => {
//     const token = req.headers.token;
//     if(token === 'admin') {
//         res.send(adminPermission);
//     } else {
//         res.send(vipPermission);
//     }
// })

/**
 * 首页折线图数据统计 月销量、月销售额
 */
// router.get("/home/format", (req, res) => {
//     res.send(data);
// })

/**
 * 首页 - 今日 -订单统计
 */




module.exports = router;