<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { ref } from 'vue'

// Chart.js에 필요한 컴포넌트 등록
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// ❌ vue2 version
// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: [ 'January', 'February', 'March' ],
//         datasets: [ { data: [40, 20, 12] } ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }

// ✅ vue3 version
// 차트 데이터
const chartData = ref({
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      // 범례
      label: 'Dataset 1',
      // 그래프 색상
      backgroundColor: '#349B90',
      // 데이터
      data: [40, 20, -12],
    },
    {
      // 범례
      label: 'Dataset 2',
      // 그래프 색상
      backgroundColor: '#B9D6BC',
      // 데이터
      data: [20, 50, 20],
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
      text: 'Bar Chart',
      font: { size: '20px' },
      padding: { bottom: 20 },
    },
  },
})
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
