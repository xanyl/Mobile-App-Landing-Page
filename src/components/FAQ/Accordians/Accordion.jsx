import { useState } from "react";
import "./Accordion.css";
import { data } from "../../../data/data";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="accordion">
      {data.accordionData.map((item, index) => (
        <div
          className={`accordion-item ${
            expandedIndex === index ? "expanded" : ""
          }`}
          key={index}
        >
          <div
            className={`accordion-header ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {expandedIndex === index ? (
              <span className="icon minus">-</span>
            ) : (
              <span className="icon plus">+</span>
            )}
            <span className="question">{item.question}</span>
          </div>
          {expandedIndex === index && (
            <div className="accordion-content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
