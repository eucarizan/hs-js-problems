let school = {
  name: 'ABC High School',
  students: [
    {
      name: 'John',
      age: 20,
      courses: ['Math', 'Physics']
    },
    {
      name: 'Jane',
      age: 19,
      courses: ['English', 'Chemistry']
    }
  ]
}
console.log(school.name); console.log(school.students[0].name); console.log(school.students[0].courses[0]);
//console.log(school.name[0]); console.log(students[0].school.name); console.log(courses.students[0].courses.name);
console.log(school['name']); console.log(school['students'][0]['name']); console.log(school['students'][0]['courses'][0]);
//console.log(school.students.name); console.log(school.name.students[0]); console.log(school.courses[0].students)
//console.log(name.school); console.log(name.students[0]); console.log(courses[0].students[0]);

