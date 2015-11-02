function Student(props){
	this.name = props.name || 'Unnamed'
}
Student.prototype.hello = function () {
	debug('Hello , ' + this .name + '!')
}

function PrimaryStudent(props) {
	Student.call(this, props)
	this.grade = props.grade || 1
}

// function F() {}
// F.prototype = Student.prototype
// PrimaryStudent.prototype = new F()
// PrimaryStudent.prototype.constructor = PrimaryStudent
// PrimaryStudent.prototype.getGrade = function () {
// 	return this.grade
// }

function inherits(Child, Parent){
	var F = function () {}
	F.prototype = Parent.prototype
	Child.prototype = new F()
	Child.prototype.constructor = Child
}
inherits(PrimaryStudent, Student)


var xiaoming = new PrimaryStudent({name : 'xiaoming'})
xiaoming.hello()
debug(xiaoming.name)
debug(xiaoming.grade)
debug(xiaoming.__proto__ === PrimaryStudent.prototype)
debug(xiaoming.__proto__.__proto__ === Student.prototype)
debug(xiaoming instanceof PrimaryStudent)
debug(xiaoming instanceof Student)