const capitalizeFirstLetter = str => {
	str[0] = str[0].toUpperCase()
	return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalizeFirstLetter("abc")) // Abc

const cutString = (str, limit) => {
	if (str.length <= limit) return str 

	/* -3 чтобы вместе с "..." длина укладывалась в ограничение */
	let end = limit - 3

	for (let i = end; i >= 0; i--) {
		if ([ " ", ',', '.', '!', '?', ':', ';' ].findIndex(char => char === str[i]) === -1) end--
		else break
	}

	return str.slice(0, end) + "..."
}		

console.log(cutString("abc", 3))
console.log(cutString(
`Lorem ipsum dolor sit amet, \
consectetur adipisicing elit, \
sed do eiusmod tempor incididunt ut labore`, 44)) 
// Дано 100 символов, вернёт:
// Lorem ipsum dolor sit amet, consectetur...


const isSubstring = (str, substr) => {
	if (substr.length > str.length) [str, substr] = [substr, str]
	// В задании не указано, можно ли использовать метод includes
	// С ним можно закончить так:
	// return str.includes(substr)

	for (let i = 0; i < str.length; i++) {

		for (let j = 0; j < substr.length; j++) {
			if (str[i] !== substr[j]) break
			if (j === substr.length - 1) return true
			i++ 
		}
	}

	return false
}

console.log(isSubstring("abc", "cccabcabc")) // true
console.log(isSubstring("aa", "cccbba")) // false