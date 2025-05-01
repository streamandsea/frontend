package com.wind.purchasebackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.wind.purchasebackend.dal")
public class PurchaseBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PurchaseBackendApplication.class, args);
    }

}
