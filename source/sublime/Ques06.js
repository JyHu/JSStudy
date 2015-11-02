
/**
 * var a = (5).plus(3).minus(6)   // 2
 */


Number.prototype.plus = function(num) {
	return this + num
};
Number.prototype.minus = function(num) {
	return this - num
};
Number.prototype.multi = function(num) {
	return this * num
}

debug((5).plus(3).minus(6))
debug((5).multi((3).plus(2)))
debug(6..multi(2..plus(2)))

/**
 * var a = add(2)(3)(5)
 */

function add(x) {
	return function(y) {
		return function(z) {
			return x + y + z
		}
	}
}

debug(add(2) + '\n\n')
debug(add(2)(3) + '\n\n')
debug(add(2)(3)(5) + '\n\n')