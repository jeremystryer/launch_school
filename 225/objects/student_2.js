// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

function createStudent(name, year) {
  let findCourse = function(courseCode) {
    return courses.findIndex(course => course.code === courseCode);
  }

  return {
    courses: [],
    
    info() {
      console.log(`${name} is a ${year} year student`)
    },

    listCourses() {
      console.log(courses);
    },

    addCourse(course) {
      courses.push(course);
    },

    addNote(courseCode, info) {
      let courseIndex = findCourse(courseCode);
      if (courses[courseIndex].hasOwnProperty('notes')) {
        courses[courseIndex].notes += `; ${info}`;
      } else {
        courses[courseIndex].notes = info;
      }
    },

    updateNote(courseCode, info) {
      let courseIndex = findCourse(courseCode);
      courses[courseIndex].notes = info;
    },

    viewNotes() {
      courses.forEach(course => {
        if (course.hasOwnProperty('notes')) {
          console.log(`${course.name}: ${course.notes}`);
        }
      });
    },
  }
}

foo = createStudent('Foo', '1st');
foo.info();
console.log('------------');
// Foo is a 1st year student
foo.listCourses();
console.log('------------');
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
console.log('------------')
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
console.log('------------');
// // Math: Fun Course; Remember to study for algebra
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// // Math: Fun Course; Remember to study for algebra
// // Advanced Math: Difficult Subject
foo.updateNote(101, 'Fun course');
console.log('------------');
foo.viewNotes();
// Math: Fun Course
// Advanced Math: Difficult Subject
