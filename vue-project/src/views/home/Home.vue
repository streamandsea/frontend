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
                <div id="charts" style="width: 100%; height:300px">123</div>
            </div>
            <div class="area" id="box1">
                <div class="title">产品销售比例</div>
                <div id="pie" style="width: 100%; height:300px"></div>
            </div>
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

import * as echarts from 'echarts';

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
        console.log('created()', document.getElementById('charts'));
    },
    // 最早获取dom元素的--挂在完毕
    mounted() {
        // console.log('moundted()', document.getElementById('charts'));
        this.line2()
        this.pie()
        this.format()
    },
    methods: {
        // 获取数据统计-------------------------------------
        async totalInfo() {
            const res = await this.$api.totalInfo();
            console.log('首页统计信息---', res);
            this.totalData = res.data;
        },
        // 获取今日订单统计信息
        async orderInfo() {
            const res = await this.$api.orderInfo();
            console.log('今日订单统计信息---', res);
            this.orderData = res.data.list;
        },
        // 获取图表动态数据
        async format() {
            let res = await this.$api.format()
            console.log('获取图表动态数据---', res.data)
            console.log(res.data.result.data.sale_money) // [{},{},{}]
            
            // 折线图 柱状图数据格式: [xx, xx, xx]
            // 获取x轴的数据名称
            let arr = res.data.result.data.sale_money;
            let arrx=[],yarr1=[],yarr2=[];
            arr.forEach(element => {
                arrx.push(element.name)
                yarr1.push(element.num)
                yarr2.push(element.total_amount);
            });
            console.log(arrx)
            console.log(yarr1)
            console.log(yarr2)
        },
        // 绘制图表--折线
        line() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('charts'));
            // 绘制图表
            myChart.setOption({
                // title: {
                //     text: 'ECharts 入门示例'
                // },
                tooltip: {},
                xAxis: { // x轴数据
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: { // y轴会自动创建数据

                },
                series: [ // 图标内容
                    {
                        name: '销量',
                        type: 'line',
                        data: [5, 20, 36, 10, 10, 20],
                        label: { // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                            show: true,
                        },
                        labelLine: {
                            lineStyle: {
                                color: '#ff5555'
                            }
                        },
                        itemStyle: { 
                            color: '#ff5555'
                        },
                        lineStyle: {
                            color: '#ff5555'
                        },
                        smooth: true,
                    }
                ]
            });
        },
        line2() {
            var myChart = echarts.init(document.getElementById('charts'));
            myChart.setOption({
                tooltip: {
                    // 提示框组件
                    trigger: 'axis',
                },
                legend: {
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: { // x轴数据
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [ 
                    {
                        name: '销售额',
                        type: 'line',
                        data: [15, 30, 66, 40, 20, 20],
                        smooth: true,
                    },
                    {
                        name: '销售量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 10],
                    }
                ]
            });
        },
        pie() {
            var myChart = echarts.init(document.getElementById('pie'));
            var option;

            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                    name: '产品销售比例',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '审计' },
                        { value: 735, name: '淘宝' },
                        { value: 580, name: '京东' },
                    ],
                    emphasis: { // 高亮配置
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
            };

            option && myChart.setOption(option);
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