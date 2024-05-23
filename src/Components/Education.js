import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref}></LiIcon>
      <div>
        <h3 className=" capitalize font-bold text-2xl ">{type}&nbsp;</h3>
        <span className=" capitalize font-medium text-black/75 ">
          {time}| {place}
        </span>
        <p className="font-medium ">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
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
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
            ></Details>
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
            ></Details>
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
            ></Details>
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
            ></Details>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
