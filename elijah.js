
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
 
function displayReport(studentList) {while (isNaN(totalStudents) || totalStudents <= 0) {
  console.log("Please enter a valid positive number.");
  countInput = await askQuestion("Enter the total number of students to grade: ");
  totalStudents = parseInt(countInput);
}  

# Notes on Your Student Grading System (Node.js CLI)

## 1. What the program does
It asks for the number of students, then each student's name and mark (0-100). It assigns a grade and remark, stores the results, and prints a report with the class average.

## 2. Key concepts used

| Concept | Where | Purpose |
|---|---|---|
| `readline` module | top | Reads keyboard input in the terminal |
| Promise wrapper (`askQuestion`) | top | Lets you use `await` instead of callbacks |
| `async/await` | `main()` | Waits for user input before moving on |
| Functions | `calculateGrade`, `calculateClassStatistics`, `displayReport` | Each does one job (modularity) |
| `if / else if` chain | `calculateGrade` | Maps a mark to a grade |
| `for` loop | main, stats, report | Repeats per student |
| `while` loop | validation | Re-asks until input is valid |
| Array of objects | `students` | Stores `{name, mark, grade, remark}` per student |
| `parseInt` / `parseFloat` | input | Converts text to numbers |
| `isNaN()` | validation | Checks that input is actually a number |
| `toFixed(2)` | statistics | Rounds the average to 2 decimal places (returns a string) |
| Template literals | report | `${value}` inserts variables into text |

## 3. Grading scale

| Mark | Grade | Remark |
|---|---|---|
| 80-100 | A | First Class |
| 70-79 | B | Second Class Upper |
| 60-69 | C | Second Class Lower |
| 50-59 | D | Pass |
| 0-49 | F | Fail |

## 4. Errors in the code you pasted

1. **Stray `*/`** before `displayReport` and `main`. These are leftovers of deleted comments and cause a syntax error.
2. **Broken validation in `main()`**: the line `while (isNaN(totalStudents) || totalStudents <= 0)` is missing, leaving a loose `{ ... }` block.
3. **Duplicate `function displayReport(...) {while...` at the bottom**. This is invalid, and `await` can't be used outside an `async` function. Delete it.
4. **Truncated separators**: `console.log("\n=")` should be a full line like `"=".repeat(55)`.
5. **Calling `main()` before cleanup** is fine, but nothing should come after it.

## 5. Corrected code

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function calculateGrade(mark) {
  if (mark >= 80) return { grade: 'A', remark: 'First Class - Excellent' };
  else if (mark >= 70) return { grade: 'B', remark: 'Second Class Upper - Very Good' };
  else if (mark >= 60) return { grade: 'C', remark: 'Second Class Lower - Good' };
  else if (mark >= 50) return { grade: 'D', remark: 'Pass' };
  else return { grade: 'F', remark: 'Fail' };
}

function calculateClassStatistics(studentList) {
  if (studentList.length === 0) {
    return { average: "0.00", total: 0 };
  }
  let totalMarks = 0;
  for (let i = 0; i < studentList.length; i++) {
    totalMarks += studentList[i].mark;
  }
  return {
    average: (totalMarks / studentList.length).toFixed(2),
    total: studentList.length
  };
}

function displayReport(studentList) {
  const line = "=".repeat(60);
  console.log("\n" + line);
  console.log("            CLASS FINAL GRADING REPORT");
  console.log(line);
  console.log("Name\t\tMark\tGrade\tRemark");
  console.log("-".repeat(60));

  for (let i = 0; i < studentList.length; i++) {
    const s = studentList[i];
    console.log(`${s.name}\t\t${s.mark}\t${s.grade}\t${s.remark}`);
  }

  console.log("-".repeat(60));
  const stats = calculateClassStatistics(studentList);
  console.log(`Total Students Processed : ${stats.total}`);
  console.log(`Class Average Mark       : ${stats.average}%`);
  console.log(line + "\n");
}

async function main() {
  console.log("=".repeat(60));
  console.log("  WELCOME TO THE STUDENT GRADING SYSTEM (NODE.JS CLI)");
  console.log("=".repeat(60) + "\n");

  const students = [];

  let countInput = await askQuestion("Enter the total number of students to grade: ");
  let totalStudents = parseInt(countInput);

  while (isNaN(totalStudents) || totalStudents <= 0) {
    console.log("Please enter a valid positive number.");
    countInput = await askQuestion("Enter the total number of students to grade: ");
    totalStudents = parseInt(countInput);
  }

  for (let i = 1; i <= totalStudents; i++) {
    console.log(`\n--- Student ${i} of ${totalStudents} ---`);
    const name = await askQuestion(`Enter name for Student ${i}: `);

    let mark = parseFloat(await askQuestion(`Enter mark (0-100) for ${name}: `));
    while (isNaN(mark) || mark < 0 || mark > 100) {
      console.log("Invalid mark! Please enter a number between 0 and 100.");
      mark = parseFloat(await askQuestion(`Enter mark (0-100) for ${name}: `));
    }

    const result = calculateGrade(mark);
    students.push({ name, mark, grade: result.grade, remark: result.remark });
  }

  displayReport(students);
  rl.close();
}

main();
```

## 6. Program flow
1. Start → welcome banner
2. Ask for number of students → validate (`while`)
3. Loop per student → ask name → ask mark → validate → `calculateGrade()` → push to array
4. `displayReport()` → calls `calculateClassStatistics()`
5. Close `readline` → end

## 7. Good points to mention in an exam or report
- **Modularity**: each function has one responsibility.
- **Input validation**: prevents crashes from bad data.
- **Separation of concerns**: logic (grading) is separate from display (report).
- **Possible improvements**: save results to a file with `fs`, add highest/lowest mark, count passes and fails, or sort students by mark.

Want these notes as a Word document, or a short exam-style Q&A on this program?                                     
