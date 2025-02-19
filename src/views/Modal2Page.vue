<script setup>
import Modal2Component from '@/components/Modal2Component.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<!-- Teleport: 컴포넌트 템플릿의 일부를 해당 컴포넌트의 DOM 계층의 외부의 DOM 노드로 이동 할 수 있게 해주는 빌트인 컴포넌트 -->

<template>
  <div>
    <div class="container">
      <h3 class="title">Transition ❌ 모달</h3>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>
    <Modal2Component :show="showModal" @close="showModal = false">
      <template #header><h3>모달의 제목입니다.</h3></template>
      <template #body
        ><p>모달의 내용은 slot과 template을 활용해서 부모에서 전달해줄 수 있습니다.</p></template
      >
    </Modal2Component>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#show-modal {
  color: #fff;
  background: #222222;
  border-radius: 8px;
  padding: 10px 25px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
}
</style>
