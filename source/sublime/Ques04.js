/**
 * 取出数组中的最大值、最小值
 */


var arr = [72, 23,90, 354, 3, 10]

Array.prototype.getMaxNumber = function() {
	var max = this[0]
	this.map(function(value){
		max = Math.max(max, value)
	})
	return max
}

Array.prototype.getMinNumber = function() {
	var min = this[0]
	this.map(function(value){
		min = Math.min(min, value)
	})
	return min
}

Array.prototype.alert = function(){
	this.map(function(value){
		debug('alert : ' + value)
	})
}

debug(arr.getMaxNumber())
debug(arr.getMinNumber())
arr.alert()


/**
 * 按object对象的个数排序
 * 
 */


var arr = [
  {a:1, c:2, d:3, f:5, e:2},
  {a:1},
  {a:1, b:2, c: 3},
  {a:1, b:2}
];

var soarr = arr.sort(function(a, b){
	var n1 = 0
	var n2 = 0
	for (var i in a)
		n1 ++
	for (var j in b)
		n2 ++
	return n1 < n2 ? -1 : 1
})



















