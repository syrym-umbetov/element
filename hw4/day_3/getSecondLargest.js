function getSecondLargest(nums) {
  const biggest = Math.max(...nums);
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== biggest) {
      array.push(nums[i]);
    }
  }
  return Math.max(...array);
}

getSecondLargest([2, 3, 6, 6, 5]);
