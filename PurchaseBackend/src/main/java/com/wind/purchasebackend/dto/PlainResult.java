package com.wind.purchasebackend.dto;


import lombok.Data;

@Data
public class PlainResult<T> {
    private T data;
    private int code;
    private String msg;
    private boolean success;

    public PlainResult() {}

    public static <T> PlainResult<T> success(T data) {
        PlainResult<T> plainResult = new PlainResult<>();

        plainResult.setData(data);
        plainResult.setCode(200);
        plainResult.setMsg("success");
        plainResult.setSuccess(true);
        return plainResult;
    }

    public static <T> PlainResult<T> fail(int code, String msg) {
        PlainResult<T> plainResult = new PlainResult<>();
        plainResult.setSuccess(false);
        plainResult.setCode(code);
        plainResult.setMsg(msg);
        return plainResult;
    }

}
