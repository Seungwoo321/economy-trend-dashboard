<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            선행지수와 주가
          </v-card-title>
          <KospiAndLeadingCycle />
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            물가와 주가
          </v-card-title>
          <KospiAndCpi />
      </v-card>
      </v-col>
        <v-col md="4">
          <v-card>
            <v-card-title>
              선행지수와 장단기금리차
            </v-card-title>
            <LeadingCycleAndYield />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col md="4">
        <v-card>
          <v-card-title>
            경기순환
          </v-card-title>
          <CoincidentCycle/>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            일평균 수출금액과 주가
          </v-card-title>
          <KospiAndDailyExportAmount />
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card>
          <v-card-title>
            수출입동향 지역별(%)
          </v-card-title>
          <ExportByLocations />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-card-title>
            금리의 위험구조
          </v-card-title>
          <CreditSpread />
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card>
          <v-card-title>
            통화 및 유동성
          </v-card-title>
          <KospiM2Ratio />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import CoincidentCycle from '@/components/CoincidentCycle/Index.vue'
import KospiAndLeadingCycle from '@/components/KospiAndLeadingCycle/Index.vue'
import LeadingCycleAndYield from '@/components/LeadingCycleAndYield/Index.vue'
import KospiAndCpi from '@/components/KospiAndCpi/Index.vue'
import KospiAndDailyExportAmount from '@/components/KospiAndDailyExportAmount/Index.vue'
import ExportByLocations from '@/components/ExportByLocations/Index.vue'
import CreditSpread from '@/components/CreditSpread/Index.vue'
import KospiM2Ratio from '@/components/KospiM2Ratio/Index.vue'
</script>
