import React from 'react';
import { Menu, Avatar, Badge, Space, Dropdown, Input, Button, Card } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

const PersonalAcount = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Profil
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
                Sozlamalar
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />} danger>
                Chiqish
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="headBG">
            <div className="min-h-screen">
                {/* Navbar */}
                <div className="container mx-auto  px-4 py-5 flex items-center justify-between">
                    <div className="logo flex items-center gap-5 ">
                        <img className='w-20' src="https://www.stat.uz/images/logo.png" alt="" />
                        <h2 className="text-2xl font-bold text-text_color">Shaxsiy Kabinet</h2>
                    </div>
                    <div className="dropdown">
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Space size={24}>
                                <Badge count={2}>
                                    <Avatar shape="square" icon={<UserOutlined />} />
                                </Badge>
                            </Space>
                        </Dropdown>
                    </div>
                </div>

                {/* Main Content */}
                <div className="py-6 persenal">
                    <div className='container mx-auto'>
                        <section className="text-center p-6 text-white">
                            <h2 className="text-2xl font-semibold">Qodirov Doston</h2>
                            <p className="text-xl mt-2 ">Shaxsiy kabinetga xush kelibsiz!</p>
                        </section>

                        {/* Search Input and Buttons */}
                        <div className='flex justify-center items-center gap-4 mt-6'>
                            <Input
                                placeholder="So‘rovni kiriting"
                                className="w-full max-w-md p-3 rounded-lg shadow-md"
                                style={{ maxWidth: '400px' }}
                            />
                            <Button type="primary" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Izlash</Button>
                            <Button type="default" className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg">Barcha xizmatlar</Button>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {[
                                { name: 'Telegram chatboti', icon: '📸' },
                                { name: 'Qo‘llanmalar', icon: '👤' },
                                { name: 'Ariza holatini tekshirish', icon: '📋' },
                                { name: 'Telegram kanal', icon: '✉️' },
                                { name: 'Qayta aloqa', icon: '💬' },
                                { name: 'Youtube sahifasi', icon: '🎥' },
                                { name: 'Xizmatlar kalendari', icon: '📅' },
                                { name: 'Qo‘llanmalar', icon: '👤' },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105"
                                >
                                    <div className="text-4xl mb-2">{service.icon}</div>
                                    <p className="text-sm font-medium text-gray-800">{service.name}</p>
                                </div>
                            ))}
                        </div>

                        {/* /////////////////////// */}

                        <div className="container mx-auto px-4 py-12">
                            <h2 className="text-3xl font-bold text-center mb-6">Bizning Xizmatlar</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* Service 1 */}
                                <Card
                                    hoverable
                                    cover={<img alt="service" src="https://via.placeholder.com/200" />}
                                    className="shadow-md rounded-lg transition-all transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-center">Xizmat 1</h3>
                                    <p className="text-center text-gray-500">Xizmatning qisqacha tavsifi yoki ma'lumotlari.</p>
                                    <Button type="primary" className="w-full mt-4">Ko'proq Ma'lumot</Button>
                                </Card>

                                {/* Service 2 */}
                                <Card
                                    hoverable
                                    cover={<img alt="service" src="https://via.placeholder.com/200" />}
                                    className="shadow-md rounded-lg transition-all transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-center">Xizmat 2</h3>
                                    <p className="text-center text-gray-500">Xizmatning qisqacha tavsifi yoki ma'lumotlari.</p>
                                    <Button type="primary" className="w-full mt-4">Ko'proq Ma'lumot</Button>
                                </Card>

                                {/* Service 3 */}
                                <Card
                                    hoverable
                                    cover={<img alt="service" src="https://via.placeholder.com/200" />}
                                    className="shadow-md rounded-lg transition-all transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-center">Xizmat 3</h3>
                                    <p className="text-center text-gray-500">Xizmatning qisqacha tavsifi yoki ma'lumotlari.</p>
                                    <Button type="primary" className="w-full mt-4">Ko'proq Ma'lumot</Button>
                                </Card>
                            </div>
                        </div>

                        {/*  */}
                        <div className="bg-gray-100 py-12">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center mb-6">So'nggi Yangiliklar</h2>
                                <div className="space-y-8">
                                    {/* News Item 1 */}
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                                        <h3 className="text-xl font-semibold">Yangilik 1 nomi</h3>
                                        <p className="text-gray-600 mt-2">Yangilik 1 haqida qisqacha tavsif yoki ma'lumot.</p>
                                        <Button type="link" className="text-blue-600 mt-4">Batafsil</Button>
                                    </div>

                                    {/* News Item 2 */}
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                                        <h3 className="text-xl font-semibold">Yangilik 2 nomi</h3>
                                        <p className="text-gray-600 mt-2">Yangilik 2 haqida qisqacha tavsif yoki ma'lumot.</p>
                                        <Button type="link" className="text-blue-600 mt-4">Batafsil</Button>
                                    </div>

                                    {/* News Item 3 */}
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                                        <h3 className="text-xl font-semibold">Yangilik 3 nomi</h3>
                                        <p className="text-gray-600 mt-2">Yangilik 3 haqida qisqacha tavsif yoki ma'lumot.</p>
                                        <Button type="link" className="text-blue-600 mt-4">Batafsil</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalAcount;

