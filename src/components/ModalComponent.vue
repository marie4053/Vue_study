<script setup>
// 부모 (ModalPage)로 부터 전달 받을 속성 정의
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  show: Boolean,
})
</script>

<!-- Vue는 상태 변화에 대응하기 위해 트랜지션 및 애니메이션 작업에 도움이 되는 Transition이라는 빌트인 컴포넌트를 제공해준다. -->
<!-- <slot> 엘리먼트는 부모가 제공한 슬롯 컨텐츠가 렌더링되어야 하는 위치를 나타내는 슬롯 아울렛(outlet)입니다. -->
<!-- $emit이란?
- 자식은 카멜케이스로 발신, 부모는 케밥케이스로 수신
- 이벤트 선언에 대해서 알아보기-->

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"
            >default footer
            <!-- $emit : 자식에서 부모로 이벤트 'close' 내보내기 -->
            <button class="modal-default-button" @click="$emit('close')">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
</style>
