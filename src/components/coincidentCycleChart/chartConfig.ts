import { economicCycle, coincidentCycle } from "@/data";
import { TooltipItem, ChartType, ChartOptions, ChartData } from 'chart.js'
interface ContractionBoxOptions {
  [key: string]: {
    type: string;
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    borderColor: string;
    backgroundColor: string;
  }
}

const yMin = 92;
const yMax = 108;
const contractionBoxOptions = economicCycle.reduce((acc: ContractionBoxOptions, cur) => {
  if (!cur.isPublished) return acc;
  acc[`circle-${cur.cycleNumber.toString()}`] = {
    type: "box",
    xMin: coincidentCycle.findIndex((v) => v.month === cur.referenceDays.highPoint),
    xMax: coincidentCycle.findIndex((v) => v.month === cur.referenceDays.nextLowPoint),
    yMin,
    yMax,
    borderColor: 'rgba(200, 200, 200, 0.3)',
    backgroundColor: "rgba(200, 200, 200, 0.3)"
  };
  return acc;
}, {});

export const data: ChartData<any> = {
  datasets: [
    {
      label: "동행지수 순환변동치",
      backgroundColor: "#fff",
      borderColor: "#fff",
      data: coincidentCycle,
      yAxisID: "y"
    }
  ]
};

export const options: ChartOptions<any> = {
  parsing: {
    xAxisKey: 'month',
    yAxisKey: 'value'
  },
  interaction: {
    mode: "index",
    intersect: false
  },
  responsive: true,
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
    }
  },
  plugins: {
    // title: {
    //   display: true,
    //   text: "동행지수 순환변동치와 경기순환"
    // },
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        afterLabel: function (tooltipItem: TooltipItem<ChartType>) {
          const label = tooltipItem.label;
          const item = economicCycle.find((v) => {
            return (
              label >= v.referenceDays.lowPoint &&
              label < v.referenceDays.nextLowPoint
            );
          });
          let description = "";
          if (!item) return description;
          if (item.cycleNumber > 0) {
            const isLowPoint =
              economicCycle[item.cycleNumber - 1].referenceDays.lowPoint === label;
            const isHighPoint =
              economicCycle[item.cycleNumber - 1].referenceDays.highPoint === label;
            description = item ? `제${item.cycleNumber} 순환기` : "";
            if (isLowPoint) {
              description += " : 경기저점 (Trough)";
            }
            if (isHighPoint) {
              description += " : 경기정점 (Peak)";
            }
          }
          return description;
        }
      }
    },
    annotation: {
      annotations: {
        "cyrcle-start": {
          borderColor: "rgba(200, 200, 200, 0.3)",
          borderWidth: 1,
          display: true,
          label: {
            display: false
          },
          scaleID: "x",
          value: economicCycle[0].referenceDays.lowPoint
        },
        ...contractionBoxOptions
      }
    }
  }
};
