package com.wind.purchasebackend.api;

import cn.hutool.core.collection.ListUtil;
import com.wind.purchasebackend.domain.Orderinfo;
import com.wind.purchasebackend.service.ProductService;
import com.wind.purchasebackend.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/goods/productList")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Orderinfo> getProductList() {
        return productService.getProducts();
    }

    @PostMapping
    public void saveProductList(@RequestBody Orderinfo orderinfo) {
        productService.saveProduct(orderinfo);
    }

}
