import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import gameNFT from "../public/gameNFT.png";
import CruelWar from "../public/images/image 25.png";
import lara from "../public/images/image 33.png";
import playToearn from "../public/image 28.png";
import inner3 from "../public/images/image 33.png";
import inner4 from "../public/images/image 39.png";
import inner5 from "../public/images/Rectangle 689.png";
import linkedln from "../public/images/Group 1000001839.png";
import insta from "../public/images/Group 1000001840.png";
import fb from "../public/images/Vector-3.png";
import twitter from "../public/images/Vector.png";
import discord from "../public/images/Vector-1.png";
import yt from "../public/images/Vector-2.png";
import rightArrow from "../public/images/rightarrow.png";
import leftArrow from "../public/images/leftArrow.png";
import axie from "../public/images/image 51_1.png";
import nfthorse from "../public/images/image 53.png";
import gameController from "../public/images/image 54.png";
import { getPostByID, getSimilarPosts } from "../services";
import moment from "moment";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "react-router-dom";

import { getRecentPosts } from "../services";

gsap.registerPlugin(ScrollTrigger);
const article = () => {
  const Router = useRouter();
  useEffect(() => {
    if (!window.matchMedia("(max-width: 768px)").matches) {
      // gsap.to("#outer", {
      //   scrollTrigger: {
      //     trigger: "#outer",
      //     pin: "#inner",
      //     start: "top top",
      //     markers: false,
      //     end: "bottom 130%",
      //   },
      // });
    }
  });

  const [totalSoFar, setTotalSoFar] = useState(0);

  const [posts, setposts] = useState([]);
  const [recentPost, setRecentPost] = useState([]);
  const [similarPosts, setSimilarPosts] = useState([]);
  const [index, setindex] = useState(0);
  useEffect(() => {
    console.log(Router.query.id);
    getPostByID(Router.query.id).then((result) => {
      console.log(result.posts[0]);
      setposts(result.posts[0]);
      if (result.posts[0].content != undefined) {
        document.getElementById("paragraph").innerHTML =
          result.posts[0].content.html;
        console.log(result.posts[0].excerpt.length % 50);
        setTotalSoFar(result.posts[0].excerpt.length % 50);
      }

      console.log(result.posts[0].category[0].name);
      getSimilarPosts(result.posts[0].category[0].name).then((result) => {
        console.log(result);
        setSimilarPosts(result);
      });
    });

    getRecentPosts().then((result) => {
      console.log(result);
      setRecentPost(result);
    });
  }, [Router]);

  console.log(recentPost);
  console.log(similarPosts);
  const articlePush = (e) => {
    // Router.push("/article", {state: e.target.id});
    Router.push({
      pathname: "/article",
      query: { id: e.target.id },
    });
    console.log(e.target.id);
    console.log(e.target);
  };
  const nextArticle = () => {
    setindex(index + 1);
    updateArticle(index);
  };
  const prevArticle = () => {
    if (index != 0) {
      setindex(index - 1);
      updateArticle(index);
    } else {
      setindex(recentPost.length - 1);
      updateArticle(index);
    }
  };
  const updateArticle = (number) => {
    console.log(number);
    setposts(recentPost[number]);
    console.log(posts);
    if (posts != undefined) {
      document.getElementById("paragraph").innerHTML = posts.content.html;
      console.log(posts.excerpt.length % 50);
      setTotalSoFar(posts.excerpt.length % 50);
    }

    console.log(posts);
  };

  return (
    <div
      className="h-auto"
      style={{
        background: "linear-gradient(360deg, #232323 0%, #000000 100%)",
      }}
    >
      <Header />
      <div className="flex lg:flex-col flex-col mb-24 lg:space-x-5 space-x-0 mt-16 text-white w-full h-full px-[6%]">
        <div className="lg:w-[48%] ml-5 w-[100%]">
          <div className="font-poppin text-[#595959] font-extralight">
            {posts && moment(posts.createdAt).format("LL")}
          </div>
          <div className="lg:w-[100%] w-[100%] tracking-widest font-poppin lg:text-xl text-sm">
            {posts && posts.excerpt}
          </div>
          <div className="flex space-x-2 mt-3">
            <div className="bg-[#D8D865] text-xs animate-pulse font-poppins  cursor-pointer tracking-wide font-bold inline-block  text-black p-1 lg:px-2  opacity-100 hover:opacity-50 hover:rounded-none">
              GAMES
            </div>
            <div className="bg-[#D8D865] text-xs animate-pulse font-poppins  cursor-pointer tracking-wide font-bold inline-block  text-black p-1 lg:px-2 opacity-100 hover:opacity-50 hover:rounded-none">
              GUIDES
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-8 space-x-0 mt-10">
          <div className="lg:w-[60%] w-[100%]">
            <div className="w-[100%] mt-0 flex justify-center items-center lg:h-96 h-44 overflow-hidden relative ">
              <Image
                alt="img"
                className="lg:scale-[2.5] scale-125"
                src={CruelWar}
                layout="intrinsic"
                objectfit="contain"
              />
            </div>
            <div className="flex mt-10">
              <div className="space-y-5 opacity-80 text-sm color-[#9E9E9E]">
                <div>
                  It is often the case that the simplest ideas turn into the
                  most impactful ones and cause you to wonder why you didn’t
                  think of them. Well, GamerGains is a simple idea and one I
                  wondered why I hadn’t thought of, but will it be great?
                </div>
                <div>
                  We first reported on GamerGains at the start of the year after
                  their successful $5.8m seed round, including big-name
                  investors such as Winklevoss Capital and FTX. So, what is
                  GamerGains? Well, I was fortunate enough to be invited to the
                  closed beta, so here is an overview.
                </div>
              </div>
            </div>
            <div className="text-xl mt-5 tracking-wider  text-white font-bold">
              {posts && posts.title}
            </div>
            <div className=" mt-5 w-[100%] overflow-hidden relative border-black border">
              <Image
                alt="img"
                src={posts.featuredImage && posts.featuredImage.url}
                layout="intrinsic"
                objectfit="contain"
                width={800}
                height={800}
              />
            </div>
            <div className=" mt-10">
              <div
                id="paragraph"
                className="space-y-5 opacity-80 text-sm  text-[#9E9E9E]"
              ></div>
            </div>
          </div>
          <div className="lg:w-[40%] w-[100%]">
            <div id="inner" className="lg:mt-0 mt-10 relative">
              <div className="h-96 space-y-5">
                <div className="relative overflow-hidden">
                  <Image
                    alt="img"
                    width={600}
                    src={playToearn}
                    className="lg:w-[100%] h-[50%] object-center overflow-hidden"
                  />
                  <div className="absolute font-[800] font-akira tracking-tighter cursor-pointer text-[#131313] bottom-4 left-2  bg-[#A180B8] py-0 px-2">
                    <p className="opacity-90 mt-1">ADD</p>
                  </div>
                </div>
                <div className="relative h-[95rem] overflow-hidden">
                  <Image
                    alt="img"
                    src={gameNFT}
                    className="lg:h-[13.2%] lg:w-[100%] h-44 lg:mt-0 mt-0 object-center overflow-hidden"
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
                {recentPost &&
                  recentPost.map((data) => (
                    <div
                      id={data.id}
                      onClick={articlePush}
                      key={data.id}
                      className="flex lg:flex-row flex-col cursor-pointer"
                    >
                      <div className="p-1 space-y-3" id={data.id}>
                        <div
                          className="text-white font-bold tracking-wider font-poppins"
                          id={data.id}
                        >
                          {data.title}
                        </div>
                        <div className="text-[#595959]">
                          {" "}
                          {moment(data.createdAt).format("LL")}
                        </div>
                      </div>
                      <div className="relative lg:w-[70%] w-[100%] border">
                        {" "}
                        <Image
                          id={data.id}
                          alt="img"
                          src={data.featuredImage.url}
                          layout="intrinsic"
                          objectfit="contain"
                          width={400}
                          height={400}
                          className="h-[100%] w-[100%]"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lg:w-[48%] w-[100%]">
          <div className="font-poppin text-[#595959] font-extralight">
            {posts && moment(posts.createdAt).format("LL")}
          </div>
          <div className="lg:w-[100%] w-[100%] tracking-widest font-poppin lg:text-xl text-sm">
            {posts && posts.excerpt}
          </div>
          <div className="flex space-x-2 mt-3">
            <div className="bg-[#D8D865] text-xs animate-pulse font-poppins  cursor-pointer tracking-wide font-bold inline-block  text-black p-1 lg:px-2  opacity-100 hover:opacity-50 hover:rounded-none">
              GAMES
            </div>
            <div className="bg-[#D8D865] text-xs animate-pulse font-poppins  cursor-pointer tracking-wide font-bold inline-block  text-black p-1 lg:px-2 opacity-100 hover:opacity-50 hover:rounded-none">
              GUIDES
            </div>
          </div>
          <div className="w-[100%] mt-5 flex justify-center items-center lg:h-96 h-44 overflow-hidden relative ">
            <Image
              alt="img"
              className="lg:scale-[2.5] scale-125"
              src={CruelWar}
              layout="intrinsic"
              objectfit="contain"
            />
          </div>
          <div className="flex mt-10">
            <div className="space-y-5 opacity-80 text-sm color-[#9E9E9E]">
              <div>
                It is often the case that the simplest ideas turn into the most
                impactful ones and cause you to wonder why you didn’t think of
                them. Well, GamerGains is a simple idea and one I wondered why I
                hadn’t thought of, but will it be great?
              </div>
              <div>
                We first reported on GamerGains at the start of the year after
                their successful $5.8m seed round, including big-name investors
                such as Winklevoss Capital and FTX. So, what is GamerGains?
                Well, I was fortunate enough to be invited to the closed beta,
                so here is an overview.
              </div>
            </div>
          </div>
          <div className="text-xl mt-5 tracking-wider  text-white font-bold">
            {posts && posts.title}
          </div>
          <div className=" mt-5 w-[100%] overflow-hidden relative border-black border">
            <Image
              alt="img"
              src={posts.featuredImage && posts.featuredImage.url}
              layout="intrinsic"
              objectfit="contain"
              width={800}
              height={800}
            />
          </div>
          <div className=" mt-10">
            <div
              id="paragraph"
              className="space-y-5 opacity-80 text-sm  text-[#9E9E9E]"
            ></div>
          </div>
        </div> */}
        {/* <div id="outer" className="relative flex flex-col lg:w-[40%] w-[100%]">
          <div id="inner" className="lg:absolute lg:mt-0 mt-10 relative">
            <div className="h-96">
              <div className="relative lg:h-[50%] h-36 ">
                <Image
                  alt="img"
                  width={600}
                  src={playToearn}
                  layout="intrinsic"
                  objectfit="contain"
                />
                <div className="absolute font-[800] font-akira tracking-tighter cursor-pointer text-[#131313] bottom-4 left-2  bg-[#A180B8] py-0 px-2">
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
              {recentPost &&
                recentPost.map((data) => (
                  <div
                    id={data.id}
                    onClick={articlePush}
                    key={data.id}
                    className="flex lg:flex-row flex-col cursor-pointer"
                  >
                    <div className="p-1 space-y-3" id={data.id}>
                      <div
                        className="text-white font-bold tracking-wider font-poppins"
                        id={data.id}
                      >
                        {data.title}
                      </div>
                      <div className="text-[#595959]">
                        {" "}
                        {moment(data.createdAt).format("LL")}
                      </div>
                    </div>
                    <div className="relative lg:w-[70%] w-[100%] border">
                      {" "}
                      <Image
                        id={data.id}
                        alt="img"
                        src={data.featuredImage.url}
                        layout="intrinsic"
                        objectfit="contain"
                        width={400}
                        height={400}
                        className="h-[100%] w-[100%]"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> */}
      </div>
      <div className="text-white flex lg:flex-row flex-col lg:space-x-5 space-x-0 mb-10 lg:justify-start lg:items-start justify-center items-center w-full px-[6%]">
        <div className="relative flex flex-col justify-center items-center lg:w-[18vh] w-[100%]">
          <Image
            alt="img"
            src={posts.author && posts.author.featuredImage.url}
            layout="intrinsic"
            objectfit="contain"
            width={200}
            height={200}
          />
        </div>
        <div className="space-y-4 flex flex-col lg:justify-start lg:items-start justify-center items-center">
          <div className="font-poppins  text-xl">
            {posts.author && posts.author.name}
          </div>
          <div className="lg:w-[60%] w-[100%] text-sm text-[#595959]">
            {posts.author && posts.author.description}
          </div>
          <div className="flex space-x-4">
            {posts.author &&
              (posts.author.youtube != undefined ? (
                <a target="_blank" href={posts.author.youtube}>
                  <Image alt="img" src={yt} />
                </a>
              ) : (
                ""
              ))}
            {posts.author &&
              (posts.author.facebook != undefined ? (
                <a target="_blank" href={posts.author.facebook}>
                  <Image alt="img" src={fb} />
                </a>
              ) : (
                ""
              ))}
            {posts.author &&
              (posts.author.linkedln != undefined ? (
                <a target="_blank" href={posts.author.linkedln}>
                  <Image alt="img" src={linkedln} />
                </a>
              ) : (
                ""
              ))}
            {posts.author &&
              (posts.author.instagram != undefined ? (
                <a target="_blank" href={posts.author.instagram}>
                  <Image alt="img" src={insta} />
                </a>
              ) : (
                ""
              ))}
            {posts.author &&
              (posts.author.discord != undefined ? (
                <a target="_blank" href={posts.author.discord}>
                  <Image alt="img" src={discord} />
                </a>
              ) : (
                ""
              ))}
            {posts.author &&
              (posts.author.twitter != undefined ? (
                <a target="_blank" href={posts.author.twitter}>
                  <Image alt="img" src={twitter} />
                </a>
              ) : (
                ""
              ))}
          </div>
        </div>
      </div>
      <div className="px-[6%] w-full my-5">
        <div className="flex-grow lg:mr-28 mr-0 border border-[#595959]  mb-10"></div>
        <div className="flex justify-between text-white font-akira">
          <div className="flex cursor-pointer" onClick={prevArticle}>
            <div className="relative lg:w-[2vw] w-[5vw] lg:mt-1 mt-0 cursor-pointer">
              <Image
                alt="img"
                src={leftArrow}
                layout="intrinsic"
                objectfit="contain"
              />
            </div>
            <span className="ml-2 cursor-pointer lg:text-xl md:text-sm text-[0.5rem]">
              PREVIOUS ARTICLE
            </span>
          </div>
          <div
            onClick={nextArticle}
            className="flex lg:mr-28 mr-0 cursor-pointer"
          >
            <div className="mr-2 lg:text-xl cursor-pointer md:text-sm text-[0.5rem]">
              NEXT ARTICLE
            </div>
            <div className="relative lg:w-[2vw] w-[5vw] lg:mt-1 mt-0 cursor-pointer">
              <Image
                alt="img"
                src={rightArrow}
                layout="intrinsic"
                objectfit="contain"
              />
            </div>
          </div>
        </div>
        <div className="font-akira text-xl text-white mt-32">
          RELATED ARTICLES
        </div>
        <div className="flex mt-5 space-x-5">
          {similarPosts &&
            similarPosts.map((data) => (
              <div
                onClick={articlePush}
                className="relative w-[50vh] cursor-pointer"
                id={data.id}
              >
                <Image
                  id={data.id}
                  alt="img"
                  src={data.featuredImage.url}
                  layout="intrinsic"
                  objectfit="contain"
                  height={800}
                  width={800}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default article;
