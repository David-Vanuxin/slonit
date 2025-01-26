const secretNumber = Math.round(Math.random().toFixed(2) * 100)

const getTry = (start, end) => {
	const number = Math.round((end + start) / 2)

	console.log("Компьютер 2: Пробую число ", number)

	if (number < secretNumber) {
		console.log("Компьютер 1: Больше")
		return getTry(number + 1, end)
	}

	if (number > secretNumber) {
		console.log("Компьютер 1: Меньше")
		return getTry(start, number - 1)
	}

	return "Компьютер 1: Угадал!"
}

console.log("Компьютер 1 загадал число: ", secretNumber)

console.log(getTry(1, 100))