const arrs = [-1, 0, 3, 5, 9, 12];
const target = 2;

console.log(Math.pow(2, 4));

function findTarget(arr: Array<number>, target: number): boolean {
  let high: number = arr.length;
  let low = 0;
  do {
    const mid = low + Math.floor((high - low) / 2);
    const v = arr[mid];
    console.log(v, mid, target, low, high);
    if (v === target) {
      return true;
    } else if (v > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);
  return false;
}

console.log(findTarget(arrs, target));
