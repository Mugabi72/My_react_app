

// Import the readline module to enable interactive command-line user input
const readline = require('readline');

// Create an interface for reading input from stdout/stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to prompt questions as Promises for easier async handling
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}


//REQUIREMENT 1: FUNCTIONS (At least 3)
function calculateGrade(mark) {
  
  // REQUIREMENT 2: CONDITIONS (if, else if, else)
  
  if (mark >= 80) {
    return { grade: 'A', remark: 'First Class - Excellent' };
  } else if (mark >= 70) {
    return { grade: 'B', remark: 'Second Class Upper - Very Good' };
  } else if (mark >= 60) {
    return { grade: 'C', remark: 'Second Class Lower - Good' };
  } else if (mark >= 50) {
    return { grade: 'D', remark: 'Pass' };
  } else {
    return { grade: 'F', remark: 'Fail' };
  }
}

/**

 * @param {Array} studentList - Array of student objects
 * @returns {object} Calculated statistics (average mark, total students)
 */
function calculateClassStatistics(studentList) {
  if (studentList.length === 0) {
    return { average: 0, total: 0 };
  }

  let totalMarks = 0;

  // Iterate over each record to sum up marks
  for (let i = 0; i < studentList.length; i++) {
    totalMarks += studentList[i].mark;
  }

  const averageMark = totalMarks / studentList.length;

  return {
    average: averageMark.toFixed(2),
    total: studentList.length
  };
}

/**
 * @param {Array} studentList - Array of processed student records
 */
function displayReport(studentList) {
  
  // REQUIREMENT 5: MEANINGFUL OUTPUT
  
  console.log("\n=");
  console.log("            CLASS FINAL GRADING REPORT                 ");
  console.log("=");
  console.log("Name\t\tMark\tGrade\tRemark");
  console.log("-");

  // Loop through student records to display each formatted row
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    console.log(`${student.name}\t\t${student.mark}\t${student.grade}\t${student.remark}`);
  }

  console.log("-");

  // Get overall class statistics using Function 2
  const stats = calculateClassStatistics(studentList);
  console.log(`Total Students Processed : ${stats.total}`);
  console.log(`Class Average Mark       : ${stats.average}%`);
  console.log("=\n");
}

// REQUIREMENT 4: USER INTERACTION & MAIN LOOP


/**
 * Main function managing user interaction and application flow.
 */
async function main() {
  console.log("=");
  console.log("  WELCOME TO THE STUDENT GRADING SYSTEM (NODE.JS CLI)  ");
  console.log("=\n");

  const students = [];

  // Prompt user for total number of students
  let countInput = await askQuestion("Enter the total number of students to grade: ");
  let totalStudents = parseInt(countInput);

  // Validate number of students input using conditions
  while (isNaN(totalStudents) || totalStudents <= 0) {
    console.log("Please enter a valid positive number.");
    countInput = await askQuestion("Enter the total number of students to grade: ");
    totalStudents = parseInt(countInput);
  }

  
  // REQUIREMENT 3: LOOPS (for / while)
  
  // Loop to collect input for each student dynamically
  for (let i = 1; i <= totalStudents; i++) {
    console.log(`\n--- Entering details for Student ${i} of ${totalStudents} ---`);
    
    const name = await askQuestion(`Enter name for Student ${i}: `);

    let markInput = await askQuestion(`Enter mark (0-100) for ${name}: `);
    let mark = parseFloat(markInput);

    // Input validation loop for student marks
    while (isNaN(mark) || mark < 0 || mark > 100) {
      console.log("Invalid mark! Please enter a number between 0 and 100.");
      markInput = await askQuestion(`Enter mark (0-100) for ${name}: `);
      mark = parseFloat(markInput);
    }

    // Call Function 1 to get grade and remark
    const result = calculateGrade(mark);

    // Push student details to array
    students.push({
      name: name,
      mark: mark,
      grade: result.grade,
      remark: result.remark
    });
  }

  // Call Function 3 to display the complete report
  displayReport(students);

  // Close readline interface
  rl.close();
}

// Execute the application
main();
