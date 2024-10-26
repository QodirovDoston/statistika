import React from 'react'
import Accordion from '../components/Accordion';

const ERI = () => {

    const items = [
        { title: 'Narxlar statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'Birja savdolariga qo‘yiladigan tovarlar narxlari to‘g‘risidagi ma’lumotlarni axborot tizimlarini integratsiya qilish orqali elektron shaklda idoralararo almashishni yo‘lga qo‘yish.', year: '2024 yil iyun', facality: "Raqamli hukumat loyihalarini boshqarish markazi, O‘zbekiston Respublika tovar-xom ashyo birjasi", link: 'https://davaktiv.uz/oz/corporate/company/RGHJHGG' },
        { title: 'Tashqi iqtisodiy faoliyat statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'O‘zbekiston Respublikasidan chiqib ketgan O‘zbekiston Respublikasi fuqarolarining soni, jinsi, yosh tarkibi, safar maqsadi, chiqib ketish transport turi va chegara yo‘nalishi to‘g‘risidagi statistika ma’lumotlarini integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil iyun', facality: "RO‘zbekiston Respublikasi Adliya vazirligi huzuridagi Personallashtirish agentligi", link: 'https://pd.gov.uz/' },
        { title: 'Qurilish soha statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'Jismoniy shaxslar tomonidan yakka tartibda qurilgan turar joylarni va noturar binolarni foydalanishga topshirish to‘g‘risida ma’lumotlarni integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil sentyabr', facality: "O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi Kadastr agentligi", link: 'https://kadastr.uz/uz' },
        { title: 'Ijtimoiy soha statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: "Sog‘liqni saqlash sohasiga tegishli bo‘lgan quyidagi ma’lumotlarini integratsiya orqali taqdim etishni yo‘lga qo‘yish:- aholiga tibbiy yordam ko‘rsatuvchi muassasalar faoliyati to‘g‘risidagi statistika ma’lumotlari (viloyat va tuman kesimida);- homilador, tug‘adigan va tuqqanlarga tibbiy yordam ko‘rsatish, homiladorlikni to‘xtatish va kontrasepsiya to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida);- bolalarga tibbiy yordam ko‘rsatish to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida);- aholiga tibbiy xizmat ko‘rsatuvchi mikrofirma va kichik korxona faoliyati to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida).", year: '2024 yil avgust', facality: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi", link: 'https://gov.uz/oz/ssv' },
        { title: 'Respublika OITSga qarshi kurash markazi', content: 'Odam immun tanqisligi virusi bilan kasallangan bemorlar va qonni OIVga tekshirish natijalari to‘g‘risida statistika ma’lumotlarini (viloyat va tuman kesimida) integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil sentyabr', facality: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi, Respublika OITSga qarshi kurash markazi", link: 'https://oits-markaz.uz/' },



        { title: 'Narxlar statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'Birja savdolariga qo‘yiladigan tovarlar narxlari to‘g‘risidagi ma’lumotlarni axborot tizimlarini integratsiya qilish orqali elektron shaklda idoralararo almashishni yo‘lga qo‘yish.', year: '2024 yil iyun', facality: "Raqamli hukumat loyihalarini boshqarish markazi, O‘zbekiston Respublika tovar-xom ashyo birjasi", link: 'https://davaktiv.uz/oz/corporate/company/RGHJHGG' },
        { title: 'Tashqi iqtisodiy faoliyat statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'O‘zbekiston Respublikasidan chiqib ketgan O‘zbekiston Respublikasi fuqarolarining soni, jinsi, yosh tarkibi, safar maqsadi, chiqib ketish transport turi va chegara yo‘nalishi to‘g‘risidagi statistika ma’lumotlarini integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil iyun', facality: "RO‘zbekiston Respublikasi Adliya vazirligi huzuridagi Personallashtirish agentligi", link: 'https://pd.gov.uz/' },
        { title: 'Qurilish soha statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: 'Jismoniy shaxslar tomonidan yakka tartibda qurilgan turar joylarni va noturar binolarni foydalanishga topshirish to‘g‘risida ma’lumotlarni integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil sentyabr', facality: "O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi Kadastr agentligi", link: 'https://kadastr.uz/uz' },
        { title: 'Ijtimoiy soha statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha', content: "Sog‘liqni saqlash sohasiga tegishli bo‘lgan quyidagi ma’lumotlarini integratsiya orqali taqdim etishni yo‘lga qo‘yish:- aholiga tibbiy yordam ko‘rsatuvchi muassasalar faoliyati to‘g‘risidagi statistika ma’lumotlari (viloyat va tuman kesimida);- homilador, tug‘adigan va tuqqanlarga tibbiy yordam ko‘rsatish, homiladorlikni to‘xtatish va kontrasepsiya to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida);- bolalarga tibbiy yordam ko‘rsatish to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida);- aholiga tibbiy xizmat ko‘rsatuvchi mikrofirma va kichik korxona faoliyati to‘g‘risida statistika ma’lumotlari (viloyat va tuman kesimida).", year: '2024 yil avgust', facality: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi", link: 'https://gov.uz/oz/ssv' },
        { title: 'Respublika OITSga qarshi kurash markazi', content: 'Odam immun tanqisligi virusi bilan kasallangan bemorlar va qonni OIVga tekshirish natijalari to‘g‘risida statistika ma’lumotlarini (viloyat va tuman kesimida) integratsiya orqali taqdim etishni yo‘lga qo‘yish.', year: '2024 yil sentyabr', facality: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi, Respublika OITSga qarshi kurash markazi", link: 'https://oits-markaz.uz/' },
    ];
    return (
        <>
            <div className='bg-blue py-2 px-3 rounded-t-md'>
                <h3>
                    Ma’muriy ma’lumotlarni yetkazib beruvchilarning ma’lumotlar bazalarini Statistika agentliklari
                </h3>
            </div>
            <div className="bg-gray-50 ">
                <Accordion items={items} />
            </div>
            {/* <div>
                <h3 className='text-black mt-7 text-2xl font-normal'>Narxlar statistikasi ko‘rsatkichlarini shakllantirish bo‘yicha</h3>
                <p className='text-black text-sm my-3'>Birja savdolariga qo‘yiladigan tovarlar narxlari to‘g‘risidagi ma’lumotlarni axborot tizimlarini integratsiya qilish orqali elektron shaklda idoralararo almashishni yo‘lga qo‘yish.</p>
                <p className=' list-disc text-bold'>Raqamli hukumat loyihalarini boshqarish markazi, 
                O‘zbekiston Respublika tovar-xom ashyo birjasi</p>
                <li className=' list-disc'>2024 yil iyun</li>
            </div> */}

            {/* <div>
                <h3 className='text-black mt-7 text-2xl font-normal'>NIMA BERILADI?</h3>
                <p className='text-black text-base mt-2'>Sizga o'zga ma'umotlarni manbaida elektron ko'rinishida ochiq va yopiq kalitlari hamda ERI kalitining sertifikati beriladi. ERI kalitining sertifikatida kuyidagilar ko'rsatiladi:</p>
                <ul className='text-black text-sm mt-2'>
                    <li className=' list-disc'>elektron raqamli imzoning egasi bo'lgan jismoniy shaxsning familiyasi, ismi, otasining ismi;</li>

                    <li className=' list-disc'>agar elektron raqamli imzoning egasi yuridik shaxsning vakili bo'lsa, shu yuridik shaxsning nomi;</li>

                    <li className=' list-disc'>elektron raqamli imzoning egasi bo'lgan jismoniy shaxsning familiyasi, ismi, otasining ismi;</li>

                    <li className=' list-disc'>elektron raqamli imzodan foydalanish maqsadlari to'g'risidagi ma'lumotlar;</li>

                    <li className=' list-disc'>электрон рақамли имзонинг очиқ калити;</li>

                    <li className=' list-disc'>elektron raqamli imzoning ochiq kalitidan foydalanishda yordam berishi mumkin bo'lgan elektron raqamli imzo vositalarining nomi;</li>

                    <li className=' list-disc'>mazkur sertifikatni bergan Ro'yxatga olish markazining nomi va joylashgan manzili;</li>

                    <li className=' list-disc'>elektron raqamli imzo kalitlari sertifikatlari reyestrining elektron manzili</li>
                </ul>
            </div> */}

            {/* <div>
            <h3 className='text-black mt-7 text-2xl font-normal'>QANAQA XUJJATLAR KERAK?</h3>
            <p className='text-black text-base mt-3 font-bold'>Jismoniy shaxslar uchun:</p>
            <ul className='text-black text-sm mt-1'>
                <li className=' list-disc'>Shaxsni tasdiqlovchi guvohnomani nusxasi (O'zbekiston Respubliki fuqarosi pasporti, xorij fuqarosi pasporti, fukaroligi yuq shaxsni guvohnomasi, xarbiy guvohnomasi unga ilova qilingan xarbiy xizmatchining pasport va yashash joyi ma'lumotlarni tasdiqlovchi belgilangan shakldagi ma'lumotnomasi);</li>

                <li className=' list-disc'>ERI kalitini ro'yxatdan o'tkazish va sertifikatni berish uchun imzolangan ariza.</li>
            </ul>

            <p className='text-black text-base mt-3 font-bold'>Yuridik shaxslar uchun:</p>
            <ul className='text-black text-sm mt-1'>
                <li className=' list-disc'>Yuridik shaxsni vakili – ERI egasining shaxsni tasdiqlovchi guvohnomani nusxasi (O'zbekiston Respubliki fuqarosi pasporti, xorij fuqarosi pasporti, fukaroligi yuq shaxsni guvohnomasi, xarbiy guvohnomasi unga ilova qilingan xarbiy xizmatchining pasport va yashash joyi ma'lumotlarni tasdiqlovchi belgilangan shakldagi ma'lumotnomasi);</li>

                <li className=' list-disc'>ERIning egasi - yuridik shaxsning vakiliga buyruqning tasdiqlangan nushasi yoki ishonchnoma;</li>
                <li className=' list-disc'>Yuridik shaxsning davlat ro'yxatidan o'tkazganligi xaqida guvohnomaning tasdiqlangan nusxasi</li>
                <li className=' list-disc'>ERI kalitini ro'yxatdan o'tkazish va sertifikatni berish uchun arizada ERIning egasi ko'rsatiladi.</li>
            </ul>
        </div>
        <div>
            <h3 className='text-black mt-7 text-2xl font-normal'>QANChA KUTISh KERAK?</h3>
            <p className='text-black text-base mt-2'>ERI kalitini ro'yxatdan o'tkazish va sertifikatni berish uchun arizaniko'rish muddati 5 kundan ortiq emas. ERI kalitlarni ro'yxatga olish va sertifikatni berish muddati ERI sertifikatni berish uchun tulovi tushgan vaqtidan bir ish kuni.</p>
        </div>
        <div>
            <h3 className='text-black mt-7 text-2xl font-normal'>NARHI QANChA?</h3>
            <p className='text-black text-base mt-2'>ERI sertifikatni berish uchun tulovi eng kam oyli ish xaqining 10 foizi miqdorida, QQSsiz. Tulov 18.07.2012 yilgi PF-4455-sonli “Ishbilarmonlik muhitini yanada tubdan yaxshilash va tadbirkorlikka yanada keng erkinlik berish chora-tadbirlari to'g'risida”gi O'zbekiston Respublikasi Prezidentining farmoni bilan tasdiqlangan2012 yil 1 avgustdan boshlab, tadbirkorlik faoliyati uchun shart-sharoitlarni yanada yaxshilashga yo'naltirilgan joriy qilingan aniq me'yor va chora-tadbirlarga muvofiq o'rnatilgan.</p>
        </div>
        <div>
            <h3 className='text-black mt-7 text-2xl font-normal'>KANDAY TULANADI?</h3>
            <p className='text-black text-base mt-2'>ERI kalitning sertifikati xizmatining narxidan oldindan to'lov 100 foiz miqdorida DSQning Ro'yxatga olish markazining bank rekvizitlarga h/r 2021 0000 8004 3120 0009 ATB «KAPITALBANK», MFO 01018, INN 201589463, OKONX 82000 o'tqaziladi. To'lov naqd va naqdsiz tulovlar asosida amalga oshiriladi</p>
        </div>
        <div>
            <h3 className='text-black mt-7 text-2xl font-normal'>KANDAY OLISh MUMKIN?</h3>
            <p className='text-black text-base mt-2'>1 qadam:<span className='ml-2'>Talab qilinadigan xujjatlar va imzolangan arizani taqdim etish. Imzolangan ariza DSQning Ro'yxatga olish markazining ommaviy ofertada belgilangan shartlarga rozilikdan dalolat beradi</span></p>
            <p className='text-black text-base mt-2'>2 qadam:<span className='ml-2'> Arizani kurishni ijobiy natijasida DSQning Ro'yxatga olish markazining bank xisob raqamiga ERI kalitining sertifikatini berish xizmatini tulash</span></p>
            <p className='text-black text-base mt-2'>3 qadam:<span className='ml-2'>ERI egasining shaxsni tasdiqlovchi guvohnomasini asl xusxasini va - o'zga ma'lumotlar manbainitaqdim etish (ERI ning ochiq va yopiq kalitlarni va ERI kalitining sertifikatini elektron xujjat shaklida saqlash uchun) va kalitlarni va ERI kaliti sertifikatini o'zga ma'lumotlarni manbaiga olish.</span></p>
        </div> */}
        </>
    )
}

export default ERI