import React from "react";

import FirstGirlModal from "../models/FirstGirlModal";
import SecondGirlModal from "../models/SecondGirlModal";
import ThirdGirlModal from "../models/ThirdGirlModal";
import FourthGirlModal from "../models/FourthGirlModal";
import BlueHeadPhoneModel from "../models/BlueHeadPhone";
import Footer from "../components/Footer";

const ArtistPage = () => {
  const models = [
    { component: <FirstGirlModal /> },
    { component: <SecondGirlModal /> },
    { component: <ThirdGirlModal /> },
    { component: <FourthGirlModal /> },
    { component: <BlueHeadPhoneModel /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Custom layout rows */}
      <div className="flex flex-wrap flex-col gap-8 items-center">
        {/* First row - 2 items */}
        <div className="flex gap-8">
          {models.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-red-900 rounded-xl p-4 flex flex-col items-center"
            >
              <div className="w-[30vw] h-[300px]">{item.component}</div>
              <h3 className="text-white mt-4 text-xl font-semibold">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

        {/* Second row - 2 items */}
        <div className="flex gap-8">
          {models.slice(2, 4).map((item, index) => (
            <div
              key={index + 2}
              className=" bg-cyan-700 rounded-xl p-4 flex flex-col items-center"
            >
              <div className="w-[30vw] h-[300px]">{item.component}</div>
              <h3 className="text-white mt-4 text-xl font-semibold">
                {item.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Third row - 1 item centered */}
        <div className="flex justify-center">
          <div className=" rounded-xl p-4 flex flex-col items-center">
            <div className="w-[30vw] h-[300px]">{models[4].component}</div>
            <h3 className="text-white mt-4 text-xl font-semibold">
              {models[4].label}
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistPage;
