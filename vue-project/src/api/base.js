// 接口地址
const base = {
    totalInfo: '/api/home/dataCount', //首页统计数据
    orderInfo: '/api/home/orderinfo', // 订单数据
    format: '/api/home/format', //首页折线数据
    productList: '/api/goods/productList', // 商品列表


    // 订单管理
    orderList:"/api/order/list", // 订单列表 page
    // orderList:"api/goods/orderList",
    changeStatus:"/api/order/changeStatus", // 订单汇总
    collect:"/api/order/collect", // 汇总清单列表 page
    // cancel:"/api/order/cancel", // 撤销汇总 id
    // detail:"/api/order/list/detail", // 订单详情 id

}

// 单一导出
export const host='xxx';

export default base;