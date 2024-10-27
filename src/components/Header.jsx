import React from "react";
import { headerLogo, Loop } from "../assets/data";


import { Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import MetricCard from "./MetricCard";

const Header = () => {

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

  const nav_links = [
    {
      link: '/',
      title: 'Portal haqida'
    },
    {
      link: '/eri',
      title: 'Statistika agentliklari'
    },
    {
      link: '/questions',
      title: "So'rovlar"
    },
    {
      link: '/contact',
      title: 'Aloqa'
    },
  ]
  return (
    <header className="shadow-header">
      <div className="bgcolor py-3">
        <div className="container">

          <div className="flex justify-between">
            <div className="flex items-center space-x-5">
              <div>
                <img src={headerLogo} alt="header_logo" />
              </div>

              {/* header left */}
              <div className="space-y-1">

                <h1>O‘ZBEKISTON RESPUBLIKASI PREZIDENTI <br /> HUZURIDAGI
                  STATISTIKA AGENTLIGI</h1>

                <p className="text-white text-base font-medium">TOSHKENT VILOYATI
                  STATISTIKA BOSHQARMASI</p>
                <p className="font-dancing text-base font-normal text-white"></p>

              </div>
            </div>


            {/* header right */}
            <div>
              <div className="items-center mt-5">
                <p className="text-[#628AE6] text-sm font-normal cursor-pointer mb-2">Ishonch telefonlari :</p>
                <button className="nav-btn text-white border text-sm hover:bg-white hover:text-blue duration-300 flex px-5 py-2">
                  <i className="bi bi-person-lines-fill mr-2"></i> (71) 203-45-00
                </button>
              </div>
            </div>
            <div >
              <img className="w-[240px]" src={Loop} alt="header_logo" />
            </div>
          </div>

        </div>
      </div>

      {/* navbar */}
      <nav className="container flex items-center justify-between py-3">
        <div className="flex space-x-5">
          <div>
            <Link to={`/`} className="inline-block nav-btn px-2.5">
              <i className="bi bi-house-door-fill text-2xl text-blue"></i>
            </Link>
          </div>
          <ul className="flex items-center justify-between space-x-5 mr-10">

            {nav_links.map((i, index) => {
              return (
                <li key={index}>
                  <NavLink className='header-btn inline-block' to={i.link}>{i.title}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <Input.Search type="text" placeholder="Xizmatlarni izlash" />
        </div>
      </nav>
      {/* //// */}
      <div className="footBG">
      <div className="container bg-gradient-to-b from-blue-900 to-teal-600 text-white p-6">
        <h1 className="text-center text-3xl font-bold mb-10">O'zbekiston Raqamlarda</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
          </div>
        </div>
      </div>
      {/* ozbekiston boyicha statistika  */}
    </header>
  );
};

export default Header;
