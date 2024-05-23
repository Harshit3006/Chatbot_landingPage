import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  function handleMouse(event) {
    ref.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    ref.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank" onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className=" text-lg font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={ref}
        src={img}
        alt={title}
        className=" w-96 h-auto hidden rounded-lg absolute z-10"
        style={{
          x: x,
          y: y,
        }}
        initial={{
          opacity:0
        }}
        whileInView={{
          opacity:1, duration: 0.2
        }}
      ></FramerImage>
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li className="relative w-full p-4 py-6 my-4 flex items-center justify-between bg-white text-black border border-solid border-black rounded-lg first:mt-2 border-r-4 border-b-4"
    initial={{y:200, opacity:0.5}}
    whileInView={{y:0, transition: {duration: 0.5, ease:"easeInOut"}, opacity: 1}}
    viewport={{once: true}}>
      <MovingImg title={title} img={img} link={link}></MovingImg>
      <span className=" text-pink-500 font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl relative">
      <div className=" absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2.5rem] bg-black rounded-br-3xl " />

      <Link
        href={link}
        target="_blank"
        className=" w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: "1.05" }}
          transition={{ duration: "0.2" }}
        ></FramerImage>
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" text-2xl font-bold capitalize my-2  mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className=" text-pink-500 font-semibold">{time}</span>
    </li>
  );
};

const article = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Article Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className=" w-full flex items-center justify-center mb-16 flex-col overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className=" mb-16"
          ></AnimatedText>
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              img={article1}
              link="/"
            ></FeaturedArticle>

            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              img={article2}
              link="/"
            ></FeaturedArticle>
          </ul>

          <h2 className=" w-full font-bold text-4xl text-center my-16 mt-32">
            All Articles
          </h2>

          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 25, 2023"
              link="/"
              img={article3}
            ></Article>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default article;
