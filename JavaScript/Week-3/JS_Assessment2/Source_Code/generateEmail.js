// Dataset: Array of student progress records
var students = [
  {
    SId: 101,
    name: "Alice",
    class: 7,
    marks: { english: 35, math: 90, physics: 98, biology: 88 },
    attendance: 95,
  },
  {
    SId: 106,
    name: "Bob",
    class: 7,
    marks: { english: 92, math: 98, physics: 90, biology: 95 },
    attendance: 91,
  },
  {
    SId: 110,
    name: "Charlie",
    class: 7,
    marks: { english: 55, math: 50, physics: 58, biology: 52 },
    attendance: 87,
  },
  {
    SId: 104,
    name: "David",
    class: 7,
    marks: { english: 95, math: 99, physics: 98, biology: 95 },
    attendance: 80,
  },
  {
    SId: 103,
    name: "Eve",
    class: 7,
    marks: { english: 85, math: 90, physics: 83, biology: 87 },
    attendance: 86,
  },
  {
    SId: 107,
    name: "Frank",
    class: 7,
    marks: { english: 75, math: 80, physics: 78, biology: 92 },
    attendance: 88,
  },
  {
    SId: 102,
    name: "Grace",
    class: 7,
    marks: { english: 88, math: 70, physics: 85, biology: 92 },
    attendance: 90,
  },
  {
    SId: 105,
    name: "Henry",
    class: 7,
    marks: { english: 92, math: 90, physics: 93, biology: 97 },
    attendance: 95,
  },
  {
    SId: 113,
    name: "Ivy",
    class: 7,
    marks: { english: 95, math: 100, physics: 98, biology: 92 },
    attendance: 98,
  },
  {
    SId: 112,
    name: "Jack",
    class: 7,
    marks: { english: 87, math: 90, physics: 88, biology: 82 },
    attendance: 89,
  },
  {
    SId: 116,
    name: "Kelly",
    class: 7,
    marks: { english: 85, math: 80, physics: 78, biology: 72 },
    attendance: 85,
  },
  {
    SId: 108,
    name: "Liam",
    class: 7,
    marks: { english: 85, math: 70, physics: 68, biology: 62 },
    attendance: 80,
  },
  {
    SId: 109,
    name: "Mia",
    class: 7,
    marks: { english: 75, math: 80, physics: 58, biology: 52 },
    attendance: 78,
  },
  {
    SId: 111,
    name: "Nathan",
    class: 7,
    marks: { english: 45, math: 50, physics: 48, biology: 72 },
    attendance: 82,
  },
  {
    SId: 114,
    name: "Olivia",
    class: 7,
    marks: { english: 35, math: 40, physics: 38, biology: 82 },
    attendance: 75,
  },
  {
    SId: 118,
    name: "Peter",
    class: 7,
    marks: { english: 95, math: 30, physics: 98, biology: 82 },
    attendance: 90,
  },
  {
    SId: 115,
    name: "Queen",
    class: 7,
    marks: { english: 85, math: 20, physics: 18, biology: 12 },
    attendance: 70,
  },
  {
    SId: 120,
    name: "Robert",
    class: 7,
    marks: { english: 90, math: 90, physics: 88, biology: 72 },
    attendance: 85,
  },
  {
    SId: 117,
    name: "Sarah",
    class: 7,
    marks: { english: 95, math: 100, physics: 98, biology: 92 },
    attendance: 98,
  },
  {
    SId: 119,
    name: "Tom",
    class: 7,
    marks: { english: 85, math: 90, physics: 88, biology: 82 },
    attendance: 89,
  },
];

/* 
    ---------------------------------------------------
    Task 1: Batch Analysis
    --------------------------------------------------- 
*/

// 1.1) Function to calculate average attendance
var avgAttendance = function () {
  // Write logic to find average attendance
  var total = 0;
  for (var i = 0; i < students.length; i++) {
    total = total + students[i].attendance;
  }
  var average = total / students.length;
  // return the result value.
  return average;
};

// 1.2) Function to analyze student performance
var analyzeClassPerformance = (students) => {
  // create variables to count the percentages as asked in problem statement.
  var above95 = 0;
  var between80and95 = 0;

  // Write logical code to find every students marks percentage and update above variables as needed.
  for (var i = 0; i < students.length; i++) {
    var percentage = calculatePercentage(students[i].marks);

    if (percentage > 95) {
      above95 = above95 + 1;
    } else if (percentage >= 80 && percentage <= 95) {
      between80and95 = between80and95 + 1;
    }
  }

  // Return the variables as asked in the problem statement.
  return (
    "We have " +
    above95 +
    " student/s scoring above 95% and " +
    between80and95 +
    " student/s scoring between 80-95%."
  );
};

// Function to calculate percentage. Use this function whenever you want to calcuate student marks percentage in any function.
var calculatePercentage = (marks) => {
  // write logical code to calculate percentage for one student and return the value.
  var total = marks.english + marks.math + marks.physics + marks.biology;
  var percentage = (total / 400) * 100;
  return percentage;
};

// 1.3) Function to check pass percentage for the class
var batchPassPercentage = () => {
  // create a variable to count students who passed all subjects.
  var passedStudents = 0;

  // Write logical code to check marks of all subject for every student. If a student cleared all subjects, update the above variable.
  for (var i = 0; i < students.length; i++) {
    var marks = students[i].marks;
    if (
      marks.english >= 40 &&
      marks.math >= 40 &&
      marks.physics >= 40 &&
      marks.biology >= 40
    ) {
      passedStudents = passedStudents + 1;
    }
  }

  // Now find out the percentage of students who passed all subjects and return the value as asked in the problem statement.
  var passPercentage = (passedStudents / students.length) * 100;
  return (
    passPercentage +
    "% Students have passed all subjects and are promoted to the next standard"
  );
};

/* 
    ---------------------------------------------------
    Task 2: Student Analysis
    --------------------------------------------------- 
*/

var studentPassStatus = null; // Initialize variable to store student pass status

// 2.1) Function to create a string with Subject and marks for student
// \n is used to create a new line in the string
// \t is used to create a tab space in the string
// `` is used to create a template string in JS. This will retain the formatting of the string
// `${variableName or function call here}` is used to call the variable or function inside the template string

function studentMarksDetails(student) {
  // create required variables to hold sum of marks, status to check if student passed all subjects or not and
  // to store entire pattern of marks as in the image.
  var totalMarks = 0;
  var passed = true;
  var marksString = "";

  // Write your logic to create a template string of subject name and marks. Add total marks and percentage as well.
  totalMarks =
    student.marks.english +
    student.marks.math +
    student.marks.physics +
    student.marks.biology;
  var percentage = calculatePercentage(student.marks);

  // Update the variable "studentPassStatus" to Fail if student fails in any of the subject.
  if (
    student.marks.english < 40 ||
    student.marks.math < 40 ||
    student.marks.physics < 40 ||
    student.marks.biology < 40
  ) {
    passed = false;
    studentPassStatus = "FAIL";
  } else {
    studentPassStatus = "PASS";
  }

  // Using template string to create the formatted output
  marksString = `\tENGLISH:\t\t\t${student.marks.english}
\tMATH:\t\t\t\t\t${student.marks.math}
\tPHYSICS:\t\t\t${student.marks.physics}
\tBIOLOGY:\t\t\t${student.marks.biology}

\t_______________________________________________

\tTotal:\t\t\t\t${totalMarks}

\t_______________________________________________

\tPercentage:\t\t\t${percentage}%`;

  // Return the template string to display
  return marksString;
}

// 2.2) Function to show the Student's final Status
function finalStatus() {
  // Based on the value of variable "studentPassStatus", display the final status as asked in problem statement.
  if (studentPassStatus === "PASS") {
    // Return the final status
    return "We hereby declare your child has passed all subjects and is promoted to the next standard. Find the detailed report card attached to this email.";
  } else {
    // Return the final status
    return "As your ward failed one/more subject/s, kindly visit the principal's office before 30th May 2025 with your child";
  }
}

// DO NOT UPDATE THE CODE BELOW THIS LINE
var generateEmail = (name, SId) => {
  name = name.toUpperCase();

  //array.find() method returns the value of the first element in the provided array that satisfies the provided condition.
  // If no values satisfy the testing function, undefined is returned.
  var student = students.find(
    (s) => s.SId === SId && s.name.toLowerCase() === name.toLowerCase()
  );

  // if this condition evaluates to false, it means the student is not found in the array
  // so we return a message saying the student is not found and exit the function.
  if (!student) return "Student SID or Name is incorrect";

  // If the above condition is true, we can safely assume that the student is found in the array and execute the rest of the code.
  const batchStats = {
    totalStudents: students.length,
    avgAttendance: avgAttendance(),
    performance: analyzeClassPerformance(students),
    passRate: batchPassPercentage(),
  };

  studentanalysis = {}; // Initialize studentanalysis object
  const resultDetails = studentMarksDetails(student); // Pass object directly
  const status = finalStatus();

  return `
----------------------------------------------------------------------------------------------------
Dear Parents/Guardians of ${name}, 
    The academic year of 2024-25 is officially completed and standard ${student.class} annual examinations scores are now available. 
Find the details of the batch and your child below.
    
    .......................................................
            Batch Performance
    .......................................................
        1. We have ${batchStats.totalStudents} students in this batch. The average attendance of the batch is ${batchStats.avgAttendance}%.
        2. ${batchStats.performance}
        3. ${batchStats.passRate}

    .......................................................
        ${name}'s Scores
    .......................................................

${resultDetails}

${status}
    
    We wish you and your child a great summer break.
    If you have any questions, please feel free to reach out to us.

Best Regards,
Principal,
XYZ School
----------------------------------------------------------------------------------------------------
`;
};

// Example usage
// console.log(generateEmail("Alice", 101));
console.log(generateEmail("Jack", 112));
// console.log(generateEmail("John", 16));
