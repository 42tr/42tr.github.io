<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue';
const data = [
    {date: '11.01', calories: 408, weight: 76.0, exercise: 34},
    {date: '11.02', calories: 720, weight: 76.0, exercise: 81},
    {date: '11.03', calories: 269, weight: 76.0, exercise: 8},
    {date: '11.04', calories: 695, weight: 76.0, exercise: 71},
    {date: '11.05', calories: 665, weight: 75.1, exercise: 66},
    {date: '11.06', calories: 819, weight: 75.5, exercise: 94},
    {date: '11.07', calories: 748, weight: 74.8, exercise: 102},
    {date: '11.08', calories: 468, weight: 75.4, exercise: 36},
    {date: '11.09', calories: 656, weight: 74.0, exercise: 58},
    {date: '11.10', calories: 348, weight: 74.1, exercise: 10},
    {date: '11.11', calories: 648, weight: 75.2, exercise: 62},
    {date: '11.12', calories: 446, weight: 75.2, exercise: 37},
    {date: '11.13', calories: 614, weight: 75.5, exercise: 59},
    {date: '11.14', calories: 378, weight: 75.3, exercise: 32},
    {date: '11.15', calories: 628, weight: 75.0, exercise: 82},
    {date: '11.16', calories: 292, weight: 75.0, exercise: 17},
    {date: '11.17', calories: 546, weight: 75.0, exercise: 82},
    {date: '11.18', calories: 404, weight: 75.1, exercise: 31},
    {date: '11.19', calories: 377, weight: 75.6, exercise: 28},
    {date: '11.20', calories: 391, weight: 74.9, exercise: 21},
    {date: '11.21', calories: 571, weight: 74.7, exercise: 51},
    {date: '11.22', calories: 435, weight: 75.5, exercise: 33},
    {date: '11.23', calories: 99, weight: 75.5, exercise: 2},
    {date: '11.24', calories: 334, weight: 75.5, exercise: 14},
    {date: '11.25', calories: 430, weight: 75.5, exercise: 30},
    {date: '11.26', calories: 455, weight: 75.5, exercise: 43},
    {date: '11.27', calories: 737, weight: 75.5, exercise: 95},
    {date: '11.28', calories: 427, weight: 75.8, exercise: 28},
    {date: '11.29', calories: 452, weight: 75.5, exercise: 32},
    {date: '11.30', calories: 263, weight: 75.4, exercise: 16},
    {date: '12.01', calories: 355, weight: 75.6, exercise: 23},
    {date: '12.02', calories: 824, weight: 75.8, exercise: 67},
    {date: '12.03', calories: 1048, weight: 75.2, exercise: 82},
    {date: '12.04', calories: 982, weight: 74.6, exercise: 73},
    {date: '12.05', calories: 765, weight: 74.7, exercise: 69},
    {date: '12.06', calories: 996, weight: 74.6, exercise: 94},
    {date: '12.07', calories: 349, weight: 74.5, exercise: 11},
    {date: '12.08', calories: 357, weight: 75.6, exercise: 11},
    {date: '12.09', calories: 800, weight: 76.5, exercise: 80},
    {date: '12.10', calories: 992, weight: 74.9, exercise: 96},
    {date: '12.11', calories: 921, weight: 74.6, exercise: 84},
    {date: '12.12', calories: 839, weight: 74.4, exercise: 78},
    {date: '12.13', calories: 556, weight: 74.4, exercise: 80},
    {date: '12.14', calories: 193, weight: 75.3, exercise: 5},
    {date: '12.15', calories: 400, weight: 75.9, exercise: 22},
    {date: '12.16', calories: 681, weight: 75.4, exercise: 62},
    {date: '12.17', calories: 864, weight: 75.1, exercise: 86},
    {date: '12.18', calories: 988, weight: 75.3, exercise: 105},
    {date: '12.19', calories: 674, weight: 75.1, exercise: 75},
    {date: '12.20', calories: 717, weight: 75.5, exercise: 73},
    {date: '12.21', calories: 400, weight: 75.0, exercise: 20},
    {date: '12.22', calories: 459, weight: 74.5, exercise: 13},
    {date: '12.23', calories: 366, weight: 75.4, exercise: 32},
    {date: '12.24', calories: 701, weight: 75.1, exercise: 78},
    {date: '12.25', calories: 367, weight: 75.3, exercise: 33},
    {date: '12.26', calories: 780, weight: 75.1, exercise: 73},
    {date: '12.27', calories: 302, weight: 75.1, exercise: 9},
    {date: '12.28', calories: 500, weight: 75.1, exercise: 20},
    {date: '12.29', calories: 366, weight: 75.2, exercise: 13},
    {date: '12.30', calories: 474, weight: 75.1, exercise: 59},
    {date: '12.31', calories: 332, weight: 75.3, exercise: 17},
    {date: '01.01', calories: 297, weight: 75.3, exercise: 7},
    {date: '01.02', calories: 314, weight: 75.3, exercise: 5},
]
const date = data.map(item => item.date)
const calories = data.map(item => item.calories)
const weight = data.map(item => item.weight)
const exercise = data.map(item => item.exercise)
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
    data: date,
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
      data: calories
    },
    {
      name: 'Weight',
      type: 'line',
      data: weight
    },
    {
      name: 'Exercise',
      type: 'line',
      data: exercise
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