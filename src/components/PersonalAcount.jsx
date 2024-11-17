import React from 'react';

const PersonalAcount = () => {
    return (
        <div className="headBG">
            <div className="min-h-screen">
                {/* Header */}
                <div className='bg-white'>
                <header className="container mx-auto text-text_color p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                        <h1 className="text-blue text-xl font-semibold">Yagona Portal</h1>
                    </div>
                    <div className="flex space-x-4">
                        <span className="text-sm">Doston Qodirov</span>
                        <button className="text-text_color border border-text_color rounded px-2 py-1">Chiqish</button>
                    </div>
                </header>
                </div>

                {/* User Welcome Section */}
                <section className="bg-blue text-text_color p-6">
                    <h2 className="text-text_color text-2xl">Qodirov Doston</h2>
                    <p className="text-lg">Shaxsiy kabinetga xush kelibsiz!</p>
                </section>

                {/* Search Bar and Quick Access Buttons */}
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="So‘rovni kiriting"
                            className="w-full max-w-md p-2 border rounded shadow-sm"
                        />
                        <button className="bg-blue-500 text-text_color px-4 py-2 rounded ml-2">Izlash</button>
                        <button className="bg-blue-500 text-text_color px-4 py-2 rounded">Barcha xizmatlar</button>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Telegram chatboti', icon: '📸' },
                            { name: 'Qo‘llanmalar', icon: '👤' },
                            { name: 'Ariza holatini tekshirish', icon: '📋' },
                            { name: 'Telegram kanal', icon: '✉️' },
                            { name: 'Qayta aloqa', icon: '💬' },
                            { name: 'Youtube sahifasi', icon: '🎥' },
                            { name: 'Xizmatlar kalendari', icon: '📅' },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 border rounded shadow hover:shadow-md flex flex-col items-center justify-center text-center"
                            >
                                <div className="text-4xl mb-2">{service.icon}</div>
                                <p className="text-sm font-medium">{service.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalAcount;
