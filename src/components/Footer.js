import React from "react";
import { CiMail, CiFacebook, CiYoutube, CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 flex justify-around rounded items-center bg-gray-900 text-white p-2 w-full flex-wrap ">
      <div className="justify-center ">
        <div className=" cursor-pointer  mb-4 text-lg">Hakkımızda</div>
        <div>Who we are</div>
        <div>Career</div>
        <div className="flex space-x-3">
          <CiInstagram size={27} />
          <CiMail size={27} />
        </div>
        <div className="flex space-x-3">
          <CiFacebook size={27} />
          <CiYoutube size={27} />
        </div>
      </div>

      <div>
        <div className="mb-5 text-lg">Yardım</div>
        <div>Sık Sorulan Sorular</div>
        <div>Canlı Yardım</div>
        <div>Nasıl İade edebilirim</div>
        <div>Müşteri Temsilcisi</div>
      </div>

      <div>
        <div className="mb-5 text-lg">Kampanyalar</div>
        <div>En Sık Tüketilenler</div>
        <div>Hediyelik Eşyalar</div>
        <div>Fırsatlar</div>
        <div>Bu Ayın Kampanları</div>
      </div>
    </div>
  );
};

export default Footer;
