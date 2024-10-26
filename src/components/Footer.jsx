import React from "react";
import { Logofooter } from "../assets/data";

const Footer = () => {
  return (
    <footer className="footBG">
      <div className=" py-5 shadow-footer">
        <div className="container flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
          {/* footer left */}
          <div className="space-y-2">
            <h2>Toshkent viloyat statistika boshqarmasi</h2>
            <p className="text-[#628EA6] text-xs">© 2010-2024 Toshkent viloyat statistika boshqarmasi
            Materiallardan foydalanganda www.Toshvilstat.uz havolani keltirish majburiy.</p>
            <ul>
              <li><a className="text-[#a8a8a8] text-sm font-normal" href="#">Faqatgina faol giper havola orqali materiallardan</a></li>
              <li><a className="text-[#a8a8a8] text-sm font-normal" href="#">to'liq va qisman foydalanish mumkin.</a></li>
            </ul>
          </div>
          {/* footer center */}
          <div className="border border-light-gray rounded-md border-t-2 px-5 py-3 md:w-1/2">
            <p className="text-white text-base">
              Diqqat! Agar Siz matnda xatolik topsangiz <br /> administratorga xabar berish uchun, <br /> xato so'zi belgilab Ctrl+Enter tugmasini bosing.
            </p>
          </div>
          {/* footer right */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div>
                <img className="w-16" src={Logofooter} alt="logo_footer" />
              </div>
              <p className="text-sm text-white font-normal">Portal DSQ YaTIAM tomonidan ishlab chikilgan</p>
            </div>
            <p className="text-[#628AE6]  text-sm font-normal"><i class="bi bi-telegram mr-1 text-base cursor-pointer"></i>Telegram:
              <a className="text-base font-normal text-white ml-1" href="#">@toshvilstatuz</a></p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
