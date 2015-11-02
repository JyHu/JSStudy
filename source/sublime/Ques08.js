/**
 * 判断回文
 */


String.prototype.isReverseString = function() {
	for (var i = 0; i <= Math.floor(this.length / 2); i++)
		if (this[i] !== this[this.length - 1 - i]) return false
	return true
};


debug('asadasa'.isReverseString())