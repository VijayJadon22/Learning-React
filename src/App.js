import React, { useEffect, useState } from "react";
import MyComponent from "./components/MyComponent";

import "./style.css";

function App() {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("App Component mounting..")
  }, [])

  return (
    <div className="todo-container">
      {/* <CounterComponent/>
      <CounterComponent/>
      <CounterComponent/>
      <CounterComponent/>
      <Header title="Todo" />
      <TodoItem text="Eat" completed={true} />
      <TodoItem text="Code" />
      <TodoItem text="Sleep" />
      <TodoItem text="Wake" />
      <TodoItem text="Play" />
      <Button /> */}
      {isVisible?<MyComponent />:<></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
