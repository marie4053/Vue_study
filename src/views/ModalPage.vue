<script setup>
import ModalComponent from '@/components/ModalComponent.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<!-- Teleport: 컴포넌트 템플릿의 일부를 해당 컴포넌트의 DOM 계층의 외부의 DOM 노드로 이동 할 수 있게 해주는 빌트인 컴포넌트 -->

<template>
  <div class="dynamic-view">
    <div class="button-container">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>

    <Teleport to="body">
      <ModalComponent :show="showModal" @close="showModal = false">
        <template #header><h3>Custom Header</h3></template>
      </ModalComponent>
    </Teleport>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
}
</style>
