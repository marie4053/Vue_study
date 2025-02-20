<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref } from 'vue'
ChartJS.register(ArcElement, Tooltip, Legend)
const props = defineProps({
  nutritionInfo: String,
  inputData: Number,
  mainColor: String,
  subColor: String,
})

const rid = (nutrition) => {
  if (nutrition === '나트륨') {
    return 2000
  } else if (nutrition === '지방') {
    return 55
  } else if (nutrition === '탄수화물') {
    return 300
  } else if (nutrition === '열량') {
    return 2000
  } else if (nutrition === '단백질') {
    return 50
  }
}

// ✅ vue3 version
// 차트 데이터
const chartData = ref({
  labels: [props.nutritionInfo],
  datasets: [
    {
      // // 범례
      // label: 'Dataset 1',
      // 그래프 색상
      backgroundColor: [props.mainColor || `#349B90`, props.subColor || '#B9D6BC'],
      // 데이터
      data: [props.inputData, rid(props.nutritionInfo) - props.inputData],
    },
  ],
})

// 차트 옵션
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 10,
  },
  plugins: {
    // 범례 위치
    legend: {
      position: 'bottom',
      labels: {
        font: { size: '12px' },
      },
    },
    // 제목 설정
    title: {
      display: false,
      text: 'Doughnut Chart',
      font: { size: '20px' },
      padding: { bottom: 20 },
    },
    // annotation: {
    //   annotations: {
    //     dLabel: {
    //       type: 'doughnutLabel',
    //       content: '나트륨',
    //       font: { size: 60 },
    //       color: 'black',
    //     },
    //   },
    // },
  },
})
</script>

<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>
