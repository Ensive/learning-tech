function insert(intervals: number[][], newInterval: number[]): number[][] {
  const [newStart, newEnd] = newInterval;
  const mergedIntervals: number[][] = [];

  let i = 0;

  // Add intervals before the new interval
  while (i < intervals.length && intervals[i][1] < newStart) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  // Merge intervals with the new interval
  while (i < intervals.length && intervals[i][0] <= newEnd) {
    newStart = Math.min(intervals[i][0], newStart);
    newEnd = Math.max(intervals[i][1], newEnd);
    i++;
  }

  mergedIntervals.push([newStart, newEnd]);
  mergedIntervals.push(...intervals.slice(i));

  return mergedIntervals;
}
