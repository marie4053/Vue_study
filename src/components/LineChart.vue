<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { ref } from 'vue'

// s에 필요한 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56],
      borderColor: '#F5704A',
      tension: 0.3,
    },
    {
      label: 'Dataset 2',
      data: [40, 69, 60, 71, 90],
      borderColor: '#828D00',
      tension: 0.3,
    },
  ],
})

// 차트 옵션
const chartOptions = ref({
  responsive: true,
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: { size: '12px' },
      },
    },
    title: {
      display: true,
      text: 'Line Chart',
      font: { size: '20px' },
      padding: { bottom: 20 },
    },
  },
})
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>
