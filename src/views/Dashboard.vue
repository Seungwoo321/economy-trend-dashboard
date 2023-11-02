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
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import CoincidentCycle from '@/components/CoincidentCycle/Index.vue'
import KospiAndLeadingCycle from '@/components/KospiAndLeadingCycle/Index.vue'
import LeadingCycleAndYield from '@/components/LeadingCycleAndYield/Index.vue'
import KospiAndCpi from '@/components/KospiAndCpi/Index.vue'
import KospiAndDailyExportAmount from '@/components/KospiAndDailyExportAmount/Index.vue'
</script>
