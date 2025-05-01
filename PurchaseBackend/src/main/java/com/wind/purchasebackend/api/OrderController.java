package com.wind.purchasebackend.api;

import com.wind.purchasebackend.domain.Orderinfo;
import com.wind.purchasebackend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goods/orderList")
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
}
