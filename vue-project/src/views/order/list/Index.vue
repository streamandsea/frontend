<template>
    <div>
        <!-- 顶部区域 -->
        <div class="header">
            <div class="search">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="预定编号">
                        <el-input v-model="formInline.name" size="small" placeholder="产品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="预定时间">
                        <el-date-picker v-model="formInline.date" size="small" type="date" placeholder="选择日期"> </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="group">
                <el-button type="warning" size="mini" >订单汇总</el-button>
                <el-button type="danger" size="mini"  >导出</el-button>
            </div>
        </div>

        <!-- 产品列表 -->
        <div class="content">
            <el-table :data="tableData" style="width: 100%" stripe border header-cell-class-name="table-center"
                header-row-class-name="activate-header">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="code" label="订单编号">
                    <template slot-scope="scope">
                    <span @click="OrderDecs(scope.row)" style="color:blue;cursor: pointer;">{{ scope.row.code }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="ordername" label="下单人"></el-table-column>
                <el-table-column prop="company" label="所属单位"></el-table-column>
                <el-table-column prop="phone" label="联系电话"></el-table-column>
                <el-table-column prop="price" label="订单总价格"></el-table-column>
                <el-table-column prop="huizongStatus" label="汇总状态">
                    <template slot-scope="scope">
                    <span v-if="scope.row.huizongStatus == 1">未汇总</span>
                    <span v-else>已汇总</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 分页组件 -->
        <div class="pagination">
            <Pagination :total="total" :pageSize="pageSize" @CurrentChange="CurrentChange"></Pagination>
        </div>
    </div>
</template>

<script>
import { orderList } from '@/api/order'
import Pagination from "@/components/pagination/Pagination.vue";

export  default {
    components: {
        Pagination,
    },
    data() {
        return {
            formInline: {},
            tableData: [],
            total: 10,
            pageSize: 1,
        }
    },
    methods: {
        // async orderList(page) {
        //     let res = await this.$api.orderList({page})
        //     console.log('订单列表---', res.data)
        // }
        async orderList(page) {
            // let res = await this.$api.orderList()
            // console.log('订单列表---', res.data)
            let res = await orderList({ page })
            console.log('订单列表-----', res.data);
            if (res.data.status === 200) {
                this.tableData = res.data.data;
                //页码
                this.pageSize = res.data.pageSize;
                this.total = res.data.total;
            } else {
                console.log('请求失败');
                this.tableData = []
                this.pageSize = 0;
                this.total = 1;
            }
        },
        CurrentChange(page) {
            console.log(page);
            this.orderList(page);
        }
    },
    created() {
        this.orderList(1)
        // this.orderList()
        // this.getorderList()
    }
}
</script>

<style lang="less" scoped>

.header {
    // 背景色为灰色
    background: #fff;
    padding: 10px;
    margin-bottom: 20px;
    .search {
      padding-bottom: 20px;

      .el-form-item {
        margin-bottom: 0;
      }
    }

    .group {
      background: #fff;
      padding: 10px;
      border: 1px solid #eee;
    }
}

.content {
    background: pink;
    margin-top: 20px;

    /deep/ .cell {
      text-align: center;
    }

    /deep/ .activate-header {
        color: #333;
    }

}  

</style>