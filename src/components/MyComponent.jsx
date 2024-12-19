import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  useEffect(() => {
      console.log("My Component is mounting...");
      
      return () => {
          console.log("Unmounting...");
      }
  }, []);

  useEffect(() => {
      console.log("count updated", count);
      
      return function () {
          console.log("Returning count:- ",count)
      }
  }, [count]);

  return (
    <>
      <p>Count is:- {count}</p>
      <p>Count2 is:- {count2}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount2(count2 + 1)}>Increase2</button>
    </>
  );
};
export default MyComponent;
