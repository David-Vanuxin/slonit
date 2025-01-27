const myFilter = (arr, callback) => {
	const result = []

	for (let elem of arr) 
		if (callback(elem)) result.push(elem) 

	return result
}

// Вернёт [1, 2, 3]
console.dir(myFilter([-1, 0, 1, 2, 3], n => n > 0)) 