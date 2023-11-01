import { EconomicCycleDataPoint } from '@/types'

// 경기순환
export const data: EconomicCycleDataPoint[] = [
  {
    cycleNumber: 1,
    referenceDays: {
      lowPoint: "1972.03",
      highPoint: "1974.02",
      nextLowPoint: "1975.06"
    },
    durationMonths: {
      expansion: 23,
      contraction: 16,
      totalCycle: 39
    },
    isPublished: true
  },
  {
    cycleNumber: 2,
    referenceDays: {
      lowPoint: "1975.06",
      highPoint: "1979.02",
      nextLowPoint: "1980.09"
    },
    durationMonths: {
      expansion: 44,
      contraction: 19,
      totalCycle: 63
    },
    isPublished: true
  },
  {
    cycleNumber: 3,
    referenceDays: {
      lowPoint: "1980.09",
      highPoint: "1984.02",
      nextLowPoint: "1985.09"
    },
    durationMonths: {
      expansion: 41,
      contraction: 19,
      totalCycle: 60
    },
    isPublished: true
  },
  {
    cycleNumber: 4,
    referenceDays: {
      lowPoint: "1985.09",
      highPoint: "1988.01",
      nextLowPoint: "1989.07"
    },
    durationMonths: {
      expansion: 28,
      contraction: 18,
      totalCycle: 46
    },
    isPublished: true
  },
  {
    cycleNumber: 5,
    referenceDays: {
      lowPoint: "1989.07",
      highPoint: "1992.01",
      nextLowPoint: "1993.01"
    },
    durationMonths: {
      expansion: 30,
      contraction: 12,
      totalCycle: 42
    },
    isPublished: true
  },
  {
    cycleNumber: 6,
    referenceDays: {
      lowPoint: "1993.01",
      highPoint: "1996.03",
      nextLowPoint: "1998.08"
    },
    durationMonths: {
      expansion: 38,
      contraction: 29,
      totalCycle: 67
    },
    isPublished: true
  },
  {
    cycleNumber: 7,
    referenceDays: {
      lowPoint: "1998.08",
      highPoint: "2000.08",
      nextLowPoint: "2001.07"
    },
    durationMonths: {
      expansion: 24,
      contraction: 11,
      totalCycle: 35
    },
    isPublished: true
  },
  {
    cycleNumber: 8,
    referenceDays: {
      lowPoint: "2001.07",
      highPoint: "2002.12",
      nextLowPoint: "2005.04"
    },
    durationMonths: {
      expansion: 17,
      contraction: 28,
      totalCycle: 45
    },
    isPublished: true
  },
  {
    cycleNumber: 9,
    referenceDays: {
      lowPoint: "2005.04",
      highPoint: "2008.01",
      nextLowPoint: "2009.02"
    },
    durationMonths: {
      expansion: 33,
      contraction: 13,
      totalCycle: 46
    },
    isPublished: true
  },
  {
    cycleNumber: 10,
    referenceDays: {
      lowPoint: "2009.02",
      highPoint: "2011.08",
      nextLowPoint: "2013.03"
    },
    durationMonths: {
      expansion: 30,
      contraction: 19,
      totalCycle: 49
    },
    isPublished: true
  },
  {
    cycleNumber: 11,
    referenceDays: {
      lowPoint: "2013.03",
      highPoint: "2017.09",
      nextLowPoint: "2020.05"
    },
    durationMonths: {
      expansion: 54,
      contraction: 32,
      totalCycle: 86
    },
    isPublished: true
  },
  // {
  //   cycleNumber: 12,
  //   referenceDays: {
  //     lowPoint: "2020.05"
  //   },
  //   durationMonths: {},
  //   isPublished: false
  // }
];
