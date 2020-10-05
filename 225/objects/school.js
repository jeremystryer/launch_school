// import { createStudent } from './student.js'

/*
Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
foo;
{
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

bar;
{
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

qux;
{
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}
*/

// addStudent: Adds a student by creating a new student and adding the student to a collection of students.
// The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
// Returns a student object if year is valid otherwise it logs "Invalid Year".

function createSchool() {
  function createStudent(name, year) {
    return {
      name,

      year,

      courses: [],

      info() {
        console.log(`${this.name} is a ${this.year} year student`);
      },

      listCourses() {
        return this.courses;
      },

      addCourse(newCourse) {
        this.courses.push(newCourse);
      },

      addNote(courseCode, note) {
        let courseIndex = this.courses.findIndex(course => {
          return course.code === courseCode;
        });

        if (courseIndex !== -1 && this.courses[courseIndex].note) {
          this.courses[courseIndex].note += `; ${note}`;
        } else {
          this.courses[courseIndex].note = note;
        }
      },

      viewNotes() {
        this.courses.forEach(course => {
          if (course.note) {
            console.log(`${course.name}: ${course.note}`);
          }
        });
      },

      updateNote(courseCode, newNote) {
        let courseIndex = this.courses.findIndex(course => {
          return course.code === courseCode;
        });

        if (courseIndex !== -1) {
          this.courses[courseIndex].note = newNote;
        }
      }
    };
  }

  return {
    students: [],

    courses: [],

    // createCourse(courseName, courseCode) {
    //   let course = {courseName, courseCode}
    //   this.courses.push(course)
    // }

    addStudent(studentInfo) {
      const ALLOWABLE_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

      if (!ALLOWABLE_YEARS.includes(studentInfo.year)) {
        return 'Invalid Year';
      }

      let student = createStudent(studentInfo.name, studentInfo.year);
      // student.courses.push(studentInfo.courses);
      this.students.push(student);
      return student;
    },

    enrollStudent(studentName, courseCode) {
      // courses = [ { 101: ['foo', 'bar', 'baz'] }, { 201: [bar', 'baz'] }]
      // this.courses.forEach(function ())
    },

    addGrade() {

    },

    getReportCard() {

    },

    courseReport() {

    },
  }
}

let foo = {
            name: 'foo',
            year: '3rd',
            courses: [
              { name: 'Math', code: 101, grade: 95, },
              { name: 'Advanced Math', code: 102, grade: 90, },
              { name: 'Physics', code: 202, }
            ],
          }

let bar =  {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

let school = createSchool();
console.log(school.addStudent(foo));
// console.log(school.addStudent(bar));
// console.log(school.addStudent(qux));

school.enrollStudent(foo, 101);
