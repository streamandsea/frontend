// 公共的请求方法

import base from "./base";
import axios from "@/utils/request";
// import { cancel, changeStatus, collect, detail } from "./order";
// 或 import axios from "axios";

const api = {
    /**
     * 首页数据统计
     */
    totalInfo() {
        return axios.get(base.totalInfo);
    },
    /**
     * 首页订单数据
     */
    orderInfo() {
        return axios.get(base.orderInfo);
    },
    /**
     * 图表数据
     */
    format() {
        return axios.get(base.format);
    },
    /**
     * 产品列表
     */
    productList(params) {
        return axios.get(base.productList,{params});
    },

    // /**
    //  * 订单列表
    //  */
    // orderList(params){
    //     return axios.get(base.orderList,{params})
    // }

    /**
     * 汇总清单 {page}
     */
    collect(params) {
        return axios.get(base.collect, {params});
    },  
    /**
     * 撤销汇总 {id}
     */
    // cancel(params) {
    //     return axios.get(base.cancel, {params});
    // },
    /**
     * 订单详情 {id}
     */
    // detail(params) {
    //     return axios.get(base.detail, {params});
    // },
    /**
     * 订单列表 {page}
     */
    orderList(params) {
        return axios.get(base.orderList, {params});
    },
    /**
     * 订单汇总 --- ids
     */
    // changeStatus(params) {
    //     return axios.get(base.changeStatus, params);
    // }
}

export default api;