import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
const ref = useRef(null);

  return (
    <li  ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
    <LiIcon reference={ref}></LiIcon>
      <div>
        <h3 className=" capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className=" text-pink-600 capitalize"
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-black/75">
          {time}| {address}
        </span>
        <p className=" font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
    target: ref,
    offset: ['start end','center start']

  })
//   console.log(ff)
  return (
    <>
      <div className="my-64">
        <h2 className=" font-bold text-8xl mb-32 w-full text-center">
          Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            className="absolute h-[100%] w-[4px] bg-black top-0 left-9 origin-top mb-7"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <ul className=" w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
            <Details
              position="Software Engineer"
              company="Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
            ></Details>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
