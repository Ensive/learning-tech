import Deque from './deque.js';
import MinHeap from './min_heap.js';
import assert from 'assert';

// there are three solutions
// bruteforce O(nk)
// priority queue (heap)
// monotonic deque (deck) double ended queue

export function findMaxSlidingWindow(nums, w) {
  let slidingWindow = [];
  for (let i = 0; i < w; i++) {
    slidingWindow[i] = nums[i];
  }

  let result = [];
  result.push(findMax(slidingWindow));
  const length = nums.length;

  for (let i = w; i < length; i++) {
    slidingWindow.shift();
    slidingWindow.push(nums[i]);
    result.push(findMax(slidingWindow));
  }

  return result;
}

function findMax(nums) {
  let max = nums[0];
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

assert(
  JSON.stringify(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7, 20], 2)) ===
    JSON.stringify([5, 5, 4, 4, 6, 7, 20]),
);

assert(
  JSON.stringify(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)) ===
    JSON.stringify([3, 4, 5, 6, 7, 8, 9, 10]),
);
