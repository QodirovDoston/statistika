import React from 'react'
import { Divider, Table } from 'antd';
import { QuestionIcon } from '../assets/data';
const Sorov = () => {

    const columns = [
        {
            title: 'Сўровлар мавзуси',
            dataIndex: 'surov',
        },
        {
            title: 'Саволлар сони',
            dataIndex: 'number',
        },
        {
            title: 'Овозлар сони',
            dataIndex: 'ovozlar',
        },
        {
            title: 'Сўров ўтказиш даври',
            dataIndex: 'day',
        },
    ];
    const data = [
        {
            key: '1',
            img: QuestionIcon,
            surov: ' Ижтимоий сўровнома',
            number: 12,
            ovozlar: '498',
            day: '	15.04.2021 - 15.06.2021'
        },
        {
            key: '2',
            surov: 'Statistika idoralari faoliyati boyicha',
            number: 4,
            ovozlar: '787',
            day: '	15.04.2021 - 15.06.2021'

        },
        {
            key: '3',
            surov: 'Sizning soliq Xizmatlaringiz',
            number: 7,
            ovozlar: '654',
            day: '	15.04.2021 - 15.06.2021'

        },
    ];

    return (
        <section>
            <div className='bg-blue py-2 px-3 rounded-lg'>
                <h3>
                    Сўровлар
                </h3>
            </div>
            <Table columns={columns} dataSource={data} size="middle" />
        </section>
    )
}

export default Sorov