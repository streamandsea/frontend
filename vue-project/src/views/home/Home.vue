<template>
    <div>
        <h2>首页</h2>
    </div>
</template>

<script>
export  default {
    data() {
        return {

        }
    },
    created() {
        this.totalInfo();
    },
    methods: {
        async totalInfo() {
            const res = await this.$api.totalInfo();
            console.log('首页统计信息---', res);
        }
    }
}
</script>

<style>
</style>