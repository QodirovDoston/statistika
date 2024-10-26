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
                            <i class="bi bi-telephone-fill"></i>
                            <p>
                                Телефон: <a className='text-lite-blue' href="#"> (71) 202-32-82 <span>ёки</span> 1198</a>
                            </p>
                        </div>
                        <div className='flex space-x-3'>
                            <i class="bi bi-envelope-fill"></i>
                            <p>
                                Email: <a className='text-lite-blue' href="#"> my@soliq.uz</a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className='font-semibold space-y-3 mt-5'>
                        <p>
                            Электрон рақамли имзодан фойдаланиш масалалари бўйича:
                        </p>
                        <div className='flex space-x-3'>
                            <i class="bi bi-telephone-fill"></i>
                            <p>
                                Телефон: <a className='text-lite-blue' href="#">  (71) 202-32-32</a>
                            </p>
                        </div>
                        <div className='flex space-x-3'>
                            <i class="bi bi-envelope-fill"></i>
                            <p>
                                Email: <a className='text-lite-blue' href="#"> info@yt.uz </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col md:flex-row space-x-5 mt-8 items-center'>
                    <div className='bg-light-gray rounded-lg p-4'>
                        <p className='mb-3'>
                            Сизнинг солиқ хизматингиз
                        </p>
                        <img className='rounded-lg overflow-hidden' src={Loop} alt="map" />
                    </div>
                    <div className='col-span-2'>
                        <p>
                            Барча поғонадаги солиқ органларининг ва қўмитага қарашли ташкилотларнинг боғланиш (алоқа) бўйича маълумотлари (манзил, телефон, факс, ишонч телефони, e-mail), раҳбарият тўғрисида ҳамда уларнинг қабул кунлари ва соатлари, электрон давлат хизматларини кўрсатиш ва электрон имзони ҳисобга олиниши бўйича масъул мансабдор шахсларнинг телефонлари ҳақидаги маълумотлар тақдим этилади.
                        </p>
                    </div>
                </div>
        </section>
    )
}

export default Contact