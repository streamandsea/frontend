package com.wind.purchasebackend.api;

import com.baomidou.mybatisplus.core.metadata.IPage;
import lombok.extern.slf4j.Slf4j;
import com.wind.purchasebackend.domain.Orderinfo;
import com.wind.purchasebackend.dto.PlainResult;
import com.wind.purchasebackend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/order/api/goods/orderList")
@Slf4j
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Orderinfo> getOrderList() {
        return orderService.getOrders();
    }

    @PostMapping
    public void saveOrderList(@RequestBody Orderinfo orderinfo) {
        orderService.saveProduct(orderinfo);
    }

    //api/goods/productList/18
    @DeleteMapping(path = "{productId}")
    public void deleteOrderById(@PathVariable Long productId) {
        // orderService.deleteProductById(productId);
        // return PlainResult.success(null);
        orderService.deleteById(productId);
    }

    @PutMapping(path="{productId}")
    @Transactional
    public void updateOrderById(@PathVariable Long productId,
                                  @RequestParam String ordername,
                                  @RequestParam String price) {
        orderService.updateProductById(productId, ordername, price);
    }

    @GetMapping("/page")
    // IPage是mybatis-plus提供的分页查询结果对象，专门用于分页使用
    public PlainResult<IPage<Orderinfo>> getStudentsByPage(@RequestParam Integer pageNum, @RequestParam Integer pageSize) {
//        log.info("热部署测试 自动构建");
        return PlainResult.success(orderService.getOrdersByPage(pageNum, pageSize));
    }
}
