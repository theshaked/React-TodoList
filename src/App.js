import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
};

export default App;
