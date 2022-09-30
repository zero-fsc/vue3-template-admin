<template>
  <div class="bread-crumb-container">
    <a-breadcrumb>
      <a-breadcrumb-item>DashBoard</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const $router = useRouter()
  onMounted(() => {
    console.log($router.getRoutes());
  })
</script>

<style lang="less" scoped>
.bread-crumb-container {
  padding: 12px 0;
}
</style>