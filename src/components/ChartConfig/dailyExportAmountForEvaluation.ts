import { dailyExportAmountForEvaluation } from '@/data'
import { ChartOptions, ChartData, TooltipItem, ChartType } from 'chart.js'


export const data: ChartData <'line', any> = {
  datasets: [
    {
      label: "주가 적정수준",
      backgroundColor: "white",
      borderColor: "green",
      data: dailyExportAmountForEvaluation,
      yAxisID: "y",
      spanGaps: true
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
          const item = dailyExportAmountForEvaluation.find(v => v.month === label);
          const percent = (item?.value ?? 0)
          let description = ''
          if (percent < 0) {
            description += `(일평균수출금액 대비 ${Math.abs(percent).toFixed(2)}% 만큼 저평가되어 있습니다.)`
          } else if (percent > 0) {
            description += `(일평균수출금액 대비 ${percent.toFixed(2)}% 만큼 고평가되어 있습니다.)`
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
          value: "0",
          borderDash: [6, 6]
        }
      }
    }
  }
};

export const tableData = {
  dailyExportAmountForEvaluation
}

export default  { data, options, tableData }
