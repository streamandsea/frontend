package com.wind.purchasebackend.dal;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wind.purchasebackend.domain.Orderinfo;
import org.apache.ibatis.annotations.Select;

public interface ProductMapper extends BaseMapper<Orderinfo> {

    // 根据手机号查询
    @Select("select * from orderinfo where phone = #{phone}")
    Orderinfo selectByPhone(String phone);
}
