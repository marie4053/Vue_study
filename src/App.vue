<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/modal1">Modal1</RouterLink>
      <RouterLink to="/modal2">Modal2</RouterLink>
      <RouterLink to="/vuetify">Vuetify</RouterLink>
      <RouterLink to="/barchart">BarChart</RouterLink>
      <RouterLink to="/linechart">LineChart</RouterLink>
      <RouterLink to="/doughnutchart">DoughnutChart</RouterLink>
    </nav>
    <RouterView class="dynamic-view" />
  </div>
</template>

<style>
nav {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
}
a {
  text-decoration: none;
  color: #333333;
  font-weight: 600;
}
a:hover {
  color: #42b983;
}

.dynamic-view {
  height: 500px;
  width: 800px;
  margin: auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
}

.app-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
