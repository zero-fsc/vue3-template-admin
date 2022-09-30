<template>
  <div class="dashboard-container">
    <div class="dashboard-charts flex">
      <div class="charts-1 flex-1"></div>
      <div class="charts-1 flex-1"></div>
      <div class="charts-1 flex-1"></div>
      <div class="charts-1 flex-1"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.charts-1 {
  height: 100px;
  background-color: aquamarine;

  &:nth-child(n + 2) {
    margin-left: 10px;
  }
}
</style>