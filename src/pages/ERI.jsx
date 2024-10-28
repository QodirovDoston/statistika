import React from 'react'
import Accordion from '../components/Accordion';
import Personal from '../components/Personal'

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
        < div className='container mx-auto pt-4'>
            <div className='flex justify-between gap-3'>
                <div>
                    <div className='bg-blue py-2 px-3 rounded-t-md'>
                        <h3>
                            Ma’muriy ma’lumotlarni yetkazib beruvchilarning ma’lumotlar bazalarini Statistika agentliklari
                        </h3>
                    </div>
                    <div className="bg-gray-50 ">
            
                        <Accordion items={items} />
                    </div>
                </div>
                <Personal />
            </div>
        </div>
    )
}

export default ERI