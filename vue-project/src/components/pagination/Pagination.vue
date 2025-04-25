<template>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
</template>

<script>
export default {
    props: {
        total:{
            type: Number,
            default: 100
        },
        pageSize:{
            type: Number,
            default: 10
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.$emit('CurrentChange', val);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$emit('CurrentChange', val);
      }
    },
    data() {
      return {
        currentPage: 1,
      };
    }
}

</script>

<style>
</style>