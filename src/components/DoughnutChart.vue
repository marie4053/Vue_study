<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { ref } from 'vue'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = ref({
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#E7E1C4', '#F7B78C', '#EF7663', '#BCC8B4'],
      data: [40, 20, 80, 10],
    },
  ],
})

// 차트 옵션
const chartOptions = ref({
  // 부모 요소 크기에 맞춰 차트 크기 자동 조정
  responsive: true,
  // true일 경우, 가로 세로 비율을 유지함
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
    // https://www.chartjs.org/docs/latest/configuration/title.html
    title: {
      display: true,
      text: 'Doughnut Chart',
      font: { size: '20px' },
      padding: { bottom: 20 },
    },
  },
})
</script>

<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
