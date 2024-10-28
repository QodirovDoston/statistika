import React from 'react';

const Accordion = ({ items }) => {

  return (
    <div className=" shadow-xl overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <h2 className="text-lg font-semibold text-black mb-2">
            {item.title}
          </h2>
          <div className="accordion-content px-4 py-2 bg-gray-50 text-text_color leading-relaxed shadow-inner">
            {item.content}
            <p className='text-[15px] text-black py-3 '>{item.year}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-13 font-bold underline text-blue-600 cursor-pointer"
            >
              {item.facality}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;