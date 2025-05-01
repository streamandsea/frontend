package com.wind.purchasebackend.service;

import com.wind.purchasebackend.domain.Orderinfo;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {

    /**
     * 产品列表查询
     * @return
     */
    List<Orderinfo> getProducts();

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
}
