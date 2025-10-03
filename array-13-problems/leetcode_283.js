//283. Move Zeroes
var moveZeroes = function(nums) {
    let left = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            let temp = nums[i];
            nums[i] = nums[left];
            nums[left] = temp;
            left++;
        }
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));