// src/components/AccordionItem.jsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const AccordionItem = ({ title, content, facality, year, link, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-light-gray transition duration-200 ease-in-out focus:outline-none"
        >
            <p className="text-md text-text_color font-semibold">{title}</p>
            <span className={`icon ${isOpen ? 'open' : ''} text-gray-500 text-2xl transition-transform duration-300`}>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
        </button>
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="accordion-content"
            unmountOnExit
        >
            <div className="accordion-content px-4 py-2 bg-gray-50 text-text_color leading-relaxed shadow-inner">
                {content}
                <p className='text-[15px] text-black py-3 '>{year}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-13 font-bold underline text-blue-600 cursor-pointer"
                >
                    {facality}
                </a>
            </div>
        </CSSTransition>
    </div>
);

export default AccordionItem;
