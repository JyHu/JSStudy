
/**
 * 计算字符串中字母出现的次数，并输出最多的
 */

String.prototype.charCountMap = function (){
	var countMap = new Map()
	for (var x of this)
		countMap.set(x, (countMap.get(x) || 0) + 1)
	return countMap
}

var testStr = 'hasjdhfkjlahskdllllawuoausdjglasdkjaknxmnkfajklfjlkasjdlkfandlkfajlkdjfa'
var countMap = testStr.charCountMap()

var maxChars = []
for (var m of countMap) {
	if (m[1] > (countMap.get(maxChars[0]) || 0))
		maxChars = [m[0]]
	else if (m[1] == (countMap.get(maxChars[0]) || 0))
		maxChars.push(m[0])
}

for (var r of maxChars){
	debug('result is ' + r + ' , count is ' + countMap.get(r))
}