<script setup>
import { ref, computed } from 'vue'
import HomePage from './views/HomePage.vue'
import ModalPage from './views/ModalPage.vue'
import Modal2Page from './views/Modal2Page.vue'
import VuefityTest from './views/VuefityTest.vue'

const routes = {
  '/': HomePage,
  '/modal': ModalPage,
  '/modal2': Modal2Page,
  '/vuetify': VuefityTest,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <div class="app-container">
    <nav>
      <a href="#/">Home</a>
      <a href="#/modal">Modal1</a>
      <a href="#/modal2">Modal2</a>
      <a href="#/vuetify">Vuetify</a>
    </nav>
    <!-- <component> : 동적 컴포넌트 또는 엘리먼트를 렌더링하기 위한 "메타 컴포넌트"입니다. -->
    <component :is="currentView" class="dynamic-view" />
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
  height: 400px;
  width: 600px;
  margin: auto;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.app-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
