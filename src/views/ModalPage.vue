<script setup>
import ModalComponent from '@/components/ModalComponent.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<!-- Teleport: 컴포넌트 템플릿의 일부를 해당 컴포넌트의 DOM 계층의 외부의 DOM 노드로 이동 할 수 있게 해주는 빌트인 컴포넌트 -->

<template>
  <div>
    <div>
      <h3 class="title">Transition ✅ 모달</h3>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>

    <Teleport to="body">
      <ModalComponent :show="showModal" @close="showModal = false">
        <template #header><h3>모달의 제목입니다.</h3></template>
        <template #body
          ><p>모달의 내용은 slot과 template을 활용해서 부모에서 전달해줄 수 있습니다.</p></template
        >
      </ModalComponent>
    </Teleport>
  </div>
</template>

<style scoped>
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
