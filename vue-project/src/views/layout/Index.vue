<template>
    <div class="layout">
        <!-- 左侧导航 -->
         <div class="menu">
             <Menu :isCollapse="isCollapse"></Menu>
         </div>
         <!-- 右侧内容 -->
         <div class="content" :class="{active: isCollapse}">
             <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
         </div>
    </div>
</template>

<script>
// 引入子组件
import Menu from './menu/Index.vue'
import Content from './content/Index.vue'

export default {

    // 注册子组件
    components: {
        Menu,
        Content
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        changeShow() {
            this.isCollapse = !this.isCollapse;
        }
    }
}

</script>


<style lang="less" scoped>

.layout {
    
    .menu {
        // width: 200px;
        background: #112f50;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        // padding-left: 10px;
        /deep/ .el-menu {
            border-right: none;
        }
    }
    
    .content {
        // flex: 1;
        padding-top: 0px;
        padding-left: 200px;
        transition: .5s;
        
    }
    .active {
        padding-left: 64px;
    }
}

</style>