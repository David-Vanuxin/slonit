const myIndexOf = (arr, item, from = 0) => {
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) return i
	}

	return -1
}

arr = [1, 2, 3, 1, 2, 3]

console.log(arr.indexOf(3), myIndexOf(arr, 3)) // 2
console.log(arr.indexOf(2, 3), myIndexOf(arr, 2, 3)) // 4