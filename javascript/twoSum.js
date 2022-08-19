/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let mapOfNumber = {};
  let twoIndexs = [];
  
  for(let i = 0; i < nums.length; i++) {
      mapOfNumber[nums[i]] = i;
  }
  
  for (let i = 0; i < nums.length; i++) {
      let goal = target - nums[i];
      
      if (mapOfNumber[goal] !== undefined && mapOfNumber[goal] !== i) {
          twoIndexs.push(i);
          twoIndexs.push(mapOfNumber[goal]);
          
          return twoIndexs;
      }
  }
  
  return twoIndexs;
};