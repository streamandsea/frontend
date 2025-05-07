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
                <el-button type="danger" size="mini"  >导出</el-button>
            </div>
        </div>

        <!-- 表格区域 -->
        <div class="content">
            <el-table :data="tableData" style="width: 100%" stripe border header-cell-class-name="table-center"
                header-row-class-name="activate-header">
                <el-table-column type="selection" width="55" ></el-table-column>
                <el-table-column prop="orderNum" label="汇总单编号"></el-table-column>
                <el-table-column prop="operator" label="汇总人"></el-table-column>
                <el-table-column prop="phone" label="联系电话"></el-table-column>
                <el-table-column prop="time" label="汇总时间">
                    <template slot-scope="scope">
                    <span>{{ dayjs(scope.row.yudingTime).format('YYYY-MM-DD HH:mm:ss') }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="totalPrice" label="汇总单总总价格"></el-table-column>
                <el-table-column label="操作">
                    <el-button size="mini" type="danger" 
                            @click="handleEdit(scope.$index, scope.row)">撤销汇总
                    </el-button>
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
import dayjs from 'dayjs'
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
        dayjs,
        CurrentChange(page) {
            console.log('page', page);
        },
        // 撤销汇总
        handleEdit() {

        },
        // 获取汇总清单列表
        async collect(page) {
            let res = await this.$api.collect({ page });
            console.log('汇总清单列表', res.data);
            if(res.data.status == 200) {
                this.tableData = res.data.data;
                this.total = res.data.total;
                this.pageSize = res.data.per_page;
            } else {
                this.tableData = [];
                this.total = 0;
                this.pageSize = 1;
            }
        }
    },
    created() {
        this.collect(1);
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