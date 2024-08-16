import React, { useState } from "react";
import "./style.css";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="accordion">
        <div className="container">
          <div className="header" onClick={() => setIsActive(!isActive)}>
            <h1>{title}</h1>
            <p>{isActive ? "-" : "+"}</p>
          </div>

          {isActive && (
            <div className="content">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;
