import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    // console.log(router.asPath)
  return(
    <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={` h-[1px] inline-block bg-black -bottom-0.5 left-0 absolute 
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>

    </Link>
  )
};

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
          <CustomLink href="/" className="mr-4" title="Home"></CustomLink>
          <CustomLink href="/about" className="mx-4" title="About"></CustomLink>
          <CustomLink href="https://faraz-chatbot.vercel.app/" className="mx-4" title="Chatbot
          "></CustomLink>
          {/* <CustomLink href="/article" className="ml-4" title="Aricles"></CustomLink> */}
        </nav>

        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo></Logo>
        </div>
        <nav className="flex item-center justify-center flex-wrap">
          {/* <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mr-3 "  whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <TwitterIcon></TwitterIcon>
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mx-3 " whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <GithubIcon></GithubIcon>
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mx-3 " whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <LinkedInIcon></LinkedInIcon>
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} className="w-6 mx-3 " whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <PinterestIcon></PinterestIcon>
          </motion.a>
          <motion.a href="https://twitter.com" target={"_blank"} className="w-6 ml-3 " whileHover={{y:-2}} whileTap={{scale:0.9}}>
            <DribbbleIcon></DribbbleIcon>
          </motion.a> */}

          <button className=" mx-3  bg-black rounded-lg p-2.5 text-white  " whileHover={{y:-2}} whileTap={{scale:0.9}}>
            Login/signup
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
