import React, { useState, useEffect } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';

function ChatBot() {
    const [visible, setVisible] = useState(false); // Controls full chat window visibility
    const [initialMessageShown, setInitialMessageShown] = useState(false); // Controls initial greeting
    const [messages, setMessages] = useState([
        { text: "Salom! Bugun sizga qanday yordam bera olaman?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");

    // Show the chatbot with the initial message after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            setInitialMessageShown(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const userMessage = { text: inputValue, sender: "user" };
            setMessages((prev) => [...prev, userMessage]);
            setInputValue("");

            // Simulate bot response
            setTimeout(() => {
                const botMessage = { text: "Men yordam berish uchun keldim! Yana nima bilan yordam bera olaman? ", sender: "bot" };
                setMessages((prev) => [...prev, botMessage]);
            }, 1000);
        }
    };

    return (
        <div
            className="fixed bottom-4 right-4 z-20 "
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(initialMessageShown)}
        >
            {/* Chat Icon */}
            {!visible && (
                <div
                    onClick={() => setVisible(true)}
                    className="bg-blue text-white p-3 rounded-full cursor-pointer transition"
                >
                    <AiOutlineMessage size={24} />
                </div>
            )}

            {/* Chat Window */}
            {visible && (
                <div className="max-w-xl w-full md:max-w-md bg-white rounded-lg shadow-xl overflow-hidden animate-slide-up transition-all duration-500">
                    <div className="p-4 bgcolor text-white font-semibold flex justify-between items-center">
                        🤖 Yordamchi Bot
                        <button
                            onClick={() => setVisible(false)}
                            className="text-white hover:text-gray-200 transition text-[23px]"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="h-64 overflow-y-auto p-4 bg-gray-100">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-xs px-4 py-2 mb-2 rounded-lg ${message.sender === "bot"
                                        ? "bg-text_gray  text-black"
                                        : "bg-lite-green text-white"
                                        } ${message.sender === "user" ? "rounded-br-none" : "rounded-bl-none"}`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex border-t border-gray-300 p-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Xabar yozing..."
                            className="flex-1 p-2 border-none focus:outline-none"
                        />
                        <button onClick={handleSendMessage}  className="flex items-center bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                            Yuborish
                            <FaPaperPlane className="ml-2" size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;