<script setup>
import DoughnutChart from '@/components/DoughnutChart.vue'

const data = {
  nutrition: ['열량', '나트륨', '탄수화물', '단백질', '지방'],
  value: [349.2, 372.1, 23.2, 19.3, 19.9],
}

const colors = {
  main: ['#C97B7B', '#5A8F92', '#D08C7E ', '#3A6073', '#2F6F5E'],
  sub: ['#F3DDDD', '#D3E6E8', '#F5E3DE', '#DCEFFF', '#D6EADF'],
}
</script>

<template>
  <div>
    <v-container>
      <v-row justify="center">단호박 피자</v-row>
      <v-row justify="space-between" no-gutters>
        <v-col v-for="n in 5" :key="n" cols="2">
          <DoughnutChart
            :nutrition-info="data.nutrition[n - 1]"
            :input-data="data.value[n - 1]"
            :main-color="colors.main[n - 1]"
            :sub-color="colors.sub[n - 1]"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
