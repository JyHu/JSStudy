/**
 * 斐波那契
 */


function fibonacci(n) {
	if (n < 0) return []
	else if (n == 0) return [0]
	else if (n == 1) return [0, 1]
	else {
		var fb = [0, 1]
		for (var i = 0; i < n - 2; i ++)
			fb.push(fb[i] + fb[i + 1])
		return fb
	}
}

debug(fibonacci(100))


/**
 * 乘法表
 */

function mutilForm(m){
	debug('\n\n\n\n ' + m + '*' + m + '乘法表 \n\n\n')

	for (var i = 1; i <= m; i ++){
		var arr = []
		for (var j = 1; j <= i; j ++){
			arr.push(j + '*' + i + '=' + (i * j))
		}
		debug(arr)
	}
}

mutilForm(14)