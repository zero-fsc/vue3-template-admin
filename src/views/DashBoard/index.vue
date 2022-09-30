<template>
  <div class="dashboard-container">
    <div class="dashboard-exhibition flex">
      <div class="dashboard-exhibition-item">
        <DailyDownload />
      </div>
      <div class="dashboard-exhibition-item">
        <DailyDownload />
      </div>
      <div class="dashboard-exhibition-item">
        <DailyDownload />
      </div>
      <div class="dashboard-exhibition-item">
        <DailyDownload />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DailyDownload from './modules/dailyDownload.vue'
</script>

<style lang="less" scoped>
.dashboard-exhibition {
  .dashboard-exhibition-item {
    flex: 1;
    height: 180px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 83px #cecece, -5px -5px 83px #ffffff;
    &:nth-child(n + 1) {
      margin-right: 20px;
    }
    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>