<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-card
        >
          <v-card-title>
              선행지수와 주가
              <v-dialog
                v-model="dialog.kospiAndLeadingCycle"
              >
                <ModalDetail
                  title="선행지수와 주가" 
                  :chartConfig="chartConfig.kospiAndLeadingCycle"
                >
                  <template v-slot:table="{ tableData }">
                    <v-table
                      fixed-header
                      height="400px"
                    >
                      <thead>
                        <tr>
                          <th>
                            시점
                          </th>
                          <th>
                            선행지수 순환변동치(좌)
                          </th>
                          <th>
                            코스피(우)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in tableData.kospi"
                          :key="index"
                        >
                          <td>
                            {{ item.month }}
                          </td>
                          <td>
                            {{ item.value }}
                          </td>
                          <td>
                            {{ tableData.leadingCycle[index].value }}
                          </td>
                        </tr>
                      </tbody>

                    </v-table>
                  </template>
                </ModalDetail>
              </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart
              :data="chartConfig.kospiAndLeadingCycle.data"
              :options="chartConfig.kospiAndLeadingCycle.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('kospiAndLeadingCycle')"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('kospiAndLeadingCycle')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            물가와 주가
              <v-dialog
                v-model="dialog.kospiAndCpi"
              >
                <ModalDetail
                  title="물가와 주가" 
                  :chartConfig="chartConfig.kospiAndCpi"
                >
                  <template v-slot:table="{ tableData }">
                    <v-table
                      fixed-header
                      height="400px"
                    >
                      <thead>
                        <tr>
                          <th>
                            시점
                          </th>
                          <th>
                            선행지수와 물가상승률 차이(좌)
                          </th>
                          <th>
                            코스피(우)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in tableData.diffItems"
                          :key="index"
                        >
                          <td>
                            {{ item.month }}
                          </td>
                          <td>
                            {{ item.value.toFixed(2) }}
                          </td>
                          <td>
                            {{ tableData.kospi[index].value }}
                          </td>
                        </tr>
                      </tbody>

                    </v-table>
                  </template>
                </ModalDetail>
              </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.kospiAndCpi.data"
              :options="chartConfig.kospiAndCpi.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('kospiAndCpi')"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('kospiAndCpi')"></v-btn>
          </v-card-actions>
      </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            선행지수와 장단기금리차
              <v-dialog
                v-model="dialog.leadingCycleAndYield"
              >
                <ModalDetail
                  title="선행지수와 장단기금리차" 
                  :chartConfig="chartConfig.leadingCycleAndYield"
                >
                  <template v-slot:table="{ tableData }">
                    <v-table
                      fixed-header
                      height="400px"
                    >
                      <thead>
                        <tr>
                          <th>
                            시점
                          </th>
                          <th>
                            선행지수 순환변동치(좌)
                          </th>
                          <th>
                            장단기 금리차(우)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in tableData.leadingCycle"
                          :key="index"
                        >
                          <td>
                            {{ item.month }}
                          </td>
                          <td>
                            {{ item.value }}
                          </td>
                          <td>
                            {{ tableData.distance[index].value.toFixed(2) }}
                          </td>
                        </tr>
                      </tbody>

                    </v-table>
                  </template>
                </ModalDetail>
              </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.leadingCycleAndYield.data"
              :options="chartConfig.leadingCycleAndYield.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('leadingCycleAndYield')"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('leadingCycleAndYield')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            경기순환
            <v-dialog
              v-model="dialog.coincidentCycle"
            >
              <ModalDetail
                title="경기순환" 
                :chartConfig="chartConfig.coincidentCycle"
              >
                <template v-slot:table="{ tableData }">
                  <v-table
                    fixed-header
                    height="400px"
                  >
                    <thead>
                      <tr>
                        <th></th>
                        <th
                          class="text-center"
                          colspan="3"
                        >
                          기준순환일
                        </th>
                        <th
                          class="text-center"
                          colspan="3"
                        >
                          지속기간 (개월)
                        </th>
                      </tr>
                      <tr>
                        <th></th>
                        <th class="text-center">저점</th>
                        <th class="text-center">정점</th>
                        <th class="text-center">저점</th>
                        <th class="text-center">확장기</th>
                        <th class="text-center">수축기</th>
                        <th class="text-center">순환기</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in tableData.economicCycle"
                        :key="index"
                      >
                        <td class="text-center">
                          제 {{ item.cycleNumber }} 순환기
                        </td>
                        <td class="text-center">
                          {{ item.referenceDays.lowPoint }}
                        </td>
                        <td class="text-center">
                          {{ item.referenceDays.highPoint }}
                        </td>
                        <td class="text-center">
                          {{ item.referenceDays.nextLowPoint }}
                        </td>
                        <td class="text-center">
                          {{ item.durationMonths.expansion }}
                        </td>
                        <td class="text-center">
                          {{ item.durationMonths.contraction }}
                        </td>
                        <td class="text-center">
                          {{ item.durationMonths.totalCycle }}
                        </td>
                      </tr>
                    </tbody>

                  </v-table>
                </template>
              </ModalDetail>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart
              :data="chartConfig.coincidentCycle.data"
              :options="chartConfig.coincidentCycle.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('coincidentCycle')"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('coincidentCycle')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            일평균 수출금액과 주가
            <v-dialog
              v-model="dialog.kospiAndDailyExportAmount"
            >
              <ModalDetail
                title="일평균 수출금액과 주가" 
                :chartConfig="chartConfig.kospiAndDailyExportAmount"
              >
                <template v-slot:table="{ tableData }">
                  <v-table
                    fixed-header
                    height="400px"
                  >
                    <thead>
                      <tr>
                        <th>
                          시점
                        </th>
                        <th>
                          일평균 수출금액(좌)
                        </th>
                        <th>
                          코스피(우)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in tableData.kospi"
                        :key="index"
                      >
                        <td>
                          {{ item.month }}
                        </td>
                        <td>
                          {{ item.value }}
                        </td>
                        <td>
                          {{ tableData.dailyExportAmount[index].value }}
                        </td>
                      </tr>
                    </tbody>

                  </v-table>
                </template>
              </ModalDetail>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.kospiAndDailyExportAmount.data"
              :options="chartConfig.kospiAndDailyExportAmount.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('kospiAndDailyExportAmount')" disabled></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('kospiAndDailyExportAmount')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            수출입동향 지역별(%)
            <v-dialog
              v-model="dialog.exportByLocations"
            >
              <ModalDetail
                title="수출입동향 지역별(%)" 
                :chartConfig="chartConfig.exportByLocations"
              >
                <template v-slot:table="{ tableData }">
                  <v-table
                    fixed-header
                    height="400px"
                  >
                    <thead>
                      <tr>
                        <th>
                          시점
                        </th>
                        <th>
                          미국
                        </th>
                        <th>
                          중국
                        </th>
                        <th>
                          유럽
                        </th>
                        <th>
                          아세안
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(month, index) in tableData.date"
                        :key="index"
                      >
                        <td>
                          {{ month }}
                        </td>
                        <td>
                          {{ tableData.usa[index].toFixed(3) }}
                        </td>
                        <td>
                          {{ tableData.china[index].toFixed(3) }}
                        </td>
                        <td>
                          {{ tableData.eu[index].toFixed(3) }}
                        </td>
                        <td>
                          {{ tableData.asean[index].toFixed(3) }}
                        </td>
                      </tr>
                    </tbody>

                  </v-table>
                </template>
              </ModalDetail>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.exportByLocations.data"
              :options="chartConfig.exportByLocations.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('exportByLocations')"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('exportByLocations')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            금리의 위험구조
            <v-dialog
              v-model="dialog.creditSpread"
            >
              <ModalDetail
                title="금리의 위험구조" 
                :chartConfig="chartConfig.creditSpread"
              >
                <template v-slot:table="{ tableData }">
                  <v-table
                    fixed-header
                    height="400px"
                  >
                    <thead>
                      <tr>
                        <th>
                          시점
                        </th>
                        <th>
                          회사채(AA-, 3년)
                        </th>
                        <th>
                          국고채(3년)
                        </th>
                        <th>
                          신용스프레드
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in tableData.creditSpreads"
                        :key="index"
                      >
                        <td>
                          {{ item.month }}
                        </td>
                        <td>
                          {{ tableData.yield3Year[index].value }}
                        </td>
                        <td>
                          {{ tableData.yieldCompany[index].value }}
                        </td>
                        <td>
                          {{ item.value.toFixed(2) }}
                        </td>
                      </tr>
                    </tbody>

                  </v-table>
                </template>
              </ModalDetail>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.creditSpread.data"
              :options="chartConfig.creditSpread.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('creditSpread')" disabled></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('creditSpread')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            통화 및 유동성
            <v-dialog
              v-model="dialog.kospiM2Ratio"
            >
              <ModalDetail
                title="금리의 위험구조" 
                :chartConfig="chartConfig.kospiM2Ratio"
              >
                <template v-slot:table="{ tableData }">
                  <v-table
                    fixed-header
                    height="400px"
                  >
                    <thead>
                      <tr>
                        <th>
                          시점
                        </th>
                        <th>
                          코스피시가총액/M2 비중추이 (평균: {{ tableData.average.toFixed(3) }})
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in tableData.kospiM2Ratio"
                        :key="index"
                      >
                        <td>
                          {{ item.month }}
                        </td>
                        <td>
                          {{ item.value.toFixed(3) }}
                          (
                            <span v-if="item.percent < 0">
                              평균대비 {{ Math.abs(item.percent).toFixed(2) }}% 만큼 저평가되어 있습니다.
                            </span>
                            <span v-else-if="item.percent > 0">
                              평균대비 {{ item.percent.toFixed(2) }}% 만큼 고평가되어 있습니다.
                            </span>
                          )
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </template>
              </ModalDetail>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <LineChart 
              :data="chartConfig.kospiM2Ratio.data"
              :options="chartConfig.kospiM2Ratio.options"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-post" @click="goPostExternal('kospiM2Ratio')" disabled></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-arrow-expand" @click="toggleDialog('kospiM2Ratio')"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LineChart from '@/components/LineChart.vue'
import ModalDetail from '@/components/ModalDetail.vue'
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
import { ChartData, ChartOptions } from 'chart.js';

type ChartName =
  | 'coincidentCycle'
  | 'creditSpread'
  | 'exportByLocations'
  | 'kospiAndCpi'
  | 'kospiAndDailyExportAmount'
  | 'kospiAndLeadingCycle'
  | 'kospiM2Ratio'
  | 'leadingCycleAndYield';

interface DialogStatus extends Record<ChartName, boolean> {}

interface Links extends Record<ChartName, string> {}

interface ChartConfig extends Record<ChartName, {
    data: ChartData<'line', any>;
    options: ChartOptions<any>;
    tableData: Record<string, any>
  }
> {}

const dialog = ref<DialogStatus>({
  coincidentCycle: false,
  creditSpread: false,
  exportByLocations: false,
  kospiAndCpi: false,
  kospiAndDailyExportAmount: false,
  kospiAndLeadingCycle: false,
  kospiM2Ratio: false,
  leadingCycleAndYield: false
})

const links: Links = {
  coincidentCycle: 'https://blog.naver.com/swlee_dev/223181915826',
  creditSpread: '',
  exportByLocations: 'https://blog.naver.com/swlee_dev/223220455252',
  kospiAndCpi: 'https://blog.naver.com/swlee_dev/223213253496',
  kospiAndDailyExportAmount: '',
  kospiAndLeadingCycle: 'https://blog.naver.com/swlee_dev/223214271325',
  kospiM2Ratio: '',
  leadingCycleAndYield: 'https://blog.naver.com/swlee_dev/223231486823'
}

const chartConfig: ChartConfig = {
  coincidentCycle: coincidentCycleConfig,
  creditSpread: creditSpreadConfig,
  exportByLocations: exportByLocationsConfig,
  kospiAndCpi: kospiAndCpiConfig,
  kospiAndDailyExportAmount: kospiAndDailyExportAmountConfig,
  kospiAndLeadingCycle: kospiAndLeadingCycleConfig,
  kospiM2Ratio: kospiM2RatioConfig,
  leadingCycleAndYield: leadingCycleAndYieldConfig
}

const toggleDialog = (key: ChartName) => {
  dialog.value[key] = !dialog.value[key]
}

const goPostExternal = (key: ChartName) => {
  const url = links[key]
  if (url) {
    window.open(url, '_blank')
  } else {
    alert('준비중입니다')
  }
}

</script>
