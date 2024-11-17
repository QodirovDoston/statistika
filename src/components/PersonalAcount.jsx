import React from 'react';
import Footer from './Footer';
import { Menu, Avatar, Badge, Space, Dropdown } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
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

                <div className='container mx-auto' style={{ background: '#fff', padding: '0 20px' }}>
                    <div className="logo" style={{ float: 'left' }}>
                        <h2>Shaxsiy Kabinet</h2>
                    </div>
                    <div className='mt-5' style={{ float: 'right' }}>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Space size={24}>
                                <Badge count={2}>
                                    <Avatar shape="square" icon={<UserOutlined />} />
                                </Badge>
                            </Space>
                        </Dropdown>
                    </div>
                </div>
                <div className="py-6 persenal">
                    <div className='container mx-auto'>
                        <div className="">
                            <section className="text-white p-6">
                                <h2 className="text-2xl">Qodirov Doston</h2>
                                <p className="text-xl">Shaxsiy kabinetga xush kelibsiz!</p>
                            </section>
                            <div className='flex'>
                                <input
                                    type="text"
                                    placeholder="So‘rovni kiriting"
                                    className="w-full max-w-md p-2 border rounded shadow-sm"
                                />
                                <button className="bg-blue text-text_color px-4 py-2 rounded ml-2">Izlash</button>
                            <button className="bg-blue text-text_color px-4 py-2 rounded">Barcha xizmatlar</button>
                            </div>
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
            <Footer />
        </div>
    );
};

export default PersonalAcount;

