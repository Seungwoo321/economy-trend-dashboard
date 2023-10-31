import { kospi, leadingIndexYoyChange, cpiYoyChange } from '@/data'

// 선행지수 전년동월비 (%) - 월별 소비자 물가 등락률 전년동월비 (%)
const diffItems = leadingIndexYoyChange.map((item, index) => item.value - cpiYoyChange[index].value);
console.log(kospi)
export const data = {
  // labels: date,
  datasets: [
    {
      label: "코스피",
      backgroundColor: "white",
      borderColor: "blue",
      data: kospi,
      yAxisID: "y"
    },
    {
      label: "선행지수와 물가상승률 차이",
      backgroundColor: "white",
      borderColor: "red",
      data: diffItems,
      yAxisID: "y1",
      spanGaps: true
    }
  ]
};

export const options = {
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
    y: {
      type: "linear",
      display: true,
      position: "left",
      grid: {
        drawOnChartArea: false
      }
    },
    // y1: {
    //   type: "linear",
    //   display: true,
    //   position: "right",
    //   grid: {
    //     drawOnChartArea: false
    //   }
    // }
  }
};
