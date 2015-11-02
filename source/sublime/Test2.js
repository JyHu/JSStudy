var names = ['Michael', 'Bob', 'Tracy']
var scores = [95, 75, 85]

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])
debug(m.get('Michael'))
debug(m)

var m = new Map()
m.set('Adam', 67)
m.set('Bob', 59)
debug(m.has('Adam'))
debug(m.get('Adam'))
debug(m.delete('Adam'))
debug(m.get('Adam'))

var s1 = new Set([1, 2, 3, 3, '3'])
debug(s1.count)
for (var x of s1){
	debug(x)
}
for (var x of m){
	debug(x[0] + ' = ' + x[1])
}
var a = ['a', 'b', 'c']

function abs(x){
	if (x >= 0){
		return x;
	}else {
		return -x;
	}
}
debug(abs(-1))


var abs = function (x) {
	// if (typeof x !== 'number'){
	// 	throw 'Not a number'
	// }
	if (x >= 0){
		return x;
	}else {
		return -x;
	}
}
debug(abs(-100, 'asdfadf '))
debug(abs())
debug('a')

function foo(x){
	debug(x)
	for (var i = 0; i < arguments.length; i ++){
		debug('for ' + arguments[i])
	}
	for (var x of arguments){
		debug('for of ' + x)
	}
}
foo(100, 101, 103, 200)

function abs (){
	if (arguments.length === 0){
		return 0
	}
	var x = arguments[0]
	return x > 0 ? x : -x
}

debug(abs(0))
debug(abs(1))
debug(abs(-2))

/**
 * SE6支持
 */
// function sum(...rest){
// 	debug('Avaliable')
// }

// function fuu (a, b, ...rest) {	
// 	debug('a ' + a)
// 	debug('b ' + b)
// 	debug(rest)
// }
// fuu(1, 2, 3, 4, 6)
































