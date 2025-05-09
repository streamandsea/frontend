<template>
    <div>
        <!-- 顶部 -->
        <!-- <Header></Header> -->
        <div class="header">
            <div class="icon">
                <i v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></i>
                <i v-else class="iconfont icon-left-indent" @click="changeMenu"></i>
            </div>
            <div class="header-right">
                <span>{{ nowTime }}</span> |

                <el-dropdown @command="changeLang">
                    <span class="el-dropdown-link" style="color: #fff">
                        语言环境<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="en">English</el-dropdown-item>
                    </el-dropdown-menu> | 

                    <span> 欢迎 {{ userinfo.username }}</span> | 
                    <span class="el-icon-switch-button icon" @click="loginOut"></span>
                </el-dropdown>

            </div>
        </div>

        <!-- 内容 -->
        <!-- 路由出口（二级路由） -->
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex';

export default {

    props: ['isCollapse'],
    data() {
        return {
            nowTime: ''
        }
    },
    computed: {
        ...mapState('login', ['userinfo']),
    },
    methods: {
        changeMenu() {
            this.$emit('changeShow')
        },
        // 退出登录--- 1.清空store仓库 2.跳转登录界面
        loginOut() {
            console.log('退出登录')

            localStorage.removeItem('info')

            this.$router.push('/login')
        },
        changeLang() {
            console.log('切换语言')
        }
    },
    created() {
        //获取当前的时间-----------------
        // let time = new Date()  //1.自己封装获取日期格式 2.moment.js  3. dayjs 
        this.nowTime = dayjs(new Date()).format('YYYY年MM月DD日 HH:mm:ss')
    }
}
</script>

<style lang="less" scoped>

.header {
    background: #1e78bf;
    height: 50px;
    line-height: 50px;
    color: #fff;
    width: 100%;
    display: flex;
    
    .icon {
        i {
            font-size: 24px;
        }
    }

    .header-right {
        font-size: 12px;
        flex: 1;
        text-align: right;
        padding-right: 20px;
    }
}

.wrapper {
    padding: 10px;
}

</style>