import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import searchIcon from "../public/searchIcon.png";
import tiktok from "../public/tiktok.svg";
import twitter from "../public/twitter.svg";
import discord from "../public/discord.svg";
import insta from "../public/insta.svg";
import threeLines from "../public/three-horizontal-lines-icon.svg";
import Cross from "../public/math-multiplication-icon.svg";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getPostTitles } from "../services";
import { useRouter } from "next/router";
import Link from "next/link";


const Header = () => {
const Router = useRouter();
  const [data,setData] = useState()
  const [hide, sethide] = useState(false);
  
  const clickThree = () => {
    document.body.style["overflow-y"] = "hidden";
    sethide(true);
  };
  const clickCross = () => {
    document.body.style["overflow-y"] = "scroll";
    sethide(false);
  };


  useEffect(() => {
    getPostTitles().then((result) => {
      console.log(result)
      setData(result)
    })
  }, []);


 const handleOnSearch = (string, results) => {
   // onSearch will have as the first callback parameter
   // the string searched and for the second the results.
   console.log(string, results);
 };

 const handleOnHover = (result) => {
   // the item hovered
   console.log(result);
 };

 const handleOnSelect = (item) => {
   // the item selected
    Router.push({
      pathname: "/article",
      query: { id: item.id },
    });
   console.log(item);
 };

 const handleOnFocus = () => {
   console.log("Focused");
 };

  
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="py-4 px-[6%]"
      >
        <div className=" font-akira4 tracking-widest bg-black -space-x-5 lg:flex hidden text-gray-400 lg:text-xs text-[0.5rem] font-extralight items-center justify-between">
          <div className="h-[36px] w-[126px] relative lg:text-[12px] text-[8px] flex flex-col justify-center cursor-pointer items-center ">
            <Image
              alt="img"
              src={logo}
              layout="intrinsic"
              objectfit="contain"
            />
          </div>
          <Link href="#latest">
            <p className="cursor-pointer text-white">LATEST</p>
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
          <div className=" rounded-full bg-regal-black flex justify-center items-center">
            {/* <Image
              alt="img"
              src={searchIcon}
              className="ml-2 cursor-pointe pr-2 border-r-2"
              layout="intrinsic"
              objectfit="contain"
            /> */}
            <div className="lg:w-72 w-24 h-fit z-[100]">
              <>
                <ReactSearchAutocomplete
                  styling={{
                    backgroundColor: "#202020",
                    border: "1px solid #595959",
                    color: "white",
                  }}
                  items={data}
                  fuseOptions={{ keys: ["title"] }}
                  resultStringKeyName="title"
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                />
              </>
            </div>
            {/* <p className="text-xl -mt-1 ml-2 font-extralight font-sans">|</p> */}
            {/* <Typeahead
              id="labelkey-example"
              labelKey={(data) => `${data.title}`}
              options={data}
              onChange={typeAheadChanged}
              placeholder=""
              className="p-3  z-[100]  font-poppins text-white relative bg-regal-black rounded-full"
              
            /> */}
            {/* <input className="p-3 relative bg-transparent" placeholder="" /> */}
          </div>
          <div className="flex space-x-2 ">
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
              className=" cursor-pointer"
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
      </div>
      <div className="lg:flex flex-col hidden">
        <hr className="border-[1px] border-[#232323]" />
      </div>

      <div className={hide ? "mb-5" : "hidden"}>
        <div className="flex p-5 justify-between cursor-pointer ">
          <Image
            alt="img"
            src={logo}
            height={100}
            width={100}
            className="justify-start items-start"
          />
          <Image
            alt="img"
            style={{ filter: "invert(1)" }}
            onClick={clickCross}
            src={Cross}
            height={40}
            width={40}
            className="bg-transparent cursor-pointer"
          />
        </div>
      </div>
      <div
        className={
          hide
            ? "lg:hidden flex flex-col justify-start items-center h-[100vh] space-y-3"
            : "hidden"
        }
      >
        <div className="text-gray-400 space-y-4  text-3xl">
          <Link href="#latest">
            <p className="cursor-pointer text-white mt-5">LATEST</p> <hr />
          </Link>
          <Link href="#GUIDES" onClick={clickCross}>
            <p className="cursor-pointer">GUIDES</p>
            <hr className="border border-[#3E3E3E]" />
          </Link>
          <Link href={"#interviews"} onClick={clickCross}>
            <p className="cursor-pointer">INTERVIEWS</p>
            <hr className="border border-[#3E3E3E]" />
          </Link>
          <Link href={"#EVENTS"} onClick={clickCross}>
            <p className="cursor-pointer">EVENTS</p>
            <hr className="border border-[#3E3E3E]" />
          </Link>
          <Link href={"#contact"} onClick={clickCross}>
            <p className="cursor-pointer">CONTACT</p>
            <hr className="border border-[#3E3E3E]" />
          </Link>
          {/* <Image
              alt="img"
              src={searchIcon}
              className="ml-2 cursor-pointer"
              width={20}
              height={10}
            /> */}
          <div className="w-72 h-fit z-[100]">
            <ReactSearchAutocomplete
              items={data}
              fuseOptions={{ keys: ["title"] }}
              resultStringKeyName="title"
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
            />

            {/* <p className="text-xl -mt-1 ml-2 font-extralight font-sans">|</p>
            <input
              size="15"
              className="my-2 -mx-10 relative bg-transparent inline-block"
              placeholder=""
            /> */}
          </div>
          <div className="flex space-x-4 justify-center items-center h-28">
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
              className=" cursor-pointer"
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
      </div>
      <div className={hide ? "hidden" : "bg-black lg:hidden  flex flex-col"}>
        <div className="flex justify-between p-5 cursor-pointer ">
          <Image alt="img" src={logo} height={100} width={100} />
          <Image
            alt="img"
            style={{ filter: "invert(1)" }}
            onClick={clickThree}
            src={threeLines}
            height={40}
            width={40}
            className="bg-transparent cursor-pointer"
          />
        </div>
        <hr className="border border-[#3E3E3E]" />
      </div>
    </>
  );
};

export default Header;
