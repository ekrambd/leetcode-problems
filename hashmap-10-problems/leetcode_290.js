//290. Word Pattern

var wordPattern = function(pattern, s) {
	let words = s.split(" ");
	if(pattern.length !== words.length) return false;
	let map = new Map();
	let used = new Set();
	for(let i = 0; i < pattern.length; i++){
		let p = pattern[i];
		let w = words[i];
		if(map.has(p)){
			if(map.get(p) !== w) return false;
		}else{
			if(used.has(w)) return false;
			map.set(p,w);
			used.add(w);
		}
	}
	return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));