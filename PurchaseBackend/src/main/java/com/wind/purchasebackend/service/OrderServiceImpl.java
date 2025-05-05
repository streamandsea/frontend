package com.wind.purchasebackend.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wind.purchasebackend.dal.OrderMapper;
import com.wind.purchasebackend.domain.Orderinfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;

@Service
public class OrderServiceImpl implements OrderService {

    @Resource
    private OrderMapper orderMapper;

    @Override
    public List<Orderinfo> getOrders() {
//        Orderinfo orderInfo = new Orderinfo();
//        orderInfo.setId(1);
//        orderInfo.setCode("200");
//        return ListUtil.of(orderInfo);

        return orderMapper.selectList(null);
    }

    @Override
    public void saveProduct(Orderinfo orderinfo) {

        Orderinfo select = orderMapper.selectByPhone(orderinfo.getPhone());
        if (select != null) {
            throw  new IllegalStateException("手机号已存在");
        }
        orderMapper.insert(orderinfo);
    }

    @Override
    public void deleteById(Long productId) {
        orderMapper.deleteById(productId);
    }

    @Override
    // 添加事物注解，防止并发更新异常
    @Transactional
    public void updateProductById(Long productId, String ordername, String price) {
        Orderinfo select = orderMapper.selectById(productId);
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
        orderMapper.updateById(select);
    }

    @Override
    public IPage<Orderinfo> getOrdersByPage(Integer pageNum, Integer pageSize) {
        return orderMapper.selectPage(new Page<>(pageNum, pageSize), null);
    }
}
