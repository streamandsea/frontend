package com.wind.purchasebackend.service;

import cn.hutool.core.collection.ListUtil;
import com.wind.purchasebackend.dal.ProductMapper;
import com.wind.purchasebackend.domain.Orderinfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService {

    @Resource
    private ProductMapper productMapper;

    @Override
    public List<Orderinfo> getProducts() {
//        Orderinfo orderInfo = new Orderinfo();
//        orderInfo.setId(1);
//        orderInfo.setCode("200");
//        return ListUtil.of(orderInfo);

        return productMapper.selectList(null);
    }

    @Override
    public void saveProduct(Orderinfo orderinfo) {

        Orderinfo select = productMapper.selectByPhone(orderinfo.getPhone());
        if (select != null) {
            throw  new IllegalStateException("手机号已存在");
        }
        productMapper.insert(orderinfo);
    }

    @Override
    public void deleteById(Long productId) {
        productMapper.deleteById(productId);
    }

    @Override
    // 添加事物注解，防止并发更新异常
    @Transactional
    public void updateProductById(Long productId, String ordername, String price) {
        Orderinfo select = productMapper.selectById(productId);
        if (select == null) {
            throw  new IllegalStateException("该商品不存在");
        }

        if (ordername != null && !ordername.isEmpty()
        && !Objects.equals(ordername, select.getOrdername())) {
            select.setOrdername(ordername);
        }

        if (price != null && !price.isEmpty()
                && !Objects.equals(price, select.getPrice())) {
            select.setPrice(price);
        }
        productMapper.updateById(select);
    }
}
