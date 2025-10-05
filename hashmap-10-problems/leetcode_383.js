//383. Ransom Note

var canConstruct = function(ransomNote, magazine) {
	class HashMap {
		constructor() {
			this.map = new Map();
		}
		set(key, value) {
			this.map.set(key, value);
		}
		get(key) {
			return this.map.has(key) ? this.map.get(key) : 0;
		}
	}

	let map = new HashMap();

	for (let i = 0; i < magazine.length; i++) {
		let count = map.get(magazine[i]);
		map.set(magazine[i], count + 1);
	}
	for (let i = 0; i < ransomNote.length; i++) {
		let count = map.get(ransomNote[i]);
		if (count === 0) {
			return false;
		}
		map.set(ransomNote[i], count - 1);
	}

	return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
