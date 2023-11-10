import { kospiMarketCap, m2Balance } from "@/data";
import { TooltipItem, ChartType, ChartData, ChartOptions } from "chart.js";

const kospiM2Ratio = kospiMarketCap.map((item, index) => {
  return {
    month: item.month,
    value: (item.value / 1000000000) / m2Balance[index].value * 100
  }
})
const average = kospiM2Ratio.reduce((acc, cur) => cur.value + acc, 0) / kospiM2Ratio.length
export const data: ChartData<'line', any> = {
  datasets: [
    {
      label: "코스피시가총액/M2 비중추이",
      backgroundColor: "white",
      borderColor: 'red',
      data: kospiM2Ratio,
      yAxisID: "y",
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
        drawOnChartArea: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        afterLabel: function (tooltipItem: TooltipItem<ChartType>) {
          const label = tooltipItem.label;
          const item = kospiM2Ratio.find(v => v.month === label);
          const percent = ((item?.value ?? 0) - average) / average * 100
          let description = ''
          if (percent < 0) {
            description += `(평균대비 ${Math.abs(percent).toFixed(2)}% 만큼 저평가되어 있습니다.)`
          } else if (percent > 0) {
            description += `(평균대비 ${percent.toFixed(2)}% 만큼 고평가되어 있습니다.)`
          }
          return description;
        }
      }
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
          scaleID: "y",
          value: average,
          borderDash: [6, 6]
        }
      }
    }
  }
}

export default  { data, options }
