import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center font-semibold bg-black text-white rounded-full cursor-pointer shadow-black py-3 px-6 absolute"
      whileHover={{ scale: "1.06" }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-7xl mt-56 text-center w-full">Skills</h2>
      <div className=" w-full h-screen relative flex items-center justify-center bg-circularLight">
        <motion.div
          className="flex items-center justify-center font-semibold bg-black text-white rounded-full p-8 cursor-pointer shadow-black"
          whileHover={{ scale: "1.06" }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x='-20vw' y='2vw'></Skill>
        <Skill name="CSS" x='-5vw' y='-10vw'></Skill>
        <Skill name="Javascript" x='17vw' y='6vw'></Skill>
        <Skill name="ReactJs" x='-20vw' y='12vw'></Skill>
        <Skill name="NextJs" x='15vw' y='-15vw'></Skill>
        <Skill name="FramerMotion" x='-30vw' y='-4vw'></Skill>
        <Skill name="NodeJs" x='32vw' y='-5vw'></Skill>
        <Skill name="HTMLCanva" x='-25vw' y='-20vw'></Skill>
        <Skill name="TailWind" x='-10vw' y='18vw'></Skill>
        <Skill name="ThreeJs" x='18vw' y='18vw'></Skill>
      </div>
    </>
  );
};

export default Skills;
