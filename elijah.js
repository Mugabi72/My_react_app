
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function calculateGrade(mark) {
  
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

function calculateClassStatistics(studentList) {
  if (studentList.length === 0) {
    return { average: 0, total: 0 };
  }

  let totalMarks = 0;

  for (let i = 0; i < studentList.length; i++) {
    totalMarks += studentList[i].mark;
  }

  const averageMark = totalMarks / studentList.length;

  return {
    average: averageMark.toFixed(2),
    total: studentList.length
  };
}

 */
function displayReport(studentList) {
  
  console.log("\n=");
  console.log("            CLASS FINAL GRADING REPORT                 ");
  console.log("=");
  console.log("Name\t\tMark\tGrade\tRemark");
  console.log("-");

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    console.log(`${student.name}\t\t${student.mark}\t${student.grade}\t${student.remark}`);
  }

  console.log("-");

  const stats = calculateClassStatistics(studentList);
  console.log(`Total Students Processed : ${stats.total}`);
  console.log(`Class Average Mark       : ${stats.average}%`);
  console.log("=\n");
}

 */
async function main() {
  console.log("=");
  console.log("  WELCOME TO THE STUDENT GRADING SYSTEM (NODE.JS CLI)  ");
  console.log("=\n");

  const students = [];

  let countInput = await askQuestion("Enter the total number of students to grade: ");
  let totalStudents = parseInt(countInput);

 {
    console.log("Please enter a valid positive number.");
    countInput = await askQuestion("Enter the total number of students to grade: ");
    totalStudents = parseInt(countInput);
  }

  for (let i = 1; i <= totalStudents; i++) {
    console.log(`\n--- Entering details for Student ${i} of ${totalStudents} ---`);
    
    const name = await askQuestion(`Enter name for Student ${i}: `);

    let markInput = await askQuestion(`Enter mark (0-100) for ${name}: `);
    let mark = parseFloat(markInput);

    while (isNaN(mark) || mark < 0 || mark > 100) {
      console.log("Invalid mark! Please enter a number between 0 and 100.");
      markInput = await askQuestion(`Enter mark (0-100) for ${name}: `);
      mark = parseFloat(markInput);
    }

    const result = calculateGrade(mark);

    
    students.push({
      name: name,
      mark: mark,
      grade: result.grade,
      remark: result.remark
    });
  }
  displayReport(students);
  rl.close();
}

main();
