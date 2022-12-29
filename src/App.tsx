import React, { useState, useRef, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [cardsData, setCardsData] = useState([
    {
      title: "Picasso",
      content: "Peintre XXème siècle",
      id: 1,
    },
    {
      title: "Van Gogh",
      content: "Peintre XIXème siècle",
      id: 2,
    },
  ]);

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(btnRef);

    const handleResize = (e: Event) => {
      console.log("RESIZE", e);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <h1>Mon test</h1>
      {cardsData.map((item) => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
