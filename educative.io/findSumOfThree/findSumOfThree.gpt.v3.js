export function findSumOfThree(nums, target) {
  if (!Array.isArray(nums) || nums.length < 3) {
    throw new Error('Invalid input: nums must be an array with at least 3 elements.');
  }

  if (typeof target !== 'number') {
    throw new Error('Invalid input: target must be a number.');
  }

  const count = nums.length;

  if (count < 3) {
    return null;
  }

  quickSort(nums, 0, count - 1);

  for (let i = 0; i < count - 2; i++) {
    let left = i + 1;
    let right = count - 1;

    while (left < right) {
      const sumOfThree = nums[i] + nums[left] + nums[right];

      if (sumOfThree === target) {
        return true;
      } else if (sumOfThree < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}
