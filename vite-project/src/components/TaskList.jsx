import { useState } from 'react';
import '../App.css';

const TASKS = [
  {
    dueDate: "2024-03-30",
    completed: false,
    name: "Finish project proposal",
  },
  {
    dueDate: "2024-02-26",
    completed: true,
    name: "Picnic with family",
  },
  {
    dueDate: "2024-03-27",
    completed: false,
    name: "Meet with mentor",
  },
  {
    dueDate: "2024-03-28",
    completed: true,
    name: "Review study notes",
  },
  {
    dueDate: "2024-03-29",
    completed: false,
    name: "Practice coding exercises",
  },
  {
    dueDate: "2024-04-01",
    completed: false,
    name: "Plan weekend trip",
  },
  {
    dueDate: "2024-03-26",
    completed: true,
    name: "Attend yoga class",
  },
  {
    dueDate: "2024-03-31",
    completed: false,
    name: "Update resume",
  },
  {
    dueDate: "2024-04-02",
    completed: false,
    name: "Research career options",
  },
  {
    dueDate: "2024-04-03",
    completed: true,
    name: "Start reading new book",
  },
  {
    dueDate: "2024-04-04",
    completed: true,
    name: "Schedule dentist appointment",
  },
];

const TaskList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setHideCompleted(e.target.checked);
  };

  const filteredTasks = TASKS.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!hideCompleted || !task.completed)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <label>
        <input
          type="checkbox"
          checked={hideCompleted}
          onChange={handleCheckboxChange}
        />
        Show completed tasks
      </label>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>
                <span
                  className={task.completed ? "completed-task" : ""}
                >
                  {task.name}
                </span>
              </td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
