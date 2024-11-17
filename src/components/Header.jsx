import React from "react";
import { headerLogo, Loop } from "../assets/data";
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa';
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

                {/*  */}
                <div className="flex justify-end space-x-4 mt-8">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                    <FaTelegram size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                    <FaInstagram size={24} />
                  </a>
                </div>
                {/*  */}
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
    </header>
  );
};

export default Header;
