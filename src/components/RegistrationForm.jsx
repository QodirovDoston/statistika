import React, { useState } from 'react';

function RegistrationForm() {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="flex flex-col items-center mb-3">
            <div className="bg-white p-6 rounded-b-md shadow-md w-full">
                {/* Tabs */}
                <div className="flex justify-between mb-6 border-b-2 border-gray-200">
                    {['Login', 'Mobile-ID', 'ERI', 'ID-karta', 'ONE ID', 'Telefon nomer'].map((tab) => (
                 <button
                 key={tab}
                 onClick={() => setActiveTab(tab.toLowerCase())}
                 className={`w-full py-2 text-sm font-medium transition duration-300 
                     ${activeTab === tab.toLowerCase() ? 'text-white bg-blue hover:bg-lite-blue duration-300' : 'text-blue bg-white'}
                     hover:border-b-2 bg-blue hover:border-lite-blue duration-300`}
             >
                 {tab}
             </button>
                    ))}
                </div>

                {/* Conditional Forms */}
                {activeTab === 'login' && (
                    <div className="space-y-4">
                        <input type="email" placeholder="Login" className="w-full p-2 border border-gray-300 rounded-md" />
                        <div className="relative">
                            <input type="password" placeholder="Parol" className="w-full p-2 border border-gray-300 rounded-md" />
                            <button className="absolute inset-y-0 right-2 flex items-center">👁️</button>
                        </div>
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Kirish</button>
                        <p className="text-center text-sm text-gray-500">Login yoki parol yodingizdan chiqdingizmi?</p>
                    </div>
                )}

                {activeTab === 'mobile-id' && (
                    <div className="space-y-4">
                        <input type="text" placeholder="Mobile-ID Number" className="w-full p-2 border border-gray-300 rounded-md" />
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Register with Mobile-ID</button>
                    </div>
                )}

                {activeTab === 'eri' && (
                    <div className="space-y-4">
                        <input type="text" placeholder="ERI Code" className="w-full p-2 border border-gray-300 rounded-md" />
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Register with ERI</button>
                    </div>
                )}

                {activeTab === 'id-karta' && (
                    <div className="space-y-4">
                        <input type="text" placeholder="ID-karta Number" className="w-full p-2 border border-gray-300 rounded-md" />
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Register with ID-karta</button>
                    </div>
                )}

                {activeTab === 'one id' && (
                    <div className="space-y-4">
                        <input type="text" placeholder="ONE ID Number" className="w-full p-2 border border-gray-300 rounded-md" />
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Register with ONE ID</button>
                    </div>
                )}

                {activeTab === 'telefon nomer' && (
                    <div className="space-y-4">
                        <input type="text" placeholder="Telefon nomer" className="w-full p-2 border border-gray-300 rounded-md" />
                        <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Register with Telefon nomer</button>
                    </div>
                )}

                {/* Registration Terms */}
               
            </div>
            <div className="bg-white p-6 rounded-md shadow-md w-full mt-4">
                    <h4 className="text-xl font-bold mb-4">Ro'yxatdan o'tish</h4>
                    <p className="text-gray text-sm mb-4 ">
                        Ro'yxatdan o'tish uchun sizga pasport ma'lumotlari kerak bo'ladi.
                    </p>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-gray-600 text-sm">
                            Men <a href="#" className="text-purple-600 underline">foydalanuvchi shartnomasi</a> bilan tanishib chiqdim
                        </label>
                    </div>
                    <button className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md" disabled>
                        Ro'yxatdan o'tish
                    </button>
                </div>
        </div>
    );
}

export default RegistrationForm;
