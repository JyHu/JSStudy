debug(typeof 123)
debug(typeof true == 'number')



var b  = Boolean('false')
debug(b)

debug(parseInt('124'))
debug(Array.isArray([1]))


debug((123).toString())
debug(123..toString())




var now = new Date()
debug(now)
debug(now.getFullYear())
debug(now.getMonth())
debug(now.getDay())
debug(now.getDate())
debug(now.getTime())

var d = new Date(2015, 9, 26, 17, 16, 09, 12)
debug(d)
var d = Date.parse('2015-10-26')
var d = new Date(1445851095691)
debug(d.toLocaleString())
debug(d.toUTCString())