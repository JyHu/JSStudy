var x = 1; var y = 2;

true;
false;
2 > 1;
2 >= 3;

var age = 15;
if (age >= 18) {
	debug("adult");
}else{
	debug("teenager");
}

debug(isNaN(NaN));

var m = Math.abs(1 / 3 - (1 - 2 / 3)) < 0.000000001
debug(m)

var arr = new Array(1, 2, 3);
debug(arr[2]);

var arr2 = [1, 2, 3, 'hello', null, true]
for (var i = arr2.length - 1; i >= 0; i--) {
	debug(arr2[i]);
};

var person = {
	name : "Bob",
	age : 20,
	tags : ['js', 'web', 'mobile'],
	city : 'beijing',
	zipcode : null
}

debug(person.name);
debug(person.zipcode);

var x = 10
x = x + 3

debug(x)



debug(`
	这是一个
	多行
	字符串
	`)

var s = 'Hello World'
debug(s.length)
for (var i = 0; i < s.length; i++) {
	debug(s[i])
};
s[4] = 'gb'
debug(s)

debug(s.toUpperCase())
debug(s.toLowerCase())
debug(s.indexOf('World'))
debug(s.indexOf('wor'))
debug(s.substring(7))
debug(s.substring(0,5))
debug(s.substring(2,5))

var arr = [1, 2, 3]
debug(arr.length)









