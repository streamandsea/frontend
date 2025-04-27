<template>
    <div class="home">
        <!-- 1. 顶部区域布局 -->
        <div class="header">
            <div class="item">
                总销售额
                <div class='num'>726,520</div>
                <div class="bottom">今日销售额：3，442</div>
            </div>
            <div class="item">
                总访问量
                <div class='num'>326,175</div>
                <div class="bottom">今日访问量：3，442</div>
            </div>
            <div class="item">
                总收藏量
                <div class='num'>126,878</div>
                <div class="bottom">今日销售额：3，442</div>
            </div>
            <div class="item">
                总支付量
                <div class='num'>6,402</div>
                <div class="bottom">今日支付量：3，442</div>
            </div>
        </div>

        <!-- 2. 访问数据统计 -->
        <div class="content">
            <div class="time-info" id='box13'>
                <div class="title">月销售额</div>
                <div id="charts" style="width: 100%; height:300px"></div>
            </div>
            <div class="area" id="box1">比例分配</div>
        </div>

        <!-- 3.最新内容 -->
        <div class="home-footer">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="title">今日订单</span>
                </div>
                <div class="text item">
                    <el-row>
                        <el-col :span="8">
                            <div class="title">今日订单数</div>
                            <div>{{ orderData.curOrderCount }}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="title">汇总确认订单</div>
                            <div>{{ orderData.curCollect }}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="title">今日金额</div>
                            <div>{{ orderData.curMoney }}</div>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="title">本月订单</span>
                </div>
                <div class="text item">
                    <el-row>
                        <el-col :span="8">
                            <div class="title">本月订单数</div>
                            <div>{{ orderData.orderCount }}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="title">汇总确认订单</div>
                            <div>{{ orderData.collect }}</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="title">累计金额</div>
                            <div>{{ orderData.money }}</div>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>快速入口</span>
                </div>
                <div class="text item">
                    <el-button type="primary">产品管理</el-button>
                    <el-button>消息管理</el-button>
                    <el-button>内容管理</el-button>
                </div>
            </el-card>
        </div>


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
        // 获取数据统计-------------------------------------
        async totalInfo() {
            const res = await this.$api.totalInfo();
            console.log('首页统计信息---', res);
            this.totalData = res.data.data.list;
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

<style lang="less" scoped>
.home {
    margin: 10px;
}

.header {
    display: flex;
    padding-right: 30px;
    .item {
        flex: 1;
        height: 100px;
        padding: 10px;
        background: #fff;
        border-radius: 10px;
        margin-left: 20px;
        margin-right: 20px;
        font-weight: bold;
        color: #fff;
        position: relative;

        .num {
            font-size: 22px;
            margin: 10px;
            color: #fff;
        }

        .bottom {
            position: absolute;
            border-top: 1px solid rgb(246, 245, 245);
            padding: 10px 20px;
            bottom: 0;
            right: 0;
            left: 0;
            color: #fff;
            font-weight: normal;
        }
    }

    .item:nth-child(1) {
        background-image: linear-gradient(#df887d, #88554d);
    }

    .item:nth-child(2) {
        background-image: linear-gradient(#409eff, #2e556e);
    }

    .item:nth-child(3) {
        background-image: linear-gradient(#b54fa8, #713c7a);
    }

    .item:nth-child(4) {
        background-image: linear-gradient(#1cd2f1, #39717a);
    }
    
}


.content {
  margin: 20px;
  display: flex;
  height: 320px;

  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }

  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }
}

.home-footer {
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;

    .box-card {
        flex: 1;
        margin-right: 30px;
        span {
            font-size: 600;
        }
    }

    .item{
        text-align: center;
        font-size: 24px;
        color: #333;
        .el-col{
            border-right: 1px solid #eee;

        }
        .el-col:last-child{
            border-right: none;
        }
        .title{
            margin-bottom: 10px;
            font-size: 14px;
        }
    }
}
</style>