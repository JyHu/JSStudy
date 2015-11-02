var xiaoming = {
	name : '小明',
	birth : 1990,
	age : function () {
		var y = new Date().getFullYear()
		return y - this.birth
	}
}
debug(xiaoming.age())


/**
 * 虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，
 * 不过，我们还是可以控制this的指向的！
 * 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，
 * 第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
 *
 * apply()把参数打包成Array再传入；
 * call()把参数按顺序传入。
 */
function getAge(){
	for (var x of arguments){
		debug('arguments ' + x)
	}
	var y = new Date().getFullYear()
	return y - this.birth
}
var xiaoming = {
	name : 'Xiaoming',
	birth : 1990,
	age : getAge
}
debug(xiaoming.age())
debug(getAge.apply(xiaoming, [1, 2, 3]))
debug(getAge.call(xiaoming, 1, 2, 3))


function add(x, y, f){
	return f(x) + f(y)
}
debug(add(-5, 6, Math.abs))


/**
 * map 转换数组的元素并返回一个新的数组
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var mr = arr.map(function (x){
	return x * x
})
debug('mr : ' + mr);

/**
 * reduce 必须接收两个参数，x是上一次function的结果，y是arr每次的循环到的数据
 */
var rv = arr.reduce(function (x, y){
	return x * 10 + y
})
debug(rv)

/**
 * filter 遍历所有的数组元素，并根据返回的bool值来确定保留还是删除数组中的元素
 */
var farr = arr.filter(function (x){
	return x % 2 !== 0
})
debug(farr)

/**
 * 首字母大写，其他小写
 */
var arr = ['hello', 'worlD', 'TEMP']
var rarr = arr.map(String).map(function (t){
	return t[0].toUpperCase() + t.substring(1).toLowerCase()
})
debug(rarr)


/**
 * 测试判断素数
 */
var arr = [];
for (var x = 1; x < 100; x ++){
	arr.push(x)
}
function get_primes(arr){
	var primes = arr.filter(function(x){
		if (x < 2) {return false}
		else {
			var k = Math.sqrt(x)
			for (var i = 2; i <= k; i ++){ if (x % i == 0) {break} }
			return i > k
		}
	})
	return primes
}
debug(get_primes(arr))

/**
 * sort 排序，可以接收一个函数
 */
var com = ['google', 'Apple', 'Microsoft']
debug(com.map(function (x){
	return x.toLowerCase()
}).sort())

var nums = [1, 4,  6, 2, 9, 3]
debug(nums.sort())
debug(nums.sort(function (x, y){
	if (x < y) { return 1 }
	if (x > y) { return -1 }
	return 0
}))











