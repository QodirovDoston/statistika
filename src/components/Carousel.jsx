import React from 'react';

const carouselData = [
  { image: 'https://stat.uz/images/logos/it-park.png', title: 'IT-park' },
  { image: 'https://stat.uz/images/logos/logo_unfpa.png', title: 'UNICEF' },
  { image: 'https://stat.uz/images/logos/logo_worldbank.png', title: 'World bank' },
  { image: 'https://stat.uz/images/logos/xuquq.jpg', title: 'Xuquq uz' },
  { image: 'https://stat.uz/images/logos/logo-2.png', title: 'Milliy huquqiy Internet portali' },
  { image: 'https://stat.uz/images/logos/logo.png', title: 'Gov.uz' },
  { image: 'https://stat.uz/images/logos/adb_logo_outline.png', title: 'ADB' },
  { image: 'https://stat.uz/images/logos/logo_eurostat.jpg', title: 'Eurostat' },
  { image: 'https://stat.uz/images/logos/logo_who.png', title: 'WHO' },
  { image: 'https://stat.uz/images/logos/strategiya-uzb.png', title: 'Harakatlar strategiyasi' },
  { image: 'https://stat.uz/images/logos/lexuz.jpg', title: 'Lex uz' },
];

const Carousel = () => {
  return (
    <div className="my-8 mx-auto max-w-screen-2xl overflow-hidden ">
    <h2 className="text-center text-xl text-black font-semibold mb-4">Foydali Havolalar</h2>
    
    <div className="flex animate-scroll">
      {[...carouselData, ...carouselData].map((item, index) => ( // Duplicate items for a seamless scroll
        <div key={index} className="flex-none w-52 p-4">
          <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-6">
            <img src={item.image} alt={item.title} className="w-40 h-[54px] object-contain" />
          </div>
          <p className="text-center mt-2 text-gray">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Carousel;
