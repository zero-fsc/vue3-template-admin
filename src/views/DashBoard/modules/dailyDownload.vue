<template>
  <div class="daily-container flex">
    <div class="daily-left flex-1">
      <div class="daily-left-title">
        <p class="name">日下载量</p>
        <p class="describe">Average daily downloads</p>
      </div>
      <div class="daily-left-content">
        <div class="count">
          <span>4000</span>
        </div>
        <div class="daily-variation">
          <a-space>
            <span class="percent">25.35%</span>
            <IconFont icon="shangsheng" :style="{ 'font-size': '25px' }" />
          </a-space>
        </div>
      </div>
    </div>
    <div class="daily-charts flex-1">
      <div ref="chartContainer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFont from '@/components/Icon/iconFont.vue'
import { Chart } from '@antv/g2'
import { chartData } from '@/mocks/chart.mock'

const chartContainer = ref(null)

onMounted(() => {
  initCharts()
})

/*
 * @description 图表初始化
 */
const initCharts = () => {
  const chart = new Chart({
    container: chartContainer.value as any,
    autoFit: true,
    height: 160,
    padding: [10, 15, 30, 40]
  })

  chart.data(chartData)
  chart.scale('Data', {
    range: [0, 1],
    tickCount: 10,
    type: 'timeCat'
  })
  chart.scale('sales', {
    nice: true
  })
  chart.tooltip({
    showCrosshairs: true
  })

  chart.line().position('Data*sales')
  chart.area().position('Data*sales')
  chart.render()
}
</script>