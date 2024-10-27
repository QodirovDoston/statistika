import React from 'react'
import { card, rasm, rasm2, rasm3 } from '../assets/xasan'

const Personal = () => {
    return (
        <section>
            <div className="container">
                {/* Top */}
                <div className='md:w-72'>
                    <h3 className='bg-blue rounded py-2 px-5'>Шахсий кабинетлар</h3>
                    <ul className='space-y-1'>
                        {card.map((i, index) => (
                            <li className='flex items-center space-y-0.5 bg-white px-5 shadow-sm cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' key={index}>
                                <img className='w-32' src={i.img} alt={i.title} />
                                <div className='flex flex-col space-y-1'>
                                    <h3 className='!text-black text-sm'>{i.title}</h3>
                                    <button className='bg-lite-green text-white rounded text-xs py-0.5'><i class="bi bi-table"> </i>Xizmatlar</button>
                                    <button className='bg-lite-green text-white rounded text-xs py-0.5'><i class="bi bi-box-arrow-in-right"> </i>Kabinetga kirish</button>
                                    <button className='bg-lite-green text-white rounded text-xs py-0.5'><i class="bi bi-envelope"></i> Pochta</button>
                                </div>
                            </li>
                        ))}
                        <br />
                    </ul>

                    <ul className='text-center text-white bg-blue py-2 rounded'>
                        <li><a href="#">Shaxsiy Kabinet <br /> Orqali Yuboriladigon Elektron Xujjat</a></li>
                    </ul>
                    <div className='space-y-2 max-w-72'>
                        <img className='w-full cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' src={rasm} alt="Maqolalar" />
                        <img className='w-full cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' src={rasm2} alt="Maqolalar" />
                        <img className='w-full cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' src={rasm3} alt="Maqolalar" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal