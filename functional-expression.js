const operations = {
	["multiply"]: (a, b) => a * b,
	["add"]: (a, b) => a + b,
	["divide"]: (a, b) => a / b,
	["substract"]: (a, b) => a - b,
}

const calculate = (a, b, operation) => {
	return operation(a, b)
}

const selectedOperation = "add"

console.log(calculate(2, 2, operations[selectedOperation]))