var xiaoming = {
	name : '小明',
	age : 14,
	gender : true,
	height : 1.65,
	grade : null,
	'middle-school' : '\"W3C\" Middle School',
	skills : ['JS', "JAVA", 'Python', 'Lisp']
}
var v = JSON.stringify(xiaoming)
debug(v)
var v = JSON.stringify(xiaoming, ['name', 'skills'], '    ')
debug(v)

function convert(key, value) {
	if (typeof value === 'string'){
		return value.toUpperCase()
	}
	return value
}
var v = JSON.stringify(xiaoming, convert, '    ')
debug(v)

var j = JSON.parse(v)
var j = JSON.parse(v, function(key, value){
	if (key === 'name'){
		return value + '同学'
	}
	return value
})
debug(j.name)






















