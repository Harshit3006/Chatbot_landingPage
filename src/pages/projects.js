import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl relative p-12 rounded-br-2xl">
      <div className=" absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl " />

    <TransitionEffect></TransitionEffect>
      <Link
        href={link}
        target={"_blank"}
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className=" w-full h-auto"
        whileHover={{scale: "1.05"}}
        transition={{duration: "0.2"}}></FramerImage>
      </Link>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6">
        <span className=" text-pink-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full font-bold text-4xl text-left">{title}</h2>
        </Link>
        <p className=" my-2 font-medium text-black pr-2">{summary}</p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target={"_blank"} className=" w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className=" ml-4 rounded-lg p-2 bg-black text-white text-lg px-6 font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className=" w-full flex flex-col items-center justify-center border border-solid border-black bg-white rounded-2xl p-6 relative">
      <div className=" absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl " />

      <Link
        href={link}
        target={"_blank"}
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className=" w-full h-auto"
        whileHover={{scale: "1.05"}}
        transition={{duration: "0.2"}}></FramerImage>
      </Link>

      <div className=" w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-pink-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" my-2 w-full font-bold text-3xl text-left">{title}</h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className=" w-8 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Project Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className=" w-full mb-20 flex flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" mb-16"
          />

          <div className=" grid grid-cols-12 gap-24 gap-y-32">
            <div className=" col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                      It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                      local currency."
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></FeaturedProject>
            </div>

            <div className=" col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></Project>
            </div>

            <div className=" col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></Project>
            </div>

            <div className=" col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                      It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                      local currency."
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></FeaturedProject>
            </div>

            <div className=" col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></Project>
            </div>

            <div className=" col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              ></Project>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
