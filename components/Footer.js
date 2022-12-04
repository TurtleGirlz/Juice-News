import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import tiktok from "../public/tiktok.svg";
import twitter from "../public/twitter.svg";
import discord from "../public/discord.svg";
import insta from "../public/insta.svg";

const Footer = () => {
  return (
    <div
      className="bg-regal-black"
      style={{
        background:
          "radial-gradient(104.78% 125.31% at 46.39% 0%, #232323 0%, #000000 100%)",
      }}
    >
      <div
        id="contact"
        className="flex items-center flex-col justify-center w-full h-fit px-[10%]"
      >
        <div className="mt-16 cursor-pointer">
          <Image alt="img" src={logo} height={80} width={260} />
        </div>
        <div className="lg:flex hidden items-center justify-between w-full px-[.5%] h-fit mt-10 mb-5">
          <div className="text-white flex space-x-5">
            <Link href="#latest">
              <p className="cursor-pointer">LATEST</p>
            </Link>
            <Link href="#GUIDES">
              <p className="cursor-pointer">GUIDES</p>
            </Link>
            <Link href={"#interviews"}>
              <p className="cursor-pointer">INTERVIEWS</p>
            </Link>
            <Link href={"#EVENTS"}>
              <p className="cursor-pointer">EVENTS</p>
            </Link>
            <Link href={"#contact"}>
              <p className="cursor-pointer">CONTACT</p>
            </Link>
            {/* <p className="cursor-pointer">LATEST</p>
            <p className="cursor-pointer">GUIDES</p>
            <p className="cursor-pointer">INTERVIEWS</p>
            <p className="cursor-pointer">EVENTS</p>
            <p className="cursor-pointer">CONTACT</p> */}
          </div>
          <div className="flex space-x-4">
            <Image
              alt="img"
              src={twitter}
              height={40}
              width={40}
              className="cursor-pointer"
            />

            <Image
              alt="img"
              src={insta}
              height={40}
              width={40}
              className=" cursor-pointer "
            />
            <Image
              alt="img"
              src={tiktok}
              height={40}
              width={40}
              className="cursor-pointer"
            />
            <Image
              alt="img"
              src={discord}
              height={40}
              width={40}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col  lg:hidden items-center justify-between w-full px-[.5%] h-fit mt-10 mb-5">
          <div className="text-white flex flex-col space-y-3 text-3xl underline">
            <Link href="#latest">
              <p className="cursor-pointer">LATEST</p>
            </Link>
            <Link href="#GUIDES">
              <p className="cursor-pointer">GUIDES</p>
            </Link>
            <Link href={"#interviews"}>
              <p className="cursor-pointer">INTERVIEWS</p>
            </Link>
            <Link href={"#EVENTS"}>
              <p className="cursor-pointer">EVENTS</p>
            </Link>
            <Link href={"#contact"}>
              <p className="cursor-pointer">CONTACT</p>
            </Link>
          </div>
          <div className="flex space-x-4 mt-10">
            <Image
              alt="img"
              src={twitter}
              height={40}
              width={40}
              className="cursor-pointer"
            />

            <Image
              alt="img"
              src={insta}
              height={40}
              width={40}
              className=" cursor-pointer "
            />
            <Image
              alt="img"
              src={tiktok}
              height={40}
              width={40}
              className="cursor-pointer"
            />
            <Image
              alt="img"
              src={discord}
              height={40}
              width={40}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full my-10 h-[1px] bg-white"></div>
        <div className="flex justify-center text-base mb-10 items-center text-white">
          ©️ 2022 The Juice Team, All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
