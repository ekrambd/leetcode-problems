//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let mySet = new Set(nums);
    let uniqueArray = Array.from(mySet);
    for(let i = 0; i < nums.length; i++){
        nums[i] = uniqueArray[i];
    }
    return uniqueArray.length;
};
let arr = [1,1,2];
let len = removeDuplicates(arr);
let splice = arr.slice(0,len);
console.log(splice);