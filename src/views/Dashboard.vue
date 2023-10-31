<template>
  <v-container>
    <!-- <v-row>
        <v-col md="3">
            1
        </v-col>
        <v-col md="3">
            2
        </v-col>
        <v-col md="3">
            3
        </v-col>
        <v-col md="3">
            4
        </v-col>
    </v-row> -->
    <v-row>
        <v-col md="4">
          <v-card>
            <v-card-title>
              동행지수순환변동치와 경기순환
            </v-card-title>
            <coincidentCycleChart/>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
            <v-card-title>
              선행지수순환변동치와 주가
            </v-card-title>
            <leadingCycleAndKospiChart />
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card>
            <v-card-title>
              선행지수순환변동치와 장단기금리차
            </v-card-title>
            <leadingCycleAndYieldChart />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cpiAndKospiChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import coincidentCycleChart from '@/components/coincidentCycleChart/Index.vue'
import leadingCycleAndKospiChart from '@/components/leadingCycleAndKospiChart/Index.vue'
import leadingCycleAndYieldChart from '@/components/leadingCycleAndYieldChart/Index.vue'
import cpiAndKospiChart from '@/components/cpiAndKospiChart/Index.vue'
</script>
