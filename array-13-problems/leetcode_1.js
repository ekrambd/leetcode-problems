//1. Two Sum
//Patterns or Topics: Two Pointer

var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let sum = 0;
    while(left < right){
        sum = nums[left]+nums[right];
        if(sum == target){
            return [nums[left],nums[right]];
        }
        else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
};

console.log(twoSum([2,7,11,15],9));