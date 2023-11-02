import { yield3Year, yieldCompany } from '@/data';
import { ChartData, ChartOptions } from 'chart.js'

const creditSpreads = yield3Year.map((item, index) => {
  return {
    month: item.month,
    value: yieldCompany[index].value - item.value
  }
})
console.log(yieldCompany)
export const data: ChartData<'line', any> = {
  datasets: [
    {
      label: '회사채(AA-, 3년)',
      backgroundColor: 'white',
      borderColor: 'red',
      yAxisID: "y",
      data: yieldCompany,
      spanGaps: true
    },
    {
      label: '국고채(3년)',
      backgroundColor: 'white',
      borderColor: 'blue',
      yAxisID: "y",
      data: yield3Year,
      spanGaps: true
    },
    {
      label: '신용스프레드',
      backgroundColor: 'white',
      borderColor: 'white',
      yAxisID: 'y',
      data: creditSpreads,
      spanGaps: true,
      fill: true
    }
  ]
}

export const options: ChartOptions<any> = {
  parsing: {
    xAxisKey: 'month',
    yAxisKey: 'value'
  },
  responsive: true,
  cubicInterpolationMode: "monotone",
  interaction: {
    mode: "index",
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
      type: "linear",
      display: true,
      position: "left",
      grid: {
        drawOnChartArea: true
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    filler: {
      propagate: true
    }
  }
}