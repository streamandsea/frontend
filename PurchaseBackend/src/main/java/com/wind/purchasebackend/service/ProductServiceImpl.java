package com.wind.purchasebackend.service;

import cn.hutool.core.collection.ListUtil;
import com.wind.purchasebackend.dal.ProductMapper;
import com.wind.purchasebackend.domain.Orderinfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.List;

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
}
