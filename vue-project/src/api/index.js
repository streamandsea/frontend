// 公共的请求方法

import base from "./base";
import axios from "@/utils/request";
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
     * 产品列表
     */
    productList(params) {
        return axios.get(base.productList,{params});
    }
};

export default api;