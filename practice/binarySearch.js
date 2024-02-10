/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let value = arr[mid];
    if (value === target) {
      return mid;
    } else if (value > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
