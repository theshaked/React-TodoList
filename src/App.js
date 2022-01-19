import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "learn react",
      day: "today",
      reminder: true,
    },
    {
      id: 2,
      text: "learn typescript",
      day: "monday",
      reminder: true,
    },
    {
      id: 3,
      text: "learn photoshop",
      day: "someday",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t))
    );
    console.log(id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
};

export default App;
