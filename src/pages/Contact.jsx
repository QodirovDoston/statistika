import React from 'react'
import { Loop } from '../assets/data'

const Contact = () => {
    return (
        <section>
            <div className='bg-blue py-2 px-3 rounded-lg'>
                <h3>
                    Алоқа
                </h3>
            </div>
            <div className='p-5'>
                <div className='font-semibold space-y-3 mb-5'>
                    <p>
                        Порталдан фойдаланиш масалалари бўйича:
                    </p>
                    <div className='flex space-x-3'>
                        <i className="bi bi-telephone-fill"></i>
                        <p>
                            Телефон: <a className='text-lite-blue' href="#"> <br />+998(71) 202-8658 <br /> +998(71) 203-4500</a>
                        </p>
                    </div>
                    <div className='flex space-x-3'>
                        <i className="bi bi-envelope-fill"></i>
                        <p>
                            Email: <a className='text-lite-blue' href="#"> <br />
                                my@info@toshvilstat.uz<br />
                                toshvilstat@exat.uz.uz</a>
                        </p>
                    </div>
                </div>
                <hr />
                <div className='font-semibold space-y-3 mt-5'>
                    <p>
                        Электрон рақамли имзодан фойдаланиш масалалари бўйича:
                    </p>
                    <div className='flex space-x-3'>
                        <i className="bi bi-telephone-fill"></i>
                        <p>
                            Телефон: <a className='text-lite-blue' href="#">  (71) 202-32-32</a>
                        </p>
                    </div>
                    <div className='flex space-x-3'>
                        <i className="bi bi-envelope-fill"></i>
                        <p>
                            Email: <a className='text-lite-blue' href="#"> info@yt.uz </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className=' flex-col md:flex-row space-x-5 mt-8 items-center'>
                <div className='bg-light-gray rounded-lg p-4'>
                    <p className='mb-3'>
                    Telegram guruhlari:
                    </p>
                    <img className='rounded-lg overflow-hidden w-[50px]' src={Loop} alt="map" />
                    <p className='text-13'>
                        Nurafshon shahar statistika bo'limi: <span className='underline text-blue'> t.me/nurafshonshaharstat </span> <br />
                        Angren shahar statistika bo'limi:<span className='underline text-blue'> t.me/angrenshaharstat</span><br />
                        Bekobod shahar statistika bo'limi: <span className='underline text-blue'>t.me/bekobodshaharstat	</span> <br />
                        Olmaliq shahar statistika bo'limi:<span className='underline text-blue'> t.me/olmaliqshaharstat</span><br />
                        Ohangaron shahar statistika bo'limi: <span className='underline text-blue'>t.me/ohangaronshaharstat </span><br />
                        Chirchiq shahar statistika bo'limi:<span className='underline text-blue'> t.me/chirchiqshaharstat</span><br />
                        Yangiyo'l shahar statistika bo'limi: <span className='underline text-blue'>t.me/yangiyo'lshaharstat </span><br />
                        Bekobod tuman statistika bo'limi:<span className='underline text-blue'> t.me/bekobodtumanstat</span><br />
                        Bo'stonliq tuman statistika bo'limi: <span className='underline text-blue'>t.me/bo'stonliqstat	</span>  <br />
                        Zangiota tuman statistika bo'limi: <span className='underline text-blue'>t.me/zangiotastat </span><br />
                        Qibray tuman statistika bo'limi: <span className='underline text-blue'>t.me/qibraystat	 </span>  <br />
                        Quyichirchiq tuman statistika bo'limi: <span className='underline text-blue'>t.me/quyichirchiqstat</span><br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact