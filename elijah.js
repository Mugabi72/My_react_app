
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

 Notes on Your Student Grading System (Node.js CLI)

 1. What the program does
It asks for the number of students, then each student's name and mark (0-100). It assigns a grade and remark, stores the results, and prints a report with the class average.

2. Key concepts used

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

 3. Grading scale

| Mark | Grade | Remark |
|---|---|---|
| 80-100 | A | First Class |
| 70-79 | B | Second Class Upper |
| 60-69 | C | Second Class Lower |
| 50-59 | D | Pass |
| 0-49 | F | Fail |

 4. Errors in the code you pasted

1. Stray `*/`** before `displayReport` and `main`. These are leftovers of deleted comments and cause a syntax error.
2. Broken validation in `main()`**: the line `while (isNaN(totalStudents) || totalStudents <= 0)` is missing, leaving a loose `{ ... }` block.
3. Duplicate `function displayReport(...) {while...` at the bottom**. This is invalid, and `await` can't be used outside an `async` function. Delete it.
4. Truncated separators**: `console.log("\n=")` should be a full line like `"=".repeat(55)`.
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

 6. Program flow
1. Start → welcome banner
2. Ask for number of students → validate (`while`)
3. Loop per student → ask name → ask mark → validate → `calculateGrade()` → push to array
4. `displayReport()` → calls `calculateClassStatistics()`
5. Close `readline` → end

 7. Good points to mention in an exam or report
- Modularity**: each function has one responsibility.
- Input validation**: prevents crashes from bad data.
- Separation of concerns**: logic (grading) is separate from display (report).
- Possible improvements**: save results to a file with `fs`, add highest/lowest mark, count passes and fails, or sort students by mark.

Want these notes as a Word document, or a short exam-style Q&A on this program? 


   Notes: Student Grading System (Node.js CLI)

 1. Purpose
A command-line program that takes the number of students, then each student's name and mark (0-100). It assigns a grade and remark to each, then prints a report with the class average.

 2. Grading scale

| Mark | Grade | Remark |
|---|---|---|
| 80-100 | A | First Class, Excellent |
| 70-79 | B | Second Class Upper, Very Good |
| 60-69 | C | Second Class Lower, Good |
| 50-59 | D | Pass |
| 0-49 | F | Fail |

 3. Structure of the program

| Part | Role |
|---|---|
| `readline` + `askQuestion()` | Reads terminal input. The Promise wrapper lets us use `await`. |
| `calculateGrade(mark)` | Uses an `if / else if` chain to return `{grade, remark}`. |
| `calculateClassStatistics(list)` | Loops through the marks, then returns the average (`toFixed(2)`) and the total. |
| `displayReport(list)` | Prints the table of students, then the statistics. |
| `main()` | `async` function that controls the whole flow. |

 4. Key concepts
- Async/await**: pauses until the user types an answer.
- Array of objects**: each student is `{name, mark, grade, remark}`.
- Input validation**: a `while` loop with `isNaN()` repeats the question until the input is valid. The student count must be > 0 and each mark must be 0-100.
- Type conversion**: `parseInt` and `parseFloat` turn text into numbers.
- Template literals**: `${value}` inserts variables into strings.
- Modularity**: each function does one job.

5. Program flow
1. Show the welcome banner.
2. Ask for the number of students and validate it.
3. For each student: ask for the name, ask for the mark and validate it, call `calculateGrade()`, then push the result to the array.
4. Call `displayReport()`, which calls `calculateClassStatistics()`.
5. Close `readline`.

 6. Errors in your pasted code (and fixes)
1. Stray `*/`** before `displayReport` and `main`: leftover comment endings cause a syntax error. Remove them.
2. Missing `while` line in `main()`**: the validation block has lost its `while (isNaN(totalStudents) || totalStudents <= 0)` header. Restore it.
3. Duplicate `displayReport` at the bottom**: it contains `await` outside an `async` function. Delete it.
4. Truncated separators**: `"\n="` should be a full line, e.g. `"=".repeat(60)`.
5. Nothing should come after `main();`.**

 7. Exam points
- Strengths**: modular design, input validation, and separation of logic from display.
- Possible improvements**: save results to a file with `fs`, show the highest and lowest marks, count passes and fails, and sort students by mark.

Want these as a Word document, or a few exam-style questions on this program?

  Here is extra material you can add to your notes, in the same structure.

## 8. How to run the program
1. Install Node.js and check it with `node -v`.
2. Save the code as `grading.js`.
3. In the terminal, run `node grading.js`.

## 9. Sample run
```
Enter the total number of students to grade: 3
Student 1: Mary, mark 85  -> A, First Class - Excellent
Student 2: John, mark 67  -> C, Second Class Lower - Good
Student 3: Paul, mark 42  -> F, Fail

Total Students Processed : 3
Class Average Mark       : 64.67%
```
Average = (85 + 67 + 42) / 3 = 64.67

## 10. Test cases (validation and boundaries)

| Input | Expected result |
|---|---|
| Students = `abc` or `0` or `-2` | "Please enter a valid positive number." and asks again |
| Mark = `105`, `-5` or `xyz` | "Invalid mark!" and asks again |
| Mark = `80` | A (boundary) |
| Mark = `79.9` | B (decimals are allowed because of `parseFloat`) |
| Mark = `50` | D (lowest pass) |
| Mark = `49` | F |

## 11. Function details

| Function | Input | Output | Notes |
|---|---|---|---|
| `askQuestion(query)` | prompt text | Promise with typed answer | Wraps `rl.question` so `await` works |
| `calculateGrade(mark)` | number | `{grade, remark}` | Checks from the highest range down, so each `else if` only runs when the one above failed |
| `calculateClassStatistics(list)` | array | `{average, total}` | Returns 0 for an empty list to avoid dividing by zero |
| `displayReport(list)` | array | prints to console | No return value; only handles display |
| `main()` | none | none | Controls the whole flow |

## 12. Important points to understand
- **Why `async/await`?** `rl.question` is callback-based. Wrapping it in a Promise makes the code read top to bottom instead of nesting callbacks.
- **Why `toFixed(2)` gives a string:** it is fine for printing, but convert it with `Number()` if you need to calculate with it.
- **Why `rl.close()`?** Without it, the program stays open waiting for input.
- **`const` vs `let`:** `const` for values that never change (`students`, `rl`), `let` for ones that do (`totalStudents`, `mark`).
- **Efficiency:** the loops run once per student, so the program is O(n), which is fast for a class.

## 13. Limitations
- Data is lost when the program closes, because nothing is saved.
- Names are not checked, so an empty name is accepted.
- It handles one subject only.
- It is a terminal program with no graphical interface.

## 14. Improvement: highest, lowest, pass and fail counts
Replace `calculateClassStatistics` with:
```javascript
function calculateClassStatistics(studentList) {
  if (studentList.length === 0) {
    return { average: "0.00", total: 0, highest: 0, lowest: 0, passed: 0, failed: 0 };
  }
  const marks = studentList.map(s => s.mark);
  const sum = marks.reduce((a, b) => a + b, 0);
  const passed = studentList.filter(s => s.mark >= 50).length;

  return {
    average: (sum / marks.length).toFixed(2),
    total: marks.length,
    highest: Math.max(...marks),
    lowest: Math.min(...marks),
    passed,
    failed: marks.length - passed
  };
}
```
Then add these lines to `displayReport`:
```javascript
console.log(`Highest Mark : ${stats.highest}`);
console.log(`Lowest Mark  : ${stats.lowest}`);
console.log(`Passed / Failed : ${stats.passed} / ${stats.failed}`);
```

## 15. Likely exam questions

1. What is the purpose of `readline`?** It reads user input from the terminal in Node.js.
2. Why is `main()` declared `async`?** So that `await` can pause the program until the user answers.
3. Difference between `parseInt` and `parseFloat`?** `parseInt` returns whole numbers only, while `parseFloat` keeps decimals (e.g. 72.5).
4. What does `isNaN()` do?** It checks whether a value is not a number, which catches invalid input.
5. Why use functions?** They make code reusable, easier to test and easier to read (modularity).
6. What is the difference between a `for` loop and a `while` loop?** A `for` loop runs a known number of times (per student), while a `while` loop repeats until a condition is met (validation).

16. Key terms
- CLI:** Command Line Interface, where you interact by typing text.
- Promise:** an object that represents a value that will be available later.
- Template literal:** a string in backticks that can include `${variables}`.
- Validation:** checking that input is correct before using it.
- Modularity:** splitting a program into small, single-purpose parts.

Want all of this combined with your earlier notes into one Word document?
function calculateClassStatistics(studentList) {
  if (studentList.length === 0) {
    return { average: "0.00", total: 0, highest: 0, lowest: 0, passed: 0, failed: 0 };
  }
  const marks = studentList.map(s => s.mark);
  const sum = marks.reduce((a, b) => a + b, 0);
  const passed = studentList.filter(s => s.mark >= 50).length;

  return {
    average: (sum / marks.length).toFixed(2),
    total: marks.length,
    highest: Math.max(...marks),
    lowest: Math.min(...marks),
    passed,
    failed: marks.length - passed
  };
}

console.log(`Highest Mark : ${stats.highest}`);
console.log(`Lowest Mark  : ${stats.lowest}`);
console.log(`Passed / Failed : ${stats.passed} / ${stats.failed}`);
                                     
