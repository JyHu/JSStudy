// function Student(name){
// 	this.name = name
// 	this.hello = function(){
// 		debug('hello, ' + this.name)
// 	}
// }

// var xiaoming = new Student('小明')
// debug(xiaoming.name)
// xiaoming.hello()
// debug('sn ' + Student.name)
// // xiaoming ---> Student.prototype ---> Object.prototype ---> null
// debug(xiaoming.constructor === Student.prototype.constructor)
// debug(Student.prototype.constructor === Student)
// debug(Object.getPrototypeOf(xiaoming) === Student.prototype)
// debug(xiaoming instanceof Student)
// var xiaohong = new Student('小红')
// xiaohong.hello()




function Student(props){
	this.name = props.name || '匿名'
	this.grade = props.grade || 1
}
Student.prototype.hello = function(){
	debug('hello, ' + this.name)
}
function createStudent(props){
	return new Student(props || {name : 'Default', grade : 2})
}

// var xiaoming = createStudent({
// 	name : '小明'
// })

var xiaoming = createStudent({
	name : '小明',
	grade : 3
})
// var xiaoming = createStudent()
xiaoming.hello()
debug(xiaoming.grade)

var xiaohong = createStudent({name : '小红'})
xiaohong.hello()







