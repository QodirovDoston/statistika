import React from 'react'
import { Portal1, Portal2 } from '../assets/data'
import RegistrationForm from '../components/RegistrationForm'
import Carousel from '../components/Carousel'
import Personal from '../components/Personal'
import MetricCard from "../components/MetricCard";

const Portal = () => {

    const data = [
        { icon: '📊', title: 'Yalpi Ichki Mahsulot', percentage: '106,6%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🏭', title: 'Sanoat', percentage: '107,0%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🌾', title: 'Qishloq, O‘rmon va Baliq Xo‘jaligi', percentage: '103,1%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '💰', title: 'Asosiy Kapitalga Kiritilgan Investitsiyalar', percentage: '131,0%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🏗️', title: 'Qurilish Ishlari', percentage: '109,1%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🚚', title: 'Yuk Aylanmasi', percentage: '103,9%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🚆', title: 'Yo‘lovchi Aylanmasi', percentage: '105,8%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🛍️', title: 'Chakana Tovar Aylanmasi', percentage: '109,2%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '🛠️', title: 'Xizmatlar', percentage: '112,8%', description: '2023-yilning yanvar-sentabr oyiga nisbatan foizda' },
        { icon: '👥', title: 'Doimiy Aholi Soni', percentage: '37,355,356', description: '2024-yil 1-oktabr holatiga' }
    ];

    return (
        <div>
            <div className="footBG">
                <div className="container bg-gradient-to-b from-blue-900 to-teal-600 text-white p-6">
                    <h1 className="text-center text-3xl font-bold mb-10">O'zbekiston Raqamlarda</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {data.map((metric, index) => (
                            <MetricCard key={index} {...metric} />
                        ))}
                    </div>
                </div>
            </div>
            <section className='container mx-auto px-5 pt-4' >
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4'>
                    <div className='col-start-1 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 row-start-1 row-span-1' >
                        <div className='bg-blue py-2 px-3 rounded-t-md'>
                            <h3>
                                Toshkent viloyati statistika boshqarmasi platformasiga xush kelibsiz!
                            </h3>
                        </div>
                        <RegistrationForm />
                        <div className='bg-blue py-2 px-3 rounded-t-md'>
                            <h3>
                                Portal haqida
                            </h3>
                        </div>
                        <div className='bg-light-gray  rounded-b-lg p-6 border-2 border-card-border shadow-inner cursor-pointer transform transition duration-300 ease-in-out hover:scale-105'>
                            <h2 className='text-black mt-5'>
                                O‘zbekiston statistika tizimidagi ma’lumotlarni to‘plash, saqlash va tahlil qilish
                            </h2>
                            <p>
                                Statistika tizimi uchun yangi raqamli platformaning maqsadlari quyidagilarni o‘z ichiga oladi:
                                <br />
                                Ma’lumotlarni to‘plash: Yangi raqamli platforma, O‘zbekiston statistika tizimidagi turli sohalarda mavjud bo‘lgan ma’lumotlarni to‘plab olish imkoniyatini beradi. Bu ma’lumotlar aholi demografik, iqtisodiy, sotsiologik, geografik, ta’lim, kasb-hunar va boshqa sohalarga oid bo‘lishi mumkin. Platforma orqali ma’lumotlar avtomatik ravishda yig‘iladi va qayta ishlash jarayoni avtomatlashtiriladi, shuningdek, ma’lumotlar yig‘ilganligi to‘g‘risida iste’molchilar tezkor va osonlik bilan xabar qilinadi.   <br />
                                Ma’lumotlarni saqlash: Yangi raqamli platforma, to‘planadigan ma’lumotlarni to‘g‘ridan-to‘g‘ri saqlash imkoniyatini beradi. Bu sayda to‘plangan ma’lumotlar uzun muddatda saqlanishi, arxivlashi va ularga oson va tezlik bilan kirish imkoniyatini ta’minlayadi. Bu shu bilan birga, ma’lumotlar ustida kerakli muhokama va tahlillarni olib borish, ma’lumotlarni tarqatish va ularga ko‘p o‘zgaruvchanliklarni qo‘shish ham osonlashtiriladi. <br />
                                Ma’lumotlarni tahlil qilish: Yangi raqamli platforma, to‘plangan ma’lumotlarni tahlil etish uchun muhim asboblar va funksiyalarni taqdim etadi. Bu tahlil jarayoni orqali ma’lumotlardan statistik analizlar, grafiklar, infografikalar va boshqa vizualizatsiyalar yaratish imkoniyati beriladi. Bu, statistik ma’lumotlarning vizual ravishda o‘qilishi, tahlili va tushunchalarni osonlashtirishi, ma’lumotlarning aniq va qulay ko‘rishni ta’minlash imkoniyatini beradi.
                                <br />
                                Ma’lumotlarning taqsimlanishi va integratsiyasi: Yangi raqamli platforma, O‘zbekiston statistika tizimi bilan integratsiyani rivojlantirishga yordam beradi. Bu platforma orqali turli sohalar bo‘yicha to‘planadigan ma’lumotlar o‘zaro bog‘liqligini o‘zgartiradi va ularga oson va tezlik bilan kirish imkoniyatini beradi. Bu, tizimning ma’lumotlarni samarali tarqatishini va ularda qo‘shimcha imkoniyatlarni yaratishini ta’minlayadi.   </p>
                        </div>
                        <div className='bg-light-gray mt-4 rounded-lg p-6 border-2 border-card-border shadow-inner cursor-pointer transform transition duration-300 ease-in-out hover:scale-105'>
                            <p className='mb-5'>
                                Xavfsizlik, maxfiylik va tartiblilikni ta’minlash: Yangi raqamli platforma, ma’lumotlarni xavfsiz saqlash va tartiblilikni ta’minlashga qaratilgan. Bu platforma yuqori darajada xavfsizlik protokollari va maxfiylik tamoyillarini o‘z ichiga oladi, ma’lumotlarni maxfiy va himoyalangan sahifalarda saqlaydi. Buna qo‘shimcha ravishda, ma’lumotlarga kirish uchun avtorizatsiya va to‘g‘ridan-to‘g‘ri murojaatlar uchun xavfsizlik tizimlari ham qo‘llaniladi. Yangi raqamli platformaning asosiy maqsadi O‘zbekistondagi mahalliy iqtisodiy ko‘rsatkichlarni yig‘ib olish va analiz qilish, mahallalarning yo‘l tuzilish holatini, ishlab chiqarish hajmini, aholi sonini, tuproq tuzilish holatini, uy-joy bilan ta’minlanglik holatini kuzatish va boshqalar kabi ma’lumotlarni saqlash va taqdim etishdir.Bu platforma quyidagi iste’mol sohalarda foydalanilishi mumkin:
                            </p>
                            <div className='p-1.5 border-2 border-card-border shadow-inner rounded-lg bg-white'>
                                <img src={Portal1} alt="image" />
                            </div>
                        </div>
                        <div className='bg-light-gray mt-4 rounded-lg p-6 border-2 border-card-border shadow-inner cursor-pointer transform transition duration-300 ease-in-out hover:scale-105'>
                            <p className='mb-5'>
                                Iqtisodiy ko‘rsatkichlarni yig‘ish: Platforma, mahalliy iqtisodiy ko‘rsatkichlarni (oylik yoki yillik ishlab chiqarish hajmi, daromad, investitsiyalar, ish yuritish ma’lumotlari, soliq to‘lovlari kabi) to‘plab, barcha mahallalarning iqtisodiy holatini tahlil qilishga imkon beradi.
                            </p>
                            <div className='p-1.5 border-2 border-card-border shadow-inner rounded-lg bg-white'>
                                <img src={Portal2} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 '>
                    <Personal />
                    </div>

                </div>

            </section>
            <div className="bg-text_gray flex flex-col items-center">
                {/* <Carousel /> */}
            </div>
        </div>
    )
}

export default Portal