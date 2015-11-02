var gameMax = 1000


function getRandomNumberBetween(min, max){
	var range = max - min
	var rand = Math.random()
	return Math.floor(min + rand * range)
}

function getRandomNumberTo(max){
	return getRandomNumberBetween(0, max)
}

var rnum = getRandomNumberTo(gameMax)
debug('random number ' + rnum + '\n\n')
var guess = getRandomNumberTo(gameMax)

do {
	debug('I guess ' + guess)
	guess = getRandomNumberBetween(Math.min(guess, rnum), Math.max(guess, rnum))
	if (guess == rnum) debug('you win, the right number is ' + rnum)
} while (guess != rnum)
