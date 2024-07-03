
import React, { useState } from "react";
import TodoList from "./components/Todolist/TodoList";
import Header from "./components/Header/Header";
import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";
// import { WiDayFog } from "react-icons/wi"; //icon 사용법
// <div>App<WiDayFog/></div>

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        // onFilterchange={(filter)=>{setFilter(filter)}}
        onFilterchange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
export default App;
