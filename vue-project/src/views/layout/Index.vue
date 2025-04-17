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
    data() {
        return {
            isCollapse: false
        }
    },
    // 注册子组件
    components: {
        Menu,
        Content
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
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        background: #112f50;
        
        /deep/ .el-menu {
            border-right: none;
        }
    }
    
    .content {
        padding-left: 200px;
        transition: all .5s;
    }
    .active {
        padding-left: 64px;
    }
}

</style>