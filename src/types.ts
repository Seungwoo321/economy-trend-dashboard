export interface EconomicCycleDataPoint {
  cycleNumber: number;
  referenceDays: {
    lowPoint: string;
    highPoint: string;
    nextLowPoint: string;
  };
  durationMonths: {
    expansion: number;
    contraction: number;
    totalCycle: number;
  };
  isPublished: boolean;
}

export interface DataPoint {
  month: string,
  value: number
}
