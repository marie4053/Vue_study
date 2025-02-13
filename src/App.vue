<script setup>
import { ref, computed } from 'vue'
import HomePage from './views/HomePage.vue'
import ModalPage from './views/ModalPage.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': HomePage,
  '/modal': ModalPage,
  '/non-existent-path': NotFound,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="">
    <nav>
      <a href="#/">Home</a>
      <a href="#/modal">Modal</a>
      <a href="#/non-existent-path">잘못된 링크</a>
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
  text-shadow: 2px 2px 10px rgba(66, 185, 131, 0.4);
}

.dynamic-view {
  height: 400px;
  width: 600px;
  margin: auto;
  padding: 40px;
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
</style>
