'use strict'

module.exports = (args) => {
	//args = process.argv
	let count, sides

	switch (args.length) {
		case 1:
			count = 1
			sides = args[0]
			break
		case 2:
			count = args[0]
			sides = args[1]
			break
		default:
			count = 1
			sides = 6
	}


	return { count, sides }
}

// console.log(module.exports([]))
// console.log(module.exports([5]))
// console.log(module.exports([20]))