<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue';

let chart = ref()

const option = {
  title: {
    text: '运动',
    textStyle: {
        color: 'white',
        fontFamily: 'bear'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
//   legend: {
//     data: ['Calories', 'Weight', 'Exercise']
//   },
  color: ['#f00', '#000', '#0f0'],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['11.01', '11.02', '11.03', '11.04', '11.05', '11.06', '11.07', '11.08', '11.09', '11.10', '11.11', '11.12'],
    axisLabel: {
        show: true,
        textStyle: {
            color: 'white',
            fontFamily: 'bear'
        }
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        show: true,
        textStyle: {
            color: 'white',
            fontFamily: 'bear'
        }
    },
  },
  series: [
    {
      name: 'Calories',
      type: 'line',
      data: [408, 720, 269, 695, 665, 819, 748, 468, 656, 348, 648, 446]
    },
    {
      name: 'Weight',
      type: 'line',
      data: [76.0, 76.0, 76.0, 76.0, 75.1, 75.5, 74.8, 75.4, 74.0, 74.1, 75.2, 75.2]
    },
    {
      name: 'Exercise',
      type: 'line',
      data: [34, 81, 8, 71, 66, 94, 102, 36, 58, 10, 62, 37]
    }
  ]
};
onMounted(() => {
  let myChart = echarts.init(chart.value)
  myChart.setOption(option)
})
</script>

<template>
    <div ref="chart" style="width: 280px; height: 280px"></div>
</template>