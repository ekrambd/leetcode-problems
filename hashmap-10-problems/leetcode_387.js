//387. First Unique Character in a String
var firstUniqChar = function(s) {
	class HashMap{
		constructor(){
			this.map = new Map();
		}
		set(key,value){
			this.map.set(key,value);
		}
		get(key){
			return this.map.has(key)?this.map.get(key):null;
		}
	}
	let map = new Map();
	for(let i = 0; i < s.length; i++){
		let count = map.get(s[i]);
		if(count == null){
			map.set(s[i],1);
		}else{
			map.set(s[i],count+1);
		}
	}

	for(let i = 0; i < s.length; i++){
		if(map.get(s[i]) == 1){
			return i;
		}
	}

	return -1;
};

console.log(firstUniqChar("leetcode"));