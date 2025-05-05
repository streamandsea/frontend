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

}

// 单一导出
export const host='xxx';

export default base;