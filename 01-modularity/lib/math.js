'use strict'


module.exports.randomInt = (min, max) => (
	Math.floor(
		Math.random()
		* (max - min + 1) 
		+ min
	)	
)

// console.log(module.exports.randomInt(2,6))
