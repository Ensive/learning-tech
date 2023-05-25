import Deque from './deque.js';
import MinHeap from './min_heap.js';
import assert from 'assert';

export function findMaxSlidingWindow(nums, w) {
  const slidingWindow = [];
  for (let i = 0; i < nums.length; i++) {
    slidingWindow.push(nums[i]);
  }

  console.log('slidingWindow :>> ', slidingWindow);
  const minHeap = new MinHeap(slidingWindow);
  console.log('minHeap :>> ', minHeap.data);
  console.log('minHeap.poll() :>> ', minHeap.poll());
  console.log('minHeap :>> ', minHeap.data);
}

assert(
  JSON.stringify(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7, 20], 2)) ===
    JSON.stringify([5, 5, 4, 4, 6, 7, 20]),
);

// assert(
//   JSON.stringify(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) ===
//     JSON.stringify([3, 4, 5, 6, 7, 8, 9, 10]),
// );
