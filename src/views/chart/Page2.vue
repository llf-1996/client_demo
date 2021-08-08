<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="yAxis"
      label="data">
    </el-table-column>
    <el-table-column
      prop="update_time"
      label="保存时间">
    </el-table-column>
  </el-table>
  
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    :default-page-size="defaultPageSize"
    @current-change="getData">
  </el-pagination>
</template>

<script>
import { getSavedData } from '@/api/chart.js'
export default {
    data() {
      return {
        tableData: [],
        defaultPageSize: 100,
        total: 0
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData(page=1) {
        // 获取数据
        getSavedData({page})
          .then(res => {
            console.log(res.data)
            this.tableData = res.data.results;
            this.total = res.data.count
          })
      }
    }
  }
</script>
