import axios from '@/utils/request'

//接口列表

//订单列表
export const orderlist='/api/order/list'
//订单汇总
export const changeStatus='/api/order/changeStatus'
//订单详情
export const detail='/api/order/list/detail'
//汇总清单
export const collect='/api/order/collect'
//撤销汇总
export const cancel='/api/order/cancel'


//封装网络请求方法
//订单列表
function orderList(params){
    return axios.get(orderlist,{params})
}

//导出方法
export {
    orderList
}
