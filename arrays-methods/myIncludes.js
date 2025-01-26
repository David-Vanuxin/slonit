const myIncludes = (arr, item, from = 0) => {
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) return true
	}

	return false
}

const arr = [1, 2, 3]

console.log(arr.includes(2), myIncludes(arr, 2)) // true
console.log(arr.includes(12), myIncludes(arr, 12)) // false