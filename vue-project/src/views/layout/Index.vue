<template>
    <div class="layout">
        <!-- 左侧导航 -->
         <div class="menu">
             <Menu></Menu>
         </div>
         <!-- 右侧内容 -->
          <div class="content">
             <Content></Content>
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
    }
}

</script>


<style lang="less" scoped>

.layout {
    // display: flex;
    .menu {
        width: 200px;
        background: #888;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }
    
    .content {
        // flex: 1;
        padding-left: 200px;
    }
}

</style>