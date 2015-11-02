/**
 * 	置随机数，如果包含8则赢，否则输		
 */


var maxNum = 10000

function getRandomNumberBetween(min, max){
	var range = max - min
	var rand = Math.random()
	return Math.round(min + rand * range)
}

function getRandomNumberTo(max){
	return getRandomNumberBetween(0, max)
}

function containsEight(num){
	while(num > 0) {
		if (num % 10 == 8) return true
		else num = Math.floor(num / 10)
	}
	return false
}

var rn = getRandomNumberTo(maxNum)
debug(rn)

if (containsEight(rn)) {
	debug('you win ---------------------------------------------------')
} else {
	debug('you lose')
}


