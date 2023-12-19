'use client'
import { FOOTER_ICONS, FOOTER_MOBILE_TEXT, FOOTER_TEXT } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import CustomFilter from "./CustomFilter";
const Footer = () => {
 
  return (
    <footer className="pt-[100px] pb-[40px]  bg-primary-3  ">
      <div className="container flex-between gap-[30px] flex-col md:flex-row">
        <div className="flex-between gap-4 flex-col w-full md:w-1/2">
          <div className="flex-1">
            <p className="text-dark  medium-22 tracking-[2px] uppercase">
              Luxury RENTALS
            </p>
            <p className="text-primary-1 regulary-18 mt-5 ">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut{" "}
            </p>
          </div>

          <div className="text-start hidden md:flex-start   gap-5 ">
            {FOOTER_TEXT.map((item, index) => (
              <p className="text-dark regular-14 capitalize" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="text-start  text-dark max-md:w-full " >
          <p className="bold-18 ">Connect with us</p>
          <p className="regular-16 py-2">+00 000 000 00</p>
          <p className="regulary-16">info@luxuryrentals.com</p>

          <div className="flex items-center  gap-4 pt-3 ">
            {FOOTER_ICONS.map(({ alt, icon }) => (
              <Image  className="cursor-pointer" src={icon} alt={alt} width={26} height={20} />
            ))}
          </div>


                  <div className="flex gap-4 md:hidden">
                    {FOOTER_MOBILE_TEXT.map((item , index) => (
                       <p className=" regular-16 capitalize pt-4 cursor-pointer " key={index}>
                       {item}
                     </p>
                    ) )}
                  </div>

                  <p className="pt-6 regular-14 leading-[24px]" >
                  Luxury rentals. | © All rights reserved 2022-2023
                  </p>


        </div>


                      


      </div>
    </footer>
  );
};

export default Footer;
