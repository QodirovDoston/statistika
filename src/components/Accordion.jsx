// src/components/Accordion.jsx
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  return (
    <div className=" shadow-xl overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          facality={item.facality}
          year={item.year}
          link={item.link}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
