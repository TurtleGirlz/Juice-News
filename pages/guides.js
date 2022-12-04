import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import gameNFT from "../public/gameNFT.png";
import CruelWar from "../public/images/image 25.png";
import lara from "../public/images/image 33.png";
import playToearn from "../public/image 28.png";
import inner3 from "../public/images/image 33.png";
import inner4 from "../public/images/image 39.png";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const guides = () => {
  useEffect(() => {
    // if (!window.matchMedia("(max-width: 768px)").matches) {
    //   gsap.to("#outer", {
    //     scrollTrigger: {
    //       trigger: "#outer",
    //       pin: "#inner",
    //       start: "top top",
    //       markers: false,
    //       end: "bottom 145%",
    //     },
    //   });
    // }
  });
  return (
    <div
      className="h-auto"
      style={{
        background: "linear-gradient(180deg, #1D1D1D 1.49%, #000000 88.55%)",
      }}
    >
      <Header/>
      <div className="flex lg:flex-row flex-col mb-24 lg:space-x-5 space-x-0 mt-16 text-white w-full h-full px-[10%]">
        <div className="lg:w-[48%] w-[100%]">
          <div className="lg:w-[100%] w-[100%]  font-akira lg:text-xl text-sm">
            Guides
          </div>
          <div className="font-poppin text-[#9E9E9E] font-extralight">
            It is often the case that the simplest ideas turn into the most
            impactful ones and cause you to wonder.
          </div>
          <div className="w-[100%] mt-5 flex justify-center items-center lg:h-96 h-44 overflow-hidden relative ">
            <Image
              alt="img"
              className="lg:scale-[2.5] scale-125"
              src={CruelWar}
              layout="intrinsic"
              objectfit="contain"
            />
            <div className="absolute bottom-2 left-2 w-[90%]">
              <div className="text-white lg:text-xl text-xs font-poppins">
                Mythical Games to Launch Gaming DAO With Major Web3 Players
              </div>
              <div className="text-[#595959] text-sm">October 13, 2022</div>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="space-y-5 opacity-80 text-sm color-[#9E9E9E]">
              <div>
                It is often the case that the simplest ideas turn into the most
                impactful ones and cause you to wonder why you didn’t think of
                them. Well, GamerGains is a simple idea and one I wondered why I
                hadn’t thought of, but will it be great?
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-10 lg:space-y-0 space-y-2 lg:space-x-5 space-x-0">
            <div className="relative lg:w-[80%] w-[100%]">
              <Image
                alt="img"
                src={inner4}
                objectfit="contain"
                layout="intrinsic"
              />
            </div>
            <div className="">
              <div className="font-poppins text-lg font-bold">
                MetalCore Open World Alpha to Launch October 13th!
              </div>
              <div className="text-[#595959] text-lg">October 13, 2022</div>
              <div className="text-sm">
                Sometimes games pop up on Fractal's tournament schedule I've
                never heard about, which was the case for the game.
              </div>
            </div>
          </div>

          <div className="flex text-5xl font-bold mt-5">
            <div className="cursor-pointer">&#60;</div>
            <div className="flex mt-[0.7rem] text-3xl">
              <div className="cursor-pointer ">1</div>
              <div className="cursor-pointer opacity-50  ">2</div>
              <div className="cursor-pointer opacity-50 ">3</div>
            </div>
            <div className="cursor-pointer">&#62;</div>
          </div>
        </div>
        <div id="outer" className="relative lg:w-[40%] w-[100%]">
          <div
            id="inner"
            className="lg:absolute lg:mt-0 mt-10 relative lg:top-[6rem] top-0"
          >
            <div className="h-96">
              <div className="relative lg:h-[50%] h-36 ">
                <Image
                  alt="img"
                  width={600}
                  src={playToearn}
                  layout="intrinsic"
                  objectfit="contain"
                />
                <div
                  style={{ fontWeight: "6.56px" }}
                  className="absolute font-[800] font-akira tracking-tighter cursor-pointer text-[#131313] bottom-4 left-2  bg-[#A180B8] py-0 px-4"
                >
                  <p className="opacity-90 mt-1">ADD</p>
                </div>
              </div>
              <div className="relative lg:h-[50%] h-36 lg:mt-0 mt-0 overflow-hidden">
                <Image
                  alt="img"
                  src={gameNFT}
                  width={550}
                  layout="intrinsic"
                  objectfit="contain"
                />
              </div>
            </div>
            <div className="w-[100%] my-10">
              <div className="relative flex  items-center w-full">
                <div className="flex-grow border border-gray-400"></div>
                <span className="flex-shrink ml-2 tracking-wider font-akira font-bold lg:text-xl md:text-xl text-sm text-white">
                  LATEST
                </span>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex lg:flex-row flex-col">
                <div className="p-1 space-y-3">
                  <div className="text-white font-bold tracking-wider font-poppins">
                    MetalCore Open World Alpha to Launch October 13th!
                  </div>
                  <div className="text-[#595959]">October 13, 2022</div>
                </div>
                <div className="relative lg:w-[60%] w-[100%] border">
                  <Image
                    alt="img"
                    src={inner4}
                    layout="intrinsic"
                    objectfit="contain"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="p-1 space-y-3">
                  <div className="text-white font-bold tracking-wider font-poppins">
                    MetalCore Open World Alpha to Launch October 13th!
                  </div>
                  <div className="text-[#595959]">October 13, 2022</div>
                </div>
                <div className="relative lg:w-[60%] w-[100%] border">
                  <Image
                    alt="img"
                    src={inner4}
                    layout="intrinsic"
                    objectfit="contain"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col">
                <div className="p-1 space-y-3">
                  <div className="text-white font-bold tracking-wider font-poppins">
                    MetalCore Open World Alpha to Launch October 13th!
                  </div>
                  <div className="text-[#595959]">October 13, 2022</div>
                </div>
                <div className="relative lg:w-[60%] w-[100%] border">
                  <Image
                    alt="img"
                    src={inner4}
                    layout="intrinsic"
                    objectfit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default guides;
