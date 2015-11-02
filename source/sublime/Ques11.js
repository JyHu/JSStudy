

/**
 *	写程序找出给定字符串的最长回文子串，尽可能高效的实现。
 *
 * 	写程序在1,2,…,9（保持这个顺序）之间可任意放+或-或都不放使其结果等于100，输出所有可能的放法。例如：1 + 2 + 3 – 4 + 5 + 6 + 78 + 9 = 100。
 *
 * 	给定两个字符串，写程序高效的找出最长的公共子串。
 */


String.prototype.isReverseString = function() {
	for (var i = 0; i <= this.length / 2; i ++)
		if (this[i] !== this[this.length - 1 - i]) return false
	return true
};

String.prototype.roundString = function() {
	var rstr = ''
	var dstr = this
	for (var i = 0; i < this.length, dstr.length > rstr.length; i ++) {

	}
};
















