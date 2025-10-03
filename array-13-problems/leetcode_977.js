//977. Squares of a Sorted Array

var sortedSquares = function(nums) {
    let results = [];
    for(let i = 0; i < nums.length; i++){
        results.push(nums[i]**2);
    }
    let result = results.sort((a,b)=>a-b);
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));