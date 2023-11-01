import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("hi");
    return byFn;
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const [showing, setShowing] = useState(false);

  const counterUp = () => setValue((prev) => prev + 1);
  const onClick = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API.....");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
    {
      console.log("SEARCH FOR", keyword);
      }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={counterUp}>click me</button><br />
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
