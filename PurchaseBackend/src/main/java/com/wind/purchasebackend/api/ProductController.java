package com.wind.purchasebackend.api;

import cn.hutool.core.collection.ListUtil;
import com.wind.purchasebackend.domain.Orderinfo;
import com.wind.purchasebackend.service.ProductService;
import com.wind.purchasebackend.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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

    //api/goods/productList/18
    @DeleteMapping(path = "{productId}")
    public void deleteProductById(@PathVariable Long productId) {
        // productService.deleteProductById(productId);
        // return PlainResult.success(null);
        productService.deleteById(productId);
    }

    @PutMapping(path="{productId}")
    @Transactional
    public void updateProductById(@PathVariable Long productId,
                                  @RequestParam String ordername,
                                  @RequestParam String price) {
        productService.updateProductById(productId, ordername, price);
    }
}
