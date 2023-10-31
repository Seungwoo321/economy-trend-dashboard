export interface EconomicCycle {
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

export interface BaseItem {
  month: string,
  value: number
}
