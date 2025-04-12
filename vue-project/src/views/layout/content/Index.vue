<template>
    <div>
        <!-- 顶部 -->
        <Header></Header>
        <!-- 内容 -->
        <!-- 路由出口（二级路由） -->
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  }

}
</script>

<style>

</style>