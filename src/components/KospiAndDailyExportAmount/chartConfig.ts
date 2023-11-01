import { kospi, dailyExportAmount } from "@/data"
import { ChartData, ChartOptions } from "chart.js"

const startMonth = dailyExportAmount[0].month
const filteredKospi = kospi.filter(item => item.month >= startMonth)
export const data: ChartData<'line', any> = {
  datasets: [
    {
      label: '일평균 수출 금액',
      backgroundColor: 'white',
      borderColor: 'yellow',
      data: dailyExportAmount,
      yAxisID: 'y',
      spanGaps: true,
    },
    {
      label: '코스피',
      backgroundColor: 'white',
      borderColor: 'blue',
      data: filteredKospi,
      yAxisID: 'y1',
      spanGaps: false
    }
  ]
}

export  const options: ChartOptions<any> = {
    parsing: {
    xAxisKey: 'month',
    yAxisKey: 'value'
  },
  responsive: true,
  interaction: { 
    mode: 'index',
    intersect: false
  },
  radius: 0,
  stacked: false,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 0,
        autoSkipPadding: 15
      }
    },
    y: {
      display: true,
      grid: {
        drawOnChartArea: false
      }
    },
    y1: {
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}