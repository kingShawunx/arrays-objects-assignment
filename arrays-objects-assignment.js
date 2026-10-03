/* =========================================================
   ARRAYS & OBJECTS ASSIGNMENT
   =========================================================
   This assignment demonstrates:
   1. Creating student objects
   2. Calculating student averages
   3. Filtering passing students
   4. Functions and callbacks
   ========================================================= */


/* =========================================================
   QUESTION 1: CREATE STUDENT OBJECTS
   ========================================================= */

// Create an array containing 5 student objects.
// Each student has an id, name, age, and grades array.

const students = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 20,
        grades: [85, 92, 78]
    },

    {
        id: 2,
        name: "Brian Smith",
        age: 21,
        grades: [72, 68, 75]
    },

    {
        id: 3,
        name: "Chiamaka Okafor",
        age: 19,
        grades: [95, 91, 88]
    },

    {
        id: 4,
        name: "David Williams",
        age: 22,
        grades: [45, 52, 48]
    },

    {
        id: 5,
        name: "Esther Brown",
        age: 20,
        grades: [60, 65, 58]
    }
];


// Display the original students array
console.log("QUESTION 1 — STUDENTS");
console.log(students);


/* =========================================================
   QUESTION 2: CALCULATE AVERAGES
   ========================================================= */

// This function calculates the average of a student's grades.
//
// reduce() adds all the grades together.
// The total is divided by the number of grades.
// Math.round() is used to round the result to 2 decimal places.

function calculateAverage(grades) {

    const total = grades.reduce(function(sum, grade) {
        return sum + grade;
    }, 0);

    const average = total / grades.length;

    return Math.round(average * 100) / 100;
}


// Test the calculateAverage function
console.log("QUESTION 2 — TEST AVERAGE");
console.log(calculateAverage([85, 92, 78]));


// Use map() to create a new array.
// The spread operator (...) copies the original student object.
// This means we do NOT modify the original students array.

const studentsWithAverage = students.map(function(student) {

    return {
        ...student,
        average: calculateAverage(student.grades)
    };

});


// Display students with their averages
console.log("QUESTION 2 — STUDENTS WITH AVERAGES");
console.log(studentsWithAverage);


/* =========================================================
   QUESTION 3: FILTER PASSING STUDENTS
   ========================================================= */

// This function uses filter() to return only students
// whose average is 60 or higher.

function getPassingStudents(students) {

    return students.filter(function(student) {
        return student.average >= 60;
    });

}


// Get all students who passed
const passing = getPassingStudents(studentsWithAverage);


// Display passing students
console.log("QUESTION 3 — PASSING STUDENTS");
console.log(passing);


/* =========================================================
   QUESTION 4: FUNCTIONS & CALLBACKS
   ========================================================= */

// processStudents accepts:
// 1. A students array
// 2. A callback function
//
// map() applies the callback to every student.

function processStudents(students, callback) {

    return students.map(function(student) {
        return callback(student);
    });

}


/* =========================================================
   CALLBACK 1: ADD LETTER GRADE
   ========================================================= */

// This function creates a copy of the student object
// and adds a letterGrade property.
//
// A = 90 and above
// B = 80 - 89
// C = 70 - 79
// D = 60 - 69
// F = below 60

function addLetterGrade(student) {

    let letterGrade;

    if (student.average >= 90) {

        letterGrade = "A";

    } else if (student.average >= 80) {

        letterGrade = "B";

    } else if (student.average >= 70) {

        letterGrade = "C";

    } else if (student.average >= 60) {

        letterGrade = "D";

    } else {

        letterGrade = "F";

    }

    // Return a new object instead of modifying the original
    return {
        ...student,
        letterGrade: letterGrade
    };
}


/* =========================================================
   CALLBACK 2: ADD STATUS
   ========================================================= */

// This function creates a copy of the student object
// and adds a Pass or Fail status.

function addStatus(student) {

    const status = student.average >= 60
        ? "Pass"
        : "Fail";

    // Return a new object instead of modifying the original
    return {
        ...student,
        status: status
    };
}


/* =========================================================
   TEST processStudents WITH addLetterGrade
   ========================================================= */

// Pass addLetterGrade as the callback
const studentsWithGrades = processStudents(
    studentsWithAverage,
    addLetterGrade
);


// Display students with their letter grades
console.log("QUESTION 4 — STUDENTS WITH LETTER GRADES");
console.log(studentsWithGrades);


/* =========================================================
   TEST processStudents WITH addStatus
   ========================================================= */

// Pass addStatus as the callback
const studentsWithStatus = processStudents(
    studentsWithAverage,
    addStatus
);


// Display students with their Pass/Fail status
console.log("QUESTION 4 — STUDENTS WITH STATUS");
console.log(studentsWithStatus);


/* =========================================================
   FINAL TESTS
   ========================================================= */

// Test that the original students have NOT been modified
console.log("FINAL TEST — ORIGINAL STUDENTS");
console.log(students);


// Test calculateAverage with another set of grades
console.log("FINAL TEST — CALCULATE AVERAGE");
console.log("Average of [80, 90, 70]:", calculateAverage([80, 90, 70]));


// Test passing students
console.log("FINAL TEST — PASSING STUDENTS COUNT");
console.log("Number of passing students:", passing.length);


// Test letter grades
console.log("FINAL TEST — LETTER GRADES");

studentsWithGrades.forEach(function(student) {
    console.log(
        student.name +
        " | Average: " +
        student.average +
        " | Grade: " +
        student.letterGrade
    );
});


// Test student status
console.log("FINAL TEST — STUDENT STATUS");

studentsWithStatus.forEach(function(student) {
    console.log(
        student.name +
        " | Average: " +
        student.average +
        " | Status: " +
        student.status
    );
});


