//=====Task1=====

var numbers = [-3,-2,-1,0,1,2,3];
sum_of_positive = 0;
for (number of numbers){
    if (number < 0 )
    {
        continue;
    }else {
        sum_of_positive +=number;
    }

}
total = 0 ;
for (num of numbers){
    total+= num;
}

console.log(sum_of_positive);
console.log(total);

numbers.push(4);
numbers.shift();
console.log(numbers)

// =====Task2=====

var students = {
    name : "abdelrahman",
    age : 20 ,
    grade : "very good",
    isgraduated : false
}
console.log(students.name);
console.log(students.age);
students.grade= "good";

console.log(Object.keys(students));
console.log(Object.values(students));

students.email = "abdelrahmank1a@gmail.com";
delete students.isgraduated;
console.log(students)

// =====Task3=====

var Students = [
    {name : "abdelrahman ", age : 20, grade :"good ", isgraduated : false },
    {name : "ahmed ", age : 24, grade :" very good ", isgraduated : true },
    {name : "khaled ", age : 20, grade :"good ", isgraduated : false },
    {name : "mohammed ", age : 25, grade :"D ", isgraduated : true}
] 
total_age = 0 ;
for (var i =0 ; i < Students.length ; i++){
    total_age += Students[i].age;
}
average_age = total_age / Students.length;
var graduatedcounter = 0 ;
for (var i =0 ; i < Students.length ; i++){
    if (Students.isgraduated == true)
    graduatedcounter++;
}

var notgraduated = Students.length - graduatedcounter;

for ( var student of Students){
    console.log(Object.keys(student));
}
for ( var student of Students){
    console.log(Object.values(student));
}
var newStudent = {name : "ALi ", age : 28, grade :"A ", isgraduated : true };
Students.push(newStudent);
newStudent.email="amdelrahmank12a@gmail.com"

for (var student of Students){
    delete student.isgraduated;
}
console.log(Students);
console.log("students names :",Students.map(student => student.name))
console.log("the average age is : ",average_age);
console.log("number of graduated students: ",graduatedcounter);
console.log("number of non-graduated students: ",notgraduated);