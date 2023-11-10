<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
              선행지수와 주가
              <!-- <v-icon size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand-all"></v-icon> -->
              <v-btn class="float-end" size="x-small" color="surface-variant" variant="text" icon="mdi-arrow-expand"  @click="dialog = true"></v-btn>
              <v-dialog
                v-model="dialog"
              >
                <v-card>
                  <v-card-title>
                    선행지수와 주가
                  </v-card-title>
                  <v-card-text>
                    <LineChart
                      :data="kospiAndLeadingCycleConfig.data"
                      :options="kospiAndLeadingCycleConfig.options"
                    />
                  <v-spacer></v-spacer>
                  <v-table
                    fixed-header
                    height="300px"
                  >
                    <thead>
                      <tr>
                        <th>
                          시점
                        </th>
                        <th>
                          선행지수 순환변동치
                        </th>
                        <th>
                          코스피 지수
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in kospiAndLeadingCycleConfig.data.datasets[0].data"
                        :key="index"
                      >
                        <td>
                          {{ item.month }}
                        </td>
                        <td>
                          {{ item.value }}
                        </td>
                        <td>
                          {{ kospiAndLeadingCycleConfig.data.datasets[1].data[index].value }}
                        </td>
                      </tr>
                    </tbody>

                  </v-table>
                  </v-card-text>
                </v-card>
              </v-dialog>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-text>
            <LineChart
              :data="kospiAndLeadingCycleConfig.data"
              :options="kospiAndLeadingCycleConfig.options"
            />
          </v-card-text>
          <!-- <v-card-actions> -->
            <!-- <v-spacer></v-spacer> -->
              <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn> -->
              <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn> -->
              <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn> -->
              <!-- <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand"></v-btn> -->
          <!-- </v-card-actions> -->
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
      <v-col md="4">
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
      <v-col md="4">
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
import { ref } from 'vue'
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
const dialog = ref(false)
</script>
