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


# Notes on Your React To-Do App and README

## 1. What the app does
A simple To-Do List. The user types a task, clicks **Add** to put it in the list, and clicks **X** to remove it.

## 2. Problem in the pasted code
Your README notes were pasted **inside** the JSX, between the `<button>Add</button>` and the `<ul>`. JSX treats that as code, so the app will fail to compile. Keep the README in its own `README.md` file and keep `App.jsx` code only.

## 3. Key React concepts used

| Concept | Where | Purpose |
|---|---|---|
| Component | `function App()` | A reusable piece of UI written as a function |
| JSX | the `return (...)` | HTML-like syntax inside JavaScript |
| `useState` hook | `task`, `tasks` | Stores data that changes and re-renders the UI when updated |
| State setter | `setTask`, `setTasks` | The only correct way to update state |
| Controlled input | `<input value onChange>` | React state is the single source of truth for the input |
| Event handlers | `onClick`, `onChange` | Respond to user actions |
| Spread operator `...` | `[...tasks, task]` | Copies the old array and adds the new item (state is never changed directly) |
| `filter()` | `removeTask` | Returns a new array without the removed item |
| `map()` | the `<ul>` | Turns each task into an `<li>` |
| `key` prop | `key={i}` | Helps React track list items |
| `export default` | bottom | Lets other files import `App` |

## 4. How it works, step by step
1. `task` holds what is being typed. `tasks` holds the saved list.
2. Typing triggers `onChange`, so `setTask` updates the input value.
3. Clicking **Add** runs `addTask()`:
   - `task.trim() === ""` stops empty entries
   - `setTasks([...tasks, task])` adds the new task
   - `setTask("")` clears the input
4. Clicking **X** runs `removeTask(index)`, which keeps every task except the one at that index.
5. State changes, so React re-renders the list.

## 5. Cleaned-up code

```jsx
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
```

## 6. Possible improvements
- Press **Enter** to add: use `onKeyDown` on the input.
- Mark tasks as done: store objects like `{ text, done }`.
- Save tasks with `localStorage` and `useEffect`.
- Use unique IDs (e.g. `Date.now()`) as keys instead of the index.
- Add CSS to style the app.

## 7. Running a React app (Vite)
```bash
npm create vite@latest my_react_app -- --template react
cd my_react_app
npm install
npm run dev
```

## 8. Extra README notes (for My_react_app)
Your existing README notes are good. For this project, a README would include:
- **Title:** My_react_app
- **Description:** A basic To-Do List built with React to learn components, state and events
- **Features:** add tasks, remove tasks, empty-input check
- **Installation:** `npm install`
- **Usage:** `npm run dev`, then open the local URL shown
- **Technologies:** React, JavaScript, Vite
- **Author:** your name

Two small additions to your README notes:
- `.gitignore`:** keeps `node_modules` out of the repo.
- Badges:** small status icons at the top of a README (build status, license).

9. Points for an exam or report
- State management:** `useState` triggers re-renders.
- Immutability:** state is replaced with new arrays, never edited directly.
- Component-based design:** the UI is built from reusable pieces.
- Declarative UI:** you describe what the UI should look like for a given state.

Want these notes as a Word document, or an exam-style Q&A on React and README files?


Here is extra material you can add to your React and README notes, in the same structure.

10. Core React ideas in more depth
- Props vs state:** props are data passed *into* a component from its parent (read-only). State is data the component owns and can change with its setter.
- Re-rendering:** when state changes, React calls the component function again and updates only the parts of the page that changed.
- Virtual DOM:** React keeps a lightweight copy of the page in memory, compares old and new versions (diffing), and updates only the real DOM parts that differ. This makes updates fast.
- Why not edit state directly?** `tasks.push(task)` changes the array in place, so React does not notice the change. `setTasks([...tasks, task])` creates a new array, which triggers a re-render.
- Why `key` matters:** keys let React match list items between renders. Using the index is fine for a simple list, but unique IDs are safer when items can be removed or reordered.
- Hooks rules:** call hooks only at the top level of a component (not inside loops or `if` statements), and only inside components or custom hooks.

11. Improved version of the app (Enter key, completed tasks, unique IDs)
```jsx
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTask(t.id)}
              style={{ textDecoration: t.done ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.text}
            </span>{" "}
            <button onClick={() => removeTask(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
**What changed:**
- Each task is now an object `{ id, text, done }`.
- `toggleTask` uses `map()` and the spread operator to flip `done` without changing the original object.
- `removeTask` now uses the `id`, not the index.
- `onKeyDown` lets the user press Enter to add a task.

## 12. Saving tasks with `localStorage` and `useEffect`
```jsx
import { useState, useEffect } from "react";

const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```
- `useEffect` runs code *after* a render. The `[tasks]` array means "run only when `tasks` changes".
- `useState(() => ...)` is **lazy initialisation**: the function runs only once, on the first render.
- `JSON.stringify` and `JSON.parse` convert between arrays and text, because `localStorage` stores only strings.

## 13. Project structure (Vite)
| File / Folder | Purpose |
|---|---|
| `index.html` | The single HTML page; has `<div id="root">` |
| `src/main.jsx` | Entry point; renders `<App />` into the root div |
| `src/App.jsx` | The main component |
| `src/index.css` / `App.css` | Styles |
| `public/` | Static files (images, icons) |
| `package.json` | Project name, scripts and dependencies |
| `node_modules/` | Installed packages (never upload to GitHub) |
| `.gitignore` | Lists files Git should ignore |

## 14. Useful npm and Git commands
| Command | Purpose |
|---|---|
| `npm install` | Installs dependencies listed in `package.json` |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimised production version |
| `git init` | Starts a new Git repository |
| `git add .` | Stages all changes |
| `git commit -m "message"` | Saves a snapshot with a message |
| `git push` | Uploads commits to GitHub |

## 15. Complete README example for My_react_app
```markdown
# My_react_app
A simple To-Do List built with React to learn components, state and events.

## Features
- Add tasks
- Remove tasks
- Mark tasks as done
- Empty-input check

## Technologies Used
React, JavaScript, Vite

## Installation
1. Clone the repo: `git clone https://github.com/username/My_react_app.git`
2. Go to the folder: `cd My_react_app`
3. Install packages: `npm install`

## Usage
Run `npm run dev` and open the local URL shown in the terminal.

## Author
Your name
```

## 16. Common errors and fixes
| Error | Cause | Fix |
|---|---|---|
| App fails to compile | Notes or text pasted inside JSX | Keep notes in `README.md`, not in `App.jsx` |
| "Each child in a list should have a unique key" | Missing `key` in `map()` | Add `key={t.id}` |
| Typing does nothing in the input | `value` set without `onChange` | Add the `onChange` handler |
| "Adjacent JSX elements must be wrapped" | Two root elements returned | Wrap in one `<div>` or `<>...</>` |
| `useState is not defined` | Missing import | `import { useState } from "react"` |
| List does not update | State changed directly | Use the setter with a new array |

## 17. Limitations of the basic app
- No saving: tasks disappear on refresh (fixed by `localStorage`).
- No editing of existing tasks.
- No styling, so it looks plain.
- Everything is in one component. Larger apps split the UI into smaller components (e.g. `TaskItem`, `TaskList`).

## 18. Likely exam questions
1. **What is React?** A JavaScript library for building user interfaces from reusable components.
2. **What is JSX?** A syntax that lets you write HTML-like code inside JavaScript.
3. **What does `useState` return?** An array with the current value and a function to update it.
4. **Why use `map()` to display lists?** It turns each array item into a JSX element.
5. **What is a controlled input?** An input whose value is stored in React state and updated through `onChange`.
6. **What is a README and why is it important?** A file that introduces a project and explains how to install and use it.
7. **Why is `node_modules` in `.gitignore`?** It is large and can be recreated with `npm install`.

## 19. Key terms
- **Component:** a reusable piece of UI written as a function.
- **Hook:** a special function (like `useState`) that lets components use React features.
- **Virtual DOM:** React's in-memory copy of the page used for fast updates.
- **Props:** read-only data passed from a parent to a child component.
- **Immutability:** replacing data with a new copy instead of changing the original.
- **Markdown:** a simple text format used for READMEs (`.md`).

Want all of this combined with your earlier notes into one Word document?
