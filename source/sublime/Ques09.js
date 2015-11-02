

/**
 * 计算接下来的20个闰年
 */


function isLeapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

var leaps = 0
for (var i = (new Date()).getFullYear();; i ++){
	if (isLeapYear(i)) { 
		leaps ++
		debug('NO.' + leaps + ' leap year is ' + i)
	}
	if (leaps == 30) break
}
