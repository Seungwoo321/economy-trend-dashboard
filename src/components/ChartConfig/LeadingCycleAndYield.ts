import { yield1Year, yield10Year, leadingCycle } from '@/data'
import { ChartOptions, ChartData } from 'chart.js'

// 장단기 금리차 (10y - 1y)
const distance = yield10Year.map((item, index) => ({ month: item.month, value: item.value - yield1Year[index].value }));

const startMonth = yield1Year[0].month
const filteredleadingCycle = leadingCycle.filter(item => item.month >= startMonth)

export const data: ChartData <'line', any> = {
  datasets: [
    {
      label: "선행지수 순환변동치(좌)",
      backgroundColor: "white",
      borderColor: "red",
      data: filteredleadingCycle,
      yAxisID: "y",
      spanGaps: true
    },
    {
      label: "장단기 금리차(우)",
      backgroundColor: "white",
      borderColor: "green",
      data: distance,
      yAxisID: "y1"
    }
  ]
};

export const options: ChartOptions<any> = {
  parsing: {
    xAxisKey: 'month',
    yAxisKey: 'value'
  },
  responsive: true,
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
      min: 96,
      max: 104,
      type: "linear",
      display: true,
      position: "left",
      grid: {
        drawOnChartArea: false
      }
    },
    y1: {
      min: -2,
      max: 4,
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false
      },
      title: {
        display: true,
        text: "%p"
      }
    }
  },
  plugins: {
    // title: {
    //   display: true,
    //   text: '선행지수 순환변동치와 장단기 금리차'
    // },
    legend: {
      display: false
    },
    annotation: {
      annotations: {
        annotation: {
          type: "line",
          borderColor: "#fff",
          borderWidth: 1,
          display: true,
          label: {
            display: false
          },
          scaleID: "y1",
          value: "0",
          borderDash: [6, 6]
        }
      }
    }
  }
};

export default  { data, options }
