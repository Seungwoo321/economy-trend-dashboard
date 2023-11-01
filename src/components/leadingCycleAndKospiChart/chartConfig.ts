import {
  leadingCycle,
  kospi
} from "@/data"
import { ChartOptions, ChartData } from 'chart.js'
const startMonth = kospi[0].month
const filteredleadingCycle = leadingCycle.filter(item => item.month >= startMonth)
// const futuresMonth = [
//   '2023.09',
//   '2023.10',
//   '2023.11',
//   '2023.12',
//   '2024.01',
//   '2024.02',
//   '2024.03',
//   '2024.04',
//   '2024.05',
//   '2024.06'
// ]
// const futures = new Array(kospi.length - 1)
//   .fill(NaN)
//   .concat([kospi[kospi.length - 1]])
//   .concat([
//     99.71761929925057,
//     99.9878216359492,
//     99.91004775043325,
//     100.06687359680926,
//     100.12149445648036,
//     100.45921525598959,
//     100.4383114917676,
//     100.41408867278538,
//     100.46030663483897,
//     100.6231998823767
//   ]);
export const data: ChartData<'line', any> = {
  datasets: [
    {
      label: "선행지수 순환변동치",
      backgroundColor: "white",
      borderColor: "red",
      data: filteredleadingCycle,
      yAxisID: "y",
      spanGaps: true,
    },
    {
      label: "코스피",
      backgroundColor: "white",
      borderColor: "blue",
      data: kospi,
      yAxisID: "y1",
      spanGaps: false
    },

    // {
    //   label: "예측",
    //   borderColor: "red",
    //   backgroundColor: "rgba(255, 0, 0, 0.3)",
    //   data: futures,
    //   yAxisID: "y",
    //   borderDash: [3, 3]
    // }
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
    // title: {
    //   display: true,
    //   text: "선행지수 순환변동치와 주가"
    // },
    legend: {
      display: false
    },
    // annotation: {
    //   annotations: {
    //     annotation: {
    //       type: "line",
    //       borderColor: "#000",
    //       borderWidth: 2,
    //       display: true,
    //       label: {
    //         display: true,
    //         content: "2023.07 (Now)",
    //         position: "start"
    //       },
    //       scaleID: "x",
    //       value: "2023.07"
    //       // borderDash: [6, 6]
    //     }
    //   }
    // }
  }
};
