import React from "react";
import { headerLogo, } from "../assets/data";
import { Input } from "antd";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const nav_links = [
    {
      link: '/',
      title: 'Portal haqida'
    },
    {
      link: '/eri',
      title: 'ERI haqida'
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

                <h1>O‘ZBEKISTON RESPUBLIKASI PREZIDENTI HUZURIDAGI
                STATISTIKA AGENTLIGI</h1>

                <p className="text-white text-base font-medium">TOSHKENT VILOYATI
                STATISTIKA BOSHQARMASI</p>
                <p className="font-dancing text-base font-normal text-white"></p>

              </div>
            </div>


            {/* header right */}
            <div>
              <div className="items-center space-x-2 ">
                <p className="text-[#628AE6] text-sm font-normal cursor-pointer">Avtoinformator:</p>
                <span className="text-base font-normal text-white ml-1 cursor-pointer">(93) 202-32-82</span>
              </div>

              <div className="flex items-center space-x-4 mt-5">
                <button className="nav-btn text-white border text-sm hover:bg-white hover:text-blue duration-300 flex">
                  <i class="bi bi-person-lines-fill mr-2"></i> Call
                </button>

                <button className="nav-btn text-white border text-sm hover:bg-white hover:text-blue duration-300 flex">
                  <i class="bi bi-shield-fill-exclamation mr-2"></i>ERI qanday
                  olinadi?
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* navbar */}
      <nav className="container flex items-center justify-between py-5">
        <div className="flex space-x-5">
          <div>
            <Link to={`/`} className="inline-block nav-btn px-2.5">
              <i class="bi bi-house-door-fill text-2xl text-blue"></i>
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
    </header>
  );
};

export default Header;
