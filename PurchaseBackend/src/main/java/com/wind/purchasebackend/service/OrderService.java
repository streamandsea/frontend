package com.wind.purchasebackend.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.wind.purchasebackend.domain.Orderinfo;

import java.util.List;


public interface OrderService {

    /**
     * 产品列表查询
     * @return
     */
    List<Orderinfo> getOrders();

    /**
     * 产品保存
     * @param orderinfo
     */
    void saveProduct(Orderinfo orderinfo);

    /**
     * 根据id删除产品
     * @param productId
     */
    void deleteById(Long productId);

    /**
     * 根据id更新产品
     * @param productId
     * @param ordername
     * @param price
     */
    void updateProductById(Long productId, String ordername, String price);

    /**
     * 分页查询
     * @param pageNum
     * @param pageSize
     * @return
     */
    IPage<Orderinfo> getOrdersByPage(Integer pageNum, Integer pageSize);
}
