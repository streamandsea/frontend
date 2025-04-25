<template>
    <div>
        <!-- 产品搜索 -->
        <!-- 
            el-form 表单
                :inline="true" 表单行内
                :model="formInline" 表单数据
            ell-form-item 表单子项 每一项内容
                label 标签文本 string
            el-input 输入框
            el-date-picker 日期组件
         -->
        
        <Breadcrumb></Breadcrumb>
        <div class="header">
            <div class="search">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="产品名称">
                        <el-input v-model="formInline.name" size="small" placeholder="产品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="添加时间">
                        <el-date-picker v-model="formInline.date" size="small" type="date" placeholder="选择日期"> </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="group">
                <el-button type="warning" icon="el-icon-plus" size="mini" @click="addGoods">添加商品</el-button>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="batchDelete">批量删除</el-button>
            </div>
        </div>

        <!-- 产品列表 -->
        <div class="content">
            <el-table :data="tableData" style="width: 100%" stripe border header-cell-class-name="table-center"
                header-row-class-name="activate-header">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="date" label="日期" :filters="[]" :filter-placement="null" width="120"> </el-table-column>
                <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
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
import Pagination from "@/components/pagination/Pagination.vue";

export  default {
    components:{
        Pagination
    },
    data() {
        return {
            formInline:{
                name: '',
                date: ''
            },
            tableData: [],
            
            total:10,
            pageSize:1,
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!',this.formInline);
        },
        addGoods() {
            console.log('add goods');
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        CurrentChange(val) {
            console.log('---val---页码:', val);
            this.productList(val);
        },
        // 获取产品列表数据
        async productList(page) {
            let res = await this.$api.productList({page});
            console.log('产品列表数据:', res.data);
            this.tableData = res.data.data;
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
        }
    },
    created() {
        this.productList(1);
    }
}

</script>

<style lang="less" scoped>

.header {
    // 背景色为灰色
    background: #f5f5f5;
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