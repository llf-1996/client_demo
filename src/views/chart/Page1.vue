<template>
  
   <el-row :gutter="10" justify="end">
    <el-col :xs="2" :md="2" :lg="2">
      <div>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div id="chart-container"></div>
    </el-col>
  </el-row>
</template>

<script>
import { refreshData, saveData } from '@/api/chart.js'
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  data() {
    return {
      timer: null,
      chart: null,
      id: null
    }
  },
  mounted() {
    // dom已加载
    console.log('mounted')
    this.moreChart();
    // 启动定时器
    console.log('启动定时器');
    this.timer = setInterval(this.moreChart, 10000);
  },
  beforeRouteLeave(to, from, next){
    console.log('beforeRouteLeave');
    if (this.timer !== null) {
      // 清除定时器
      console.log('清除定时器');
      clearInterval(this.timer);
      this.timer = null;
    }
    next();
  },
    
  methods: {
    moreChart() {
      refreshData()
        .then(res => {
          let newData = res.data.data;
          this.id = res.data.id;
          if (this.chart === null) {
            // 初始化 Highcharts 图表
            console.log('初始化');
            this.chart = new Highcharts.Chart("chart-container", {
              title: {
                text: "2010 ~ 2016 年太阳能行业就业人员发展情况"
              },
              subtitle: {
                text: "数据来源：thesolarfoundation.com"
              },
              yAxis: {
                title: {
                  text: "就业人数"
                }
              },
              legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle"
              },
              plotOptions: {
                series: {
                  label: {
                    connectorAllowed: false
                  },
                  pointStart: 2010
                }
              },
              series: [
                {
                  name: "实施人员",
                  data: newData
                }
              ],
              responsive: {
                rules: [
                  {
                    condition: {
                      maxWidth: 500
                    },
                    chartOptions: {
                      legend: {
                        layout: "horizontal",
                        align: "center",
                        verticalAlign: "bottom"
                      }
                    }
                  }
                ]
              }
            });
          } else {
            console.log('更新');
            this.chart.series[0].setData(newData)
          }
        })
        .catch();
    },
    save() {
      console.log(this.id)
      saveData({id: this.id})
        .then(res => {
          console.log(res)
        })
        .catch();
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit css to this component only -->
<style lang="scss" scoped>
</style>
