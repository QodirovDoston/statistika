import React, { useState } from 'react';
import { Toaster, toast } from 'sonner'

function RegistrationForm() {
    const [activeTab, setActiveTab] = useState('login');
    const [showModal, setShowModal] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        passportSeries: '',
        passportNumber: '',
        email: '',
        phone: '',
    });
    const [formDatalog, setFormDatalog] = useState({
        name: '',
        pass: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRegistered(true);

        // Simulate a delay for the success message (you can replace this with an actual API call)
        setTimeout(() => {
            setShowModal(false);
            toast.success(`Sahifangizga Xush kelibsiz ! ${formData.name}`, {
                description: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz",
            });
            // Reset form data after successful registration
            setFormData({
                name: '',
                birthDate: '',
                passportSeries: '',
                passportNumber: '',
                email: '',
                phone: '',
            });
        }, 1000);
    };


    const handleSubmitLog = (e) => {
        e.preventDefault();
        setIsRegistered(true);
        setTimeout(() => {
            setShowModal(false);
            toast.success(`Sahifangizga Xush kelibsiz! ${formDatalog.name}`, {
                description: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz",
            });
            setFormDatalog({
                name: '',
                pass: '',
            });
        }, 1000);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputChangelog = (e) => {
        const { name, pass } = e.target;
        setFormDatalog({ ...formDatalog, [name]: pass });
    };

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
                    <form onSubmit={handleSubmitLog} className="space-y-4">
                        <input type="text"
                             placeholder="Name"
                             id="pame"
                             name="name"
                             value={formDatalog.name}
                             onChange={handleInputChangelog}
                             required
                              className="w-full p-2 border border-gray-300 rounded-md" />
                        <div className="relative">
                            <input 
                             type="password"
                             placeholder="Parol"
                             id="pass"
                             name="pass"
                             value={formDatalog.pass}
                             onChange={handleInputChangelog}
                             required
                             className="w-full p-2 border border-gray-300 rounded-md" />
                            <button className="absolute inset-y-0 right-2 flex items-center">👁️</button>
                        </div>
                        <button type="submit" className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">Kirish</button>
                        <p className="text-center text-sm text-gray-500">Login yoki parol yodingizdan chiqdingizmi?</p>
                    </form>
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
                        <input 
                         type="text"
                         placeholder="Ism familya "
                         id="Name"
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         required
                         className="w-full p-2 border border-gray-300 rounded-md" />
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
                <button onClick={() => setShowModal(true)} className="w-full bg-blue hover:bg-lite-blue duration-300 text-white py-2 rounded-md">
                    Ro'yxatdan o'tish
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-10 flex items-center p-5 justify-center bg-black bg-opacity-95">
                    <div className="">
                        <h2 className="flex justify-between bg-blue rounded-t py-4 px-5 text-2xl font-bold">Ro'yxatdan o'tish

                            <button
                                onClick={() => setShowModal(false)}
                                className="text-white rounded-md"
                            >
                                X
                            </button>
                        </h2>
                        <div className='bg-white w-full max-w-md p-6 rounded-b shadow-lg'>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray" htmlFor="birthDate">FISH *</label>
                                    <input
                                        type="text"
                                        id="Name"
                                        name="name"
                                        placeholder="Ism familya "
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray" htmlFor="birthDate">Tug'ilgan sanasi *</label>
                                    <input
                                        type="date"
                                        id="birthDate"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray" htmlFor="passportSeries">Pasport seriyasi va raqami *</label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            id="passportSeries"
                                            name="passportSeries"
                                            placeholder="AA"
                                            value={formData.passportSeries}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="passportNumber"
                                            placeholder="1234567"
                                            value={formData.passportNumber}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray" htmlFor="email">Elektron pochta manzili *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray" htmlFor="phone">Telefon raqami *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+998901234567"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <p className="mt-4 text-sm text-gray font-bold">
                                    * Diqqat! Ro'yxatdan o'tish uchun nomingizga ro'yxatga qo'yilgan telefon raqamingizni kiriting!
                                </p>
                                <button
                                    // onClick={() => setFormData({
                                    //     birthDate: '',
                                    //     passportSeries: '',
                                    //     passportNumber: '',
                                    //     email: '',
                                    //     phone: '',
                                    // })}
                                    type="submit"
                                    className="w-full mt-4 bg-blue hover:bg-lite-blue text-white py-2 rounded-md focus:outline-none"
                                >
                                    Ro'yxatdan o'tish
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <Toaster richColors position="top-right" expand={true} />
        </div>
    );
}
export default RegistrationForm;