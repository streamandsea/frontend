<template>
    <div>
        <!-- 顶部 -->
        <!-- <Header></Header> -->
        <div class="header">
            <!-- <h3>顶部区域</h3> -->
            <div class="open">
                <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></span>
                <span v-else class="iconfont icon-left-indent" @click="changeMenu"></span>
            </div>
        </div>

        <!-- 内容 -->
        <!-- 路由出口（二级路由） -->
        <router-view></router-view>
    </div>
</template>

<script>

export default {

    props: ['isCollapse'],
    methods: {
        changeMenu() {
            this.$emit('changeShow')
        }
    }
}
</script>

<style lang="less" scoped>

.header {
    height: 50px;
    background: #1e78bf;
    color: #fff;
    line-height: 50px;
    display: flex;

    .open {
        .iconfont {
            font-size: 22px;    
            cursor: pointer;
        }
        
    }
    
}

</style>