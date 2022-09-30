<template>
  <router-view />
</template>

<script setup lang="ts">
  onMounted(() => {
    console.log(_.concat([123], [456]));
    console.log($IS);
  })
</script>
