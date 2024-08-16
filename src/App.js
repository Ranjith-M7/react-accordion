import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

function App() {
  return (
    <>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </>
  );
}

export default App;
