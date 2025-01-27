const getNumericPropsSum = obj => {
	let res = 0
	for (let key in obj) {
		if (typeof obj[key] === "number") res += obj[key]
	}

	return res
}


const Obj = {
	a: 1,
	b: 2,
	c: 3
}

console.log(getNumericPropsSum(Obj)) // 6

const fruitsPrices = {
	apple: 75,
	banana: 150,
	strawberry: 400,
	pumpkin: "not a fruit"
}

const getSortedNumericProps = obj => {
	const numericProps = []

	for (let key in obj) {
		if (typeof obj[key] === "number") numericProps.push(key)
	}

	numericProps.sort((a, b) => {
		if (obj[a] > obj[b]) return -1
		if (obj[a] < obj[b]) return 1
		return 0
	})

	return numericProps
}

console.log(getSortedNumericProps(fruitsPrices)) // [ 'strawberry', 'banana', 'apple' ]