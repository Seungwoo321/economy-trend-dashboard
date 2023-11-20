<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <LineChart
        height="450px"
        :data="chartConfig.data"
        :options="chartConfig.options"
      >
      </LineChart>
      <v-spacer></v-spacer>
      <slot name="table" :tableData="chartConfig.tableData">
      </slot>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import LineChart from '@/components/LineChart.vue'
defineProps(['chartConfig', 'title'])
</script>
