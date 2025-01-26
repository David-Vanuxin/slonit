const mySlice = (arr, start = 0, end = null) => {
	if (!end) end = arr.length
	if (end < 0) {
		end = arr.length + end;
	}

	res = []

	if (start < 0) start = arr.length + start

	if (start > end) [start, end] = [end, start]

	for (let i = start; i < end; i++) {
		res.push(arr[i])
	}

	return res
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(), mySlice(arr)) // [1, 2, 3, 4, 5]
console.log(arr.slice(2), mySlice(arr, 2)) // [ 3, 4, 5 ]
console.log(arr.slice(1, 3), mySlice(arr, 1, 3)) // [ 2, 3 ]
console.log(arr.slice(-4), mySlice(arr, -4)) // [ 2, 3, 4, 5 ]
console.log(arr.slice(-4, -2), mySlice(arr, -2, -4)) // [ 2, 3 ]