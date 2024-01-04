'use client'
import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const clicked = ()=>{
    console.log("hello world clicked")
}
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <div
            onClick={(clicked)}
            //   href="https://github.com/axat0207"
            //   target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
  href="https://www.instagram.com/axxat18/"
  target="_blank"
  className="flex flex-row items-center my-[15px] cursor-pointer"
>
  <RxInstagramLogo />
  <span className="text-[15px] ml-[6px]">Instagram</span>
</a>
            <a
              href="https://twitter.com/Axat_02"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akshat-agrawal-011675218/"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a
              href="https://drive.google.com/file/d/12YdLC-nZJgXHWAKHkqUo8HXxiEKSzXqP/view"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">View Resume</span>
            </a>
            <a
              href=""
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>
            <Link
  href="mailto:axxatagrawal@gmail.com"
  target="_blank"
  className="flex flex-row items-center my-[15px] cursor-pointer"
>
  <span className="text-[15px] ml-[6px]">
    axxatagrawal@gmail.com
  </span>
</Link>

          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Akshat Agrawal 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
