var re1 = /ABC\-001/
var re2 = new RegExp('ABC\\-001')

var re = /^\d{3}\-\d{3,8}$/
var t = re.test('010-123456')
debug(t)

debug('a b    c'.split(/\s+/))
debug('a,b,   c d    e'.split(/[\s\,]+/))

/**
 * g 标识，每次执行都活更新lastIndex属性，表示上次匹配到的最后索引
 * i 标识，表示忽略大小写
 * m 标识，表示执行多行匹配
 */
var re = /^(\d{3})\-(\d{3,8})$/g
debug(re.exec('010-1234567'))
debug(re.lastIndex)