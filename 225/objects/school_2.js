// Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:
//
// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
//
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects

let school = {
  students: [],

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!VALID_YEARS.includes(year)) {
      console.log('Invalid Year');
      return;
    }

    let newStudent = createStudent(name, year)
    this.students.push(newStudent);
  },

  enrollStudent(studentName, courseName, courseCode) {
    let student = this.students.find(student => student.name === studentName);

    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(studentName, courseCode, grade) {
    let student = this.students.find(student => student.name === studentName);
    let course = student.courses.find(course => course.code === courseCode);
    course.grade = grade;
  },

  getReportCard(studentName) {
    let student = this.students.find(student => student.name === studentName);
    student.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade || `In progress`}`);
    });
  },

  courseReport(subject) {
    console.log(`=${subject} Grades=`)
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === subject) {
          if (course.grade) {
            console.log(`${student.name}: ${course.grade}`)
          }
        }
      })
    });
  },
}

// let foo =
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }
//
// let bar =
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }
//
// let qux =
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.addStudent('foo', '3rd');
school.enrollStudent('foo', 'Math', 101);
school.enrollStudent('foo', 'Advanced Math', 102)
school.enrollStudent('foo', 'Physics', 202)
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', 'Math', 101);
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', 'Math', 101);
school.enrollStudent('qux', 'Advanced Math', 102);
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

// school.getReportCard('foo');
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined




function createStudent(name, year) {
  let findCourse = function(courseCode) {
    return courses.findIndex(course => course.code === courseCode);
  }

  return {
    name,

    year,

    courses: [],

    info() {
      console.log(`${name} is a ${year} year student`)
    },

    listCourses() {
      console.log(courses);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, info) {
      let courseIndex = findCourse(courseCode);
      if (this.courses[courseIndex].hasOwnProperty('notes')) {
        this.courses[courseIndex].notes += `; ${info}`;
      } else {
        this.courses[courseIndex].notes = info;
      }
    },

    updateNote(courseCode, info) {
      let courseIndex = findCourse(courseCode);
      this.courses[courseIndex].notes = info;
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('notes')) {
          console.log(`${course.name}: ${course.notes}`);
        }
      });
    },
  }
}
