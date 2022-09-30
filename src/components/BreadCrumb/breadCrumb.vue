<template>
  <div class="bread-crumb-container">
    <a-breadcrumb>
      <a-breadcrumb-item>DashBoard</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router';
import { useRouteStore } from '@/store/modules/route.store';
const routeStore = useRouteStore()
// const $router = useRouter()
onMounted(() => {
  getMatchRouter()
})

/*
* @description 获取router的match
*/
const getMatchRouter = () => {
  console.log(routeStore.getRouteMatched);
}
</script>

<style lang="less" scoped>
.bread-crumb-container {
  padding: 12px 0;
}
</style>