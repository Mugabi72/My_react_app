# My_react_app
This will offer basic knowledge about building an app using the react.
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      # Notes: README in GitHub

## What it is
A **README** is a file (usually `README.md`) in a repository that introduces the project. GitHub displays it automatically on the repo's main page. It is often the first thing visitors read.

## Purpose
- Explains **what** the project does and **why** it exists
- Shows others **how to install and use** it
- Helps contributors understand **how to get involved**
- Makes the project look professional and trustworthy

## File details
- **Name:** `README.md` (`.md` means Markdown format)
- **Location:** the root folder of the repo (GitHub also detects it in `.github/` or `docs/`)
- **Format:** written in Markdown, which GitHub renders with headings, links, images and code blocks

## What a good README contains
| Section | What to include |
|---------|-----------------|
| **Title** | Project name and a one-line description |
| **Description** | What the project does and the problem it solves |
| **Features** | Key things it can do |
| **Installation** | Step-by-step setup instructions |
| **Usage** | Examples showing how to run or use it |
| **Screenshots/Demo** | Images or a live link |
| **Technologies used** | Languages, frameworks, tools |
| **Contributing** | How others can help |
| **License** | Terms of use (e.g. MIT) |
| **Contact/Author** | Your name and how to reach you |

## Basic Markdown syntax
```markdown
# Heading 1
## Heading 2
**bold**  *italic*
- bullet point
1. numbered item
[link text](https://example.com)
![image](screenshot.png)
`inline code`
```

 Best practices
- Keep it clear and concise
- Use headings so it is easy to scan
- Include code examples in code blocks
- Add screenshots where useful
- Keep it updated as the project changes
- Check that the **installation steps actually work**

How to create one on GitHub
1. Open your repository
2. Click Add file → Create new file**
3. Name it `README.md`
4. Write your content, then click Commit changes



      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
