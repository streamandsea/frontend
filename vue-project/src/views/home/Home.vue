<template>
    <div class="home">
        <h2>首页</h2>
    </div>
</template>

<script>
export  default {
    data() {
        return {
            totalData: {}, // 首页统计数据
            orderData: {}, // 今日订单统计数据
        }
    },
    created() {
        this.totalInfo();
        this.orderInfo();
    },
    methods: {
        // 获取数据统计
        async totalInfo() {
            const res = await this.$api.totalInfo();
            console.log('首页统计信息---', res);
            this.totalData = res.data.list;
        },
        // 获取今日订单统计信息
        async orderInfo() {
            const res = await this.$api.orderInfo();
            console.log('今日订单统计信息---', res);
            this.orderData = res.data.list;
        }
    },
    // 过滤器：处理数据格式
    filters: {
        num(value) { // 23466 => 23,466
            if (!value) {
                return;
            }   
            return value.toLocaleString();
        }
    }
}
</script>

<style>
.home {
    background-color: yellow;
    padding: 10px;
}
</style>