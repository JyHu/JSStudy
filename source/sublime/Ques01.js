/**
 * 找出1~1000中能被3、5、7整除的数，并每行6个的输出
 */


var k = 0
var nums = []
for (var i = 1; i <= 1000; i ++){
	if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
		k ++
		nums.push(i)
		if (k % 6 == 0){
			debug(nums)
			nums = []
		}
	}
}
debug(nums)


function GetRandomNum(min, max){
	var range = max - min
	var rand = Math.random()	
	return min + Math.round(rand * range)
}

debug(GetRandomNum(100, 10000000))

Math.random() 		// 返回0~1间一个随机数
Math.ceil(n)		// 返回大于n的最小整数
Math.round(n)		// 返回n四舍五入后整数的值
Math.floor(n)		// 返回小于等于n的最大整数
















