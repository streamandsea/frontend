package com.wind.purchasebackend.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.util.Date;

/**
 * 
 * @TableName orderinfo
 */
@TableName(value ="orderinfo")
public class Orderinfo {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 
     */
    private String code;

    /**
     * 
     */
    private String ordername;

    /**
     * 公司
     */
    private String company;

    /**
     * 
     */
    private String phone;

    /**
     * 
     */
    private Date yudingtime;

    /**
     * 
     */
    private String price;

    /**
     * 1未汇总 2 已汇总
     */
    private Integer huizongstatus;

    /**
     * 
     */
    public Integer getId() {
        return id;
    }

    /**
     * 
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 
     */
    public String getCode() {
        return code;
    }

    /**
     * 
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * 
     */
    public String getOrdername() {
        return ordername;
    }

    /**
     * 
     */
    public void setOrdername(String ordername) {
        this.ordername = ordername;
    }

    /**
     * 公司
     */
    public String getCompany() {
        return company;
    }

    /**
     * 公司
     */
    public void setCompany(String company) {
        this.company = company;
    }

    /**
     * 
     */
    public String getPhone() {
        return phone;
    }

    /**
     * 
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * 
     */
    public Date getYudingtime() {
        return yudingtime;
    }

    /**
     * 
     */
    public void setYudingtime(Date yudingtime) {
        this.yudingtime = yudingtime;
    }

    /**
     * 
     */
    public String getPrice() {
        return price;
    }

    /**
     * 
     */
    public void setPrice(String price) {
        this.price = price;
    }

    /**
     * 1未汇总 2 已汇总
     */
    public Integer getHuizongstatus() {
        return huizongstatus;
    }

    /**
     * 1未汇总 2 已汇总
     */
    public void setHuizongstatus(Integer huizongstatus) {
        this.huizongstatus = huizongstatus;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Orderinfo other = (Orderinfo) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getCode() == null ? other.getCode() == null : this.getCode().equals(other.getCode()))
            && (this.getOrdername() == null ? other.getOrdername() == null : this.getOrdername().equals(other.getOrdername()))
            && (this.getCompany() == null ? other.getCompany() == null : this.getCompany().equals(other.getCompany()))
            && (this.getPhone() == null ? other.getPhone() == null : this.getPhone().equals(other.getPhone()))
            && (this.getYudingtime() == null ? other.getYudingtime() == null : this.getYudingtime().equals(other.getYudingtime()))
            && (this.getPrice() == null ? other.getPrice() == null : this.getPrice().equals(other.getPrice()))
            && (this.getHuizongstatus() == null ? other.getHuizongstatus() == null : this.getHuizongstatus().equals(other.getHuizongstatus()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getCode() == null) ? 0 : getCode().hashCode());
        result = prime * result + ((getOrdername() == null) ? 0 : getOrdername().hashCode());
        result = prime * result + ((getCompany() == null) ? 0 : getCompany().hashCode());
        result = prime * result + ((getPhone() == null) ? 0 : getPhone().hashCode());
        result = prime * result + ((getYudingtime() == null) ? 0 : getYudingtime().hashCode());
        result = prime * result + ((getPrice() == null) ? 0 : getPrice().hashCode());
        result = prime * result + ((getHuizongstatus() == null) ? 0 : getHuizongstatus().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", code=").append(code);
        sb.append(", ordername=").append(ordername);
        sb.append(", company=").append(company);
        sb.append(", phone=").append(phone);
        sb.append(", yudingtime=").append(yudingtime);
        sb.append(", price=").append(price);
        sb.append(", huizongstatus=").append(huizongstatus);
        sb.append("]");
        return sb.toString();
    }
}