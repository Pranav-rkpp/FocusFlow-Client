import { useState } from "react";

const Concept = () => {
  function handleNameChange() {
    const names = ["Pranav", "John", "Doe"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  function handleClick(person) {
    console.log("Thanks for the Support." + person);
  }

  function handleEventInnerText(e) {
    console.log("Event Inner Text: ", e.target.innerText);
    console.log("Event Inner HTML: ", e.target.innerHTML);
    console.log("Event Text Content: ", e.target.textContent);
  }

  function handleUser() {
    console.log("User function called");
  }

  const [count, setCount] = useState(0);
  const [user, setUser] = useState(() => handleUser());
  function handleIncrement() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const [nameState, setNameState] = useState("Earn");
  function handleNameState() {
    const names = ["Pranav", "Praveen", "Gopi", "Ram", "Hari"];
    const randomIndex = Math.floor(Math.random() * names.length);
    setNameState(names[randomIndex]);
  }
  return (
    <div className="content">
      <h3>Subscribe {handleNameChange()}</h3>
      <button onDoubleClick={() => handleClick("Ram")}>Subscribe</button>
      <p onClick={(e) => handleEventInnerText(e)}>Subscribe</p>

      <div className="counter">
        <button onClick={handleIncrement}>+</button>
        <div className="count">{count}</div>
        <button onClick={handleDecrement}>-</button>
      </div>

      <p>Lets {nameState}</p>
      <button onClick={handleNameState}>Subscribe</button>
    </div>
  );
};

export default Concept;
