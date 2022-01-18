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

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
