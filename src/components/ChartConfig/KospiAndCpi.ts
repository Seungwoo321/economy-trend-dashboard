import { kospi, leadingIndexYoyChange, cpiYoyChange } from '@/data'
import { ChartOptions, ChartData } from 'chart.js'
// 선행지수 전년동월비 (%) - 월별 소비자 물가 등락률 전년동월비 (%)
const diffItems = leadingIndexYoyChange.map((item, index) => ({ ...item, value: item.value - cpiYoyChange[index].value}));

export const data: ChartData<'line', any> = {
  // labels: date,
  datasets: [
    {
      label: "선행지수와 물가상승률 차이(좌)",
      backgroundColor: "white",
      borderColor: "red",
      data: diffItems,
      yAxisID: "y",
      spanGaps: true
    },
    {
      label: "코스피(우)",
      backgroundColor: "white",
      borderColor: "blue",
      data: kospi,
      yAxisID: "y1"
    },
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
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
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
};

export const tableData = {
  kospi,
  diffItems
}

export default  { data, options, tableData }
