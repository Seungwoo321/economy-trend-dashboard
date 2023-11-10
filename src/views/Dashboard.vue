<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            선행지수와 주가
          </v-card-title>
          <LineChart 
            :data="kospiAndLeadingCycleConfig.data"
            :options="kospiAndLeadingCycleConfig.options"
          />
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            물가와 주가
          </v-card-title>
          <LineChart 
            :data="kospiAndCpiConfig.data"
            :options="kospiAndCpiConfig.options"
          />
      </v-card>
      </v-col>
        <v-col md="4">
          <v-card>
            <v-card-title>
              선행지수와 장단기금리차
            </v-card-title>
            <LineChart 
              :data="leadingCycleAndYieldConfig.data"
              :options="leadingCycleAndYieldConfig.options"
            />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            경기순환
          </v-card-title>
          <LineChart
            :data="coincidentCycleConfig.data"
            :options="coincidentCycleConfig.options"
          />
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            일평균 수출금액과 주가
          </v-card-title>
          <LineChart 
            :data="kospiAndDailyExportAmountConfig.data"
            :options="kospiAndDailyExportAmountConfig.options"
          />
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            수출입동향 지역별(%)
          </v-card-title>
          <LineChart 
            :data="exportByLocationsConfig.data"
            :options="exportByLocationsConfig.options"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-card-title>
            금리의 위험구조
          </v-card-title>
          <LineChart 
            :data="creditSpreadConfig.data"
            :options="creditSpreadConfig.options"
          />
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card>
          <v-card-title>
            통화 및 유동성
          </v-card-title>
          <LineChart 
            :data="kospiM2RatioConfig.data"
            :options="kospiM2RatioConfig.options"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import LineChart from '@/components/LineChart.vue'
import {
  coincidentCycleConfig,
  creditSpreadConfig,
  exportByLocationsConfig,
  kospiAndCpiConfig,
  kospiAndDailyExportAmountConfig,
  kospiAndLeadingCycleConfig,
  kospiM2RatioConfig,
  leadingCycleAndYieldConfig
} from '@/components/ChartConfig'
</script>
