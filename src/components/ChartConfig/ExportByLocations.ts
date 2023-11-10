import { date, total, usa, china, eu, asean } from '@/data'
import { ChartData, ChartOptions } from 'chart.js';

const regionsColors = {
  usa: "#FF9999", // 연한 빨강
  china: "#66B2FF", // 연한 파랑
  asean: "#99FF99", // 연한 초록
  eu: "#FFCC66" // 황금색
};

const totalMapper = (value: number, index: number) => (value / total[index]) * 100;

export const data: ChartData<'line', any> = {
  labels: date,
  datasets: [
    {
      label: "미국",
      backgroundColor: "white",
      borderColor: regionsColors.usa,
      data: usa.map(totalMapper),
      yAxisID: "y",
      spanGaps: true
    },
    {
      label: "중국",
      backgroundColor: "white",
      borderColor: regionsColors.china,
      data: china.map(totalMapper),
      yAxisID: "y",
      spanGaps: true
    },
    {
      label: "아세안",
      backgroundColor: "white",
      borderColor: regionsColors.asean,
      data: asean.map(totalMapper),
      yAxisID: "y",
      spanGaps: true
    },
    {
      label: "EU",
      backgroundColor: "white",
      borderColor: regionsColors.eu,
      data: eu.map(totalMapper),
      yAxisID: "y",
      spanGaps: true
    }
  ]
};

export const options: ChartOptions<any> = {
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
    }
  }
};

export default  { data, options }
