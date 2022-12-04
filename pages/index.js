/** @format */

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import moment from "moment";


import { useRouter } from "next/router";

import rightArrow from "../public/images/rightarrow.png";
import CruelWar from "../public/images/image 25.png";
import playToearn from "../public/image 28.png";
import gameNFT from "../public/gameNFT.png";
import transition from "../public/image 36 (1).png";
import transitionPurple from "../public/purple-mix-back.png";
import transitionGolden from "../public/web-3-img-yellow.png";
import nftSection from "../public/images/image 32.png";
import gameBegin from "../public/images/image 34.png";
import prev from "../public/images/prev-3.svg";
import next from "../public/images/next-14.svg";
import lara from "../public/images/image 33.png";
import nftGame from "../public/images/image 39.png";
import gamesHub from "../public/images/image 45.png";
import inner1 from "../public/images/image 59.png";
import inner2 from "../public/images/image 60.png";
import inner3 from "../public/images/image 33.png";
import gsap from "gsap";
import { getRecentPosts } from "../services";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import { getPosts } from "../services";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const Router = useRouter();
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      // gsap.to("#outer", {
      //   scrollTrigger: {
      //     trigger: "#inner",
      //     pin: "#inner",
      //     pinSpacing: false,
      //     start: "top",
      //     markers: true,
      //     end: "bottom 70%",
      //     endTrigger: "#outer2",
      //   },
      // });
    }
  });
  const [rangeLatest, setRangeLatest] = useState(0);
  const [latest, setLatest] = useState();
  const [posts, setposts] = useState();
  const [recentPost, setRecentPost] = useState();
  useEffect(() => {
    const fetchRecentPosts = async () => {
      let temp = await getRecentPosts();
      setRecentPost(temp);
    };
    const fetchData = async () => {
      getPosts().then((temp) => {
        console.log(temp.category);
        //  temp.category.map((data, index) => {
        //     console.log(data.posts.reverse());
        //   });
        setposts(temp.category);
        setLatest(temp.category[1].posts.slice(rangeLatest, 4));
      });
    };
    if (!posts) {
      fetchData();
    }
    if (!recentPost) {
      fetchRecentPosts();
    }
  }, []);

  console.log(recentPost);
  const articlePush = (e) => {
    // Router.push("/article", {state: e.target.id});
    Router.push({
      pathname: "/article",
      query: { id: e.target.id },
    });
    console.log(e.target.id);
    console.log(e.target);
  };

  console.log(posts);

  const prevLatest = () => {
    console.log(rangeLatest);
    if (rangeLatest - 4 <= 0 || rangeLatest - 4 < 0) {
      setRangeLatest(posts[1].posts.length - 4);
      setLatest(posts[1].posts.slice(rangeLatest, rangeLatest + 4));
    } else {
      setRangeLatest(rangeLatest - 4);
      setLatest(posts[1].posts.slice(rangeLatest, rangeLatest + 4));
    }
  };
  const nextLatest = () => {
    setRangeLatest(rangeLatest + 4);
    console.log(rangeLatest);
    if (rangeLatest >= posts[1].posts.length - 4) {
      setRangeLatest(0);
    }
    setLatest(posts[1].posts.slice(rangeLatest, rangeLatest + 4));
  };

  return (
    <>
      <div
        style={{
          background: "linear-gradient(360deg, #232323 0%, #000000 100%)",
        }}
      >
        <Header />
        <div className="text-white flex flex-col justify-center">
          <div className="flex lg:flex-row flex-col mt-10 overflow-visible justify-center w-full px-[6%] items-center h-[50vh] lg:space-x-14 space-x-0 lg:space-y-0 space-y-5">
            <div className="lg:w-[70%] lg:block hidden w-[100%] lg:h-full overflow-hidden relative border-black border">
              <Image
                alt="img"
                src={CruelWar}
                layout="intrinsic"
                objectfit="contain"
              />
              <div className="absolute bottom-2 left-3 space-y-1">
                <p className="bg-[#F8D367] color-[#131313] font-akira text-xs cursor-pointer inline-block hover:opacity-50 text-black lg:p-2 p-1 ">
                  GAMES
                </p>
                <p className="lg:text-[18px] text-xs font-[600] font-poppins">
                  Mythical Games to Launch Gaming DAO With Major Web3 Players
                </p>
                <p className="text-[14px] font-[600] font-poppins">
                  Semon Demorio - October 13, 2022
                </p>
              </div>
            </div>
            <div className="flex flex-col  items-center lg:justify-between justify-self-auto lg:-space-y-0 space-y-5 h-full lg:w-[21.5rem] w-full">
              <div className="relative w-full  ">
                <Image
                  alt="img"
                  src={playToearn}
                  layout="intrinsic"
                  objectfit="contain"
                  // height={50}
                  // width={300}
                />
                <div className="absolute font-[800] font-akira tracking-tighter cursor-pointer text-[#131313] bottom-2 left-2  bg-[#A180B8] py-0 px-2">
                  <p className="opacity-90 mt-1 lg:block hidden">ADD</p>
                </div>
              </div>
              <div className="relative  w-[100%]  overflow-hidden">
                <Image
                  alt="img"
                  src={inner3}
                  layout="intrinsic"
                  objectfit="contain"
                  // height={200} width={500}
                />
                <div className="absolute bottom-2 left-2 font-bold ">
                  <p className="bg-[#F8D367] font-akira text-xs cursor-pointer inline-block hover:opacity-50 text-black p-1 ">
                    EVENTS
                  </p>
                  <p className="text-sm -mb-1">
                    CGC XII – The Leading Blockchain
                  </p>
                  <p> Gaming Conference</p>
                  <p className="text-xs"> Daniel Savali - September 27, 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative  flex w-full  lg:mt-10 mt-0 px-[6%] flex-col justify-center items-center">
            <Image alt="img" src={transition} height={100} />
            <div className="absolute ">
              <p className="lg:text-3xl md:text-2xl text-xs text-white  font-akira4">
                WEB3 GAMES ARE HERE TO STAY{" "}
                <span className="lg:inline-block md:inline-block font-poppins tracking-normal  hidden lg:text-lg text-sm ml-2 cursor-pointer bg-[#4F22C0] shadow-lg  hover:bg-transparent hover:border-2 rounded-full  lg:p-3 p-2">
                  <p className="px-5 text-[16px] font-poppins font-[600]">
                    {" "}
                    LEARN MORE{" "}
                  </p>
                </span>{" "}
              </p>
            </div>
            <div className="absolute font-[400] text-sm  font-akira tracking-tighter cursor-pointer text-[#131313] bottom-2 left-[7rem]  bg-white opacity-50 py-0 px-2">
              <p className="opacity-80 mt-1 lg:block hidden">ADD</p>
            </div>
            <div className="lg:hidden absolute top-36 flex flex-col justify-center items-center self-center content-center w-full md:hidden lg:p-3 p-2">
              <p className="text-[16px] p-1  font-poppins font-[600] rounded-full ml-2 cursor-pointer bg-[#4F22C0] shadow-lg">
                Learn More
              </p>
            </div>
          </div>

          <div className="text-white">
            <div className="mt-10 ">
              <div className="relative flex px-[6%] items-center w-full font-akira">
                <span className="flex-shrink mr-5 lg:text-[16px]  md:text-xl text-sm text-white">
                  {posts && posts[0].name.toUpperCase()}
                </span>
                {/* <div className="flex-grow border-t border-gray-400"></div> */}
                <div className="flex-grow border border-gray-400"></div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col items-center w-full px-[6%] justify-between mt-5 lg:space-y-0 md:space-y-0 space-y-10 lg:space-x-5 md:space-x-5 space-x-0 ">
                {posts &&
                  posts[0].posts.map((data, index) => (
                    <>
                      {index < 3 ? (
                        <div
                          id={data.id}
                          onClick={articlePush}
                          className="z-[100] relative cursor-pointer lg:w-[55vh] md:w-[100vh] w-[100%]"
                        >
                          <Image
                            id={data.id}
                            alt="img"
                            src={data.featuredImage.url}
                            layout="intrinsic"
                            objectfit="cover"
                            width={700}
                            height={700}
                          />
                          <div className="absolute -space-y-1 bottom-3 left-3">
                            <div className="font-akira font-[400] bg-[#F8D367] text-xs cursor-pointer inline-block text-black p-1 px-2 ">
                              GAMES
                            </div>
                            <p
                              id={data.id}
                              className="lg:text-sm py-2 text-xs font-extralight font-akira w-[100%]"
                            >
                              {data.title}
                            </p>
                            <p className="font-poppins text-[10px] font-[600]">
                              {data.author.name} -{" "}
                              <span className="font-[400] opacity-90">
                                {moment(data.createdAt).format("LL")}
                                {/* November 12, 2022 */}
                              </span>
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
              </div>
            </div>
            <div className="  text-white">
              <div className="mt-10 ">
                <div
                  id="latest"
                  className="relative flex px-[6%] items-center w-full font-akira"
                >
                  <span className="flex-shrink mr-5 lg:text-[16px]  md:text-xl text-sm text-white">
                    {posts && posts[1].name.toUpperCase()}
                  </span>
                  {/* <div className="flex-grow border-t border-gray-400"></div> */}
                  <div className="flex-grow border border-gray-400"></div>
                </div>
                <div
                  id="outer"
                  className="flex lg:flex-row  flex-col lg:justify-start justify-center items-center lg:items-start w-full px-[6%]  mt-5 lg:space-y-0 md:space-y-0 space-y-10 lg:space-x-10  space-x-0 "
                >
                  <div className="lg:border-r-4 space-y-5 border-regal-black lg:w-[70%] w-[100%]">
                    {latest &&
                      latest.map((data, index) => (
                        <>
                          <div
                            id={data.id}
                            onClick={articlePush}
                            className="cursor-pointer flex lg:flex-row flex-col justify-start lg:items-start items-center  lg:space-x-5 space-x-0 lg:space-y-0 space-y-5"
                          >
                            <div className="relative  overflow-hidden ">
                              <Image
                                id={data.id}
                                alt="img"
                                src={data.featuredImage.url}
                                layout="intrinsic"
                                className="border-regal-black border lg:h-[192px] lg:w-[255px] h-[40vh] w-[100%]"
                                objectfit="contain"
                                width={800}
                                height={800}
                              />
                              <div
                                id={data.id}
                                className="bg-[#F8D367] absolute bottom-3 left-3 text-xs  cursor-pointer
                                font-bold inline-block  text-black p-1   "
                              >
                                GAMES
                              </div>
                            </div>
                            <div id={data.id} className="lg:w-[60%] w-[100%]">
                              <p id={data.id} className="text-xl font-bold">
                                {data.title}
                              </p>
                              <p
                                id={data.id}
                                className="text-xl font-light opacity-50"
                              >
                                {moment(data.createdAt).format("LL")}
                              </p>
                              <p id={data.id} className="text-lg opacity-50">
                                {data.excerpt}
                              </p>
                            </div>
                          </div>
                        </>
                      ))}
                    <div className="flex text-3xl space-x-1 font-extrabold">
                      <div className="cursor-pointer mt-1">
                        <Image
                          style={{ filter: "invert(1)" }}
                          src={prev}
                          alt="prev"
                          onClick={prevLatest}
                          height={60}
                          width={50}
                        />
                      </div>
                      <div className="cursor-pointer">
                        <Image
                          style={{ filter: "invert(1)" }}
                          src={next}
                          alt="next"
                          onClick={nextLatest}
                          height={60}
                          width={60}
                        />
                      </div>
                      {/* <p className="cursor-pointer" onClick={prevLatest}>
                        {" "}
                        &#60;
                      </p> */}
                      {/* <p className="cursor-pointer" onClick={nextLatest}>
                        {" "}
                        &#62;{" "}
                      </p> */}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="space-y-5" id="inner">
                      <div className="relative lg:w-[40vh] w-full lg:mt-0 mt-10">
                        <Image
                          alt="img"
                          src={gamesHub}
                          layout="intrinsic"
                          objectfit="cover"
                        />
                        <div className="absolute flex top-0 left-5">
                          Is Thetan Arena the King of Web3 MOBAs?
                        </div>
                      </div>
                      <div className="relative lg:w-[40vh] w-full lg:mt-0 mt-10">
                        <Image
                          alt="img"
                          src={gamesHub}
                          layout="intrinsic"
                          objectfit="cover"
                        />
                        <div className="absolute flex top-0 left-5">
                          Is Thetan Arena the King of Web3 MOBAs?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="outer2"
                  className=" relative h-[30vh]  flex w-full px-[6%] flex-col justify-center items-center"
                >
                  <Image alt="img" src={transitionPurple} height={100} />
                  <div className="absolute ">
                    <p className="lg:text-3xl md:text-2xl text-xs text-white  font-akira4">
                      WEB3 GAMES ARE HERE TO STAY{" "}
                      <span className="lg:inline-block md:inline-block font-poppins tracking-normal  hidden lg:text-lg text-sm ml-2 cursor-pointer bg-white shadow-lg  hover:bg-transparent hover:border-2 rounded-full  lg:p-3 p-2">
                        <p className="px-5 text-[16px] text-[#352ECC]  font-poppins font-[600]">
                          {" "}
                          LEARN MORE{" "}
                        </p>
                      </span>{" "}
                    </p>
                  </div>
                  <div className="absolute font-[400] text-sm  font-akira tracking-tighter cursor-pointer text-[#131313] bottom-[4.5rem] left-[7rem]  bg-white opacity-50 py-0 px-2">
                    <p className="opacity-80 mt-1 lg:block hidden">ADD</p>
                  </div>
                  <div className="lg:hidden absolute top-36 flex flex-col justify-center items-center self-center content-center w-full md:hidden lg:p-3 p-2">
                    <p className="text-sm p-1 rounded-full ml-2 text-[#352ECC] cursor-pointer bg-[#4F22C0] shadow-lg">
                      Learn More
                    </p>
                  </div>
                </div>
                <div className="relative flex px-[6%] items-center w-full font-akira mt-10">
                  <span className="flex-shrink lg:tracking-widest  font-akira mr-2 lg:text-[16px]  md:text-sm text-xs text-[#FFFFFF]">
                    {posts && posts[2].name.toUpperCase()}
                  </span>
                  <div className="flex-grow border-t border-[##595959]"></div>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center lg:space-y-0 md:space-y-0 space-y-5 lg:space-x-12 md:space-x-12 space-x-0 mt-5 w-full px-[6%]">
                  {posts &&
                    posts[2].posts.map((data, index) =>
                      index < 2 ? (
                        <div
                          onClick={articlePush}
                          id={data.id}
                          className="relative cursor-pointer lg:w-[90vh] md:w-[90vh] w-[100%]   border border-black"
                        >
                          <Image
                            id={data.id}
                            alt="img"
                            src={data.featuredImage.url}
                            layout={"intrinsic"}
                            objectfit={"contain"}
                            width={800}
                            height={800}
                          />

                          <div
                            id={data.id}
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black  to-transparent z-10"
                          >
                            <p id={data.id} className="p-3">
                              {data.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
                <div className="w-full space-x-2 flex font-akira cursor-pointer text-xs relative tracking-widest my-3 px-[6%]">
                  <div> VIEW ALL </div>
                  <div className="relative lg:w-[2vw] w-[5vw] lg:mt-0 mt-0 cursor-pointer">
                    <Image
                      alt="img"
                      src={rightArrow}
                      layout="intrinsic"
                      objectfit="contain"
                    />
                  </div>
                </div>
                <div
                  id="interviews"
                  className="relative mt-10 flex px-[6%] items-center w-full font-akira"
                >
                  <span className=" font-akira mr-2 lg:text-[16px]  md:text-sm text-xs text-[#FFFFFF]">
                    {posts && posts[3].name.toUpperCase()}
                  </span>
                  <div className="flex-grow border-t border-[##595959]"></div>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center lg:space-y-0 md:space-y-0 space-y-5 lg:space-x-12 md:space-x-12 space-x-0 mt-5 w-full px-[6%]">
                  {posts &&
                    posts[3].posts.map((data, index) =>
                      index < 2 ? (
                        <div
                          id={data.id}
                          onClick={articlePush}
                          className="relative cursor-pointer lg:w-[90vh] md:w-[90vh] w-[100%]   border border-black"
                        >
                          <Image
                            id={data.id}
                            alt="img"
                            src={data.featuredImage.url}
                            layout={"intrinsic"}
                            objectfit={"contain"}
                            width={800}
                            height={800}
                          />

                          <div
                            id={data.id}
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black  to-transparent z-10"
                          >
                            <p id={data.id} className="p-3">
                              {data.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
                <div className="w-full space-x-2 flex font-akira cursor-pointer text-xs relative tracking-widest my-3 px-[6%]">
                  <div> VIEW ALL </div>
                  <div className="relative lg:w-[2vw] w-[5vw] lg:mt-0 mt-0 cursor-pointer">
                    <Image
                      alt="img"
                      src={rightArrow}
                      layout="intrinsic"
                      objectfit="contain"
                    />
                  </div>
                </div>
                <div className="relative mt-10  flex px-[6%] items-center w-full font-akira">
                  <span className="flex-shrink lg:tracking-widest font-akira mr-2 lg:text-[16px]  md:text-sm text-xs text-[#FFFFFF]">
                    {posts && posts[4].name.toUpperCase()}
                  </span>
                  <div className="flex-grow border-t border-[##595959]"></div>
                </div>
                <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center lg:space-y-0 md:space-y-0 space-y-5 lg:space-x-12 md:space-x-12 space-x-0 mt-5 w-full px-[6%]">
                  {posts &&
                    posts[4].posts.map((data, index) =>
                      index < 2 ? (
                        <div
                          id={data.id}
                          className="relative lg:w-[90vh] md:w-[90vh] w-[100%] cursor-pointer   border border-black"
                          onClick={articlePush}
                        >
                          <Image
                            id={data.id}
                            alt="img"
                            src={data.featuredImage.url}
                            layout={"intrinsic"}
                            objectfit={"contain"}
                            width={800}
                            height={800}
                          />
                          <div
                            id={data.id}
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black  to-transparent z-10"
                          >
                            <p id={data.id} className="p-3">
                              {data.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                </div>
                <div className="w-full space-x-2 flex font-akira cursor-pointer text-xs relative tracking-widest my-3 px-[6%]">
                  <div> VIEW ALL </div>
                  <div className="relative lg:w-[2vw] w-[5vw] lg:mt-0 mt-0 cursor-pointer">
                    <Image
                      alt="img"
                      src={rightArrow}
                      layout="intrinsic"
                      objectfit="contain"
                    />
                  </div>
                </div>
                <div className="relative  flex w-full  mt-10 px-[6%] flex-col justify-center items-center">
                  <Image alt="img" src={transitionGolden} height={100} />
                  <div className="absolute ">
                    <p className="lg:text-3xl md:text-2xl text-xs text-white  font-akira4">
                      WEB3 GAMES ARE HERE TO STAY{" "}
                      <span className="lg:inline-block md:inline-block font-poppins tracking-normal  hidden lg:text-lg text-sm ml-2 cursor-pointer bg-[#F8D367] shadow-lg  hover:bg-[#F8D370] hover:border-2 rounded-full  lg:p-3 p-2">
                        <p className="px-5 text-[16px] font-poppins font-[600] text-[#101010]">
                          {" "}
                          LEARN MORE{" "}
                        </p>
                      </span>{" "}
                    </p>
                  </div>

                  <div className="absolute font-[400] text-sm  font-akira tracking-tighter cursor-pointer text-[#131313] bottom-2 left-[7.2rem]  bg-white opacity-50 py-0 px-2">
                    <p className="opacity-80 mt-1 lg:block hidden">ADD</p>
                  </div>
                  <div className="lg:hidden absolute top-36 flex flex-col justify-center items-center self-center content-center w-full md:hidden lg:p-3 p-2">
                    <p className="text-sm p-1 text-black font-[600] rounded-full ml-2 cursor-pointer bg-[#F8D367] shadow-lg">
                      Learn More
                    </p>
                  </div>
                </div>
                {posts &&
                  posts.map((data, index) =>
                    index > 4 ? (
                      <>
                        <div className="mt-16 ">
                          <div
                            id={data.name.toUpperCase()}
                            className="relative flex px-[6%] items-center w-full font-akira"
                          >
                            <span className="flex-shrink mr-3 lg:text-[16px]  md:text-xl text-sm text-white">
                              {data.name.toUpperCase()}
                            </span>
                            {/* <div className="flex-grow border-t border-gray-400"></div> */}
                            <div className="flex-grow border border-[#595959]"></div>
                          </div>

                          <div className="flex lg:flex-row md:flex-row flex-col items-center w-full px-[6%] justify-center mt-5 lg:space-y-0 md:space-y-0 space-y-10 lg:space-x-5 md:space-x-5 space-x-0 ">
                            {data.posts.map((innerData, innerIndex) =>
                              innerIndex < 3 ? (
                                <>
                                  <div
                                    onClick={articlePush}
                                    id={innerData.id}
                                    className="cursor-pointer relative lg:w-[60vh] w-[100%]"
                                  >
                                    <Image
                                      id={innerData.id}
                                      alt="img"
                                      src={innerData.featuredImage.url}
                                      layout="intrinsic"
                                      objectfit="cover"
                                      width={600}
                                      height={600}
                                    />
                                    <div
                                      id={innerData.id}
                                      className="absolute -space-y-1 bottom-3 left-3"
                                    >
                                      <div
                                        id={innerData.id}
                                        className="bg-[#F8D367] text-xs  cursor-pointer tracking-wide font-bold inline-block  text-black p-1  "
                                      >
                                        GAMES
                                      </div>
                                      <p
                                        id={innerData.id}
                                        className="text-lg font-semibold w-[85%]"
                                      >
                                        {innerData.title}
                                      </p>
                                      <p id={innerData.id}>
                                        {innerData.author.name}
                                        <span
                                          id={innerData.id}
                                          className="ml-2"
                                        >
                                          -{" "}
                                          {moment(innerData.createdAt).format(
                                            "LL"
                                          )}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ""
                              )
                            )}
                          </div>
                        </div>
                        <div className="w-full mb-20 space-x-2 flex font-akira cursor-pointer text-xs relative tracking-widest my-3 px-[6%]">
                          <div> VIEW ALL </div>
                          <div className="relative lg:w-[2vw] w-[5vw] lg:mt-0 mt-0 cursor-pointer">
                            <Image
                              alt="img"
                              src={rightArrow}
                              layout="intrinsic"
                              objectfit="contain"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )
                  )}
                {/*  */}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
