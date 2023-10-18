// // binary search
// let nums1 = [1, 3],
//   nums2 = [2];

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   let combineArr = nums1.length + nums2.length;
//   let mid = 0 + Math.floor((combineArr - 0) / 2);
//   console.log(mid);
//   return 1;
// }

// console.log(findMedianSortedArrays(nums1, nums2));

// reverse integer
let x = 120;
function a(x: number) {
  let reverse = 0;
  let maxInt = Math.pow(2, 31);
  let minInt = Math.pow(-2, 31);
  while (x != 0) {
    if (reverse > maxInt / 10 || reverse < minInt / 10) {
      return 0;
    }
    let digit = x % 10;
    console.log(digit, digit + "digit");
    reverse = reverse * 10 + digit;
    console.log(reverse, reverse + "reverse");
    x = Math.trunc(x / 10);
    console.log(x, x + "x");
  }
  console.log(reverse);
}

a(x);
