
function sum(arr) {
	return arr.reduce(function (x, y){
		return x + y
	})
}
debug(sum([1, 2, 3, 4, 5]))

function lazy_sum(arr){
	var sum = function (){
		return arr.reduce(function(x, y){
			return x + y
		})
	}
	return sum
}
var f = lazy_sum([1, 2, 3, 4, 5, 6])
debug(f)
debug(f())

/**
 *  箭头函数，SE6标准新增函数
 */
// var fn = x => {
// 	if (x > 0){
// 		return x * x
// 	}else {
// 		return -x * x
// 	}
// }
// debug(fn(3))































