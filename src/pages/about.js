import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/dddd.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* <AnimatedText
            text="Passion Fuels Purpose!"
            className=" mb-16"
          ></AnimatedText> */}
          <div className="grid w-full grid-cols-8 gap-16">
            <div className=" col-span-3 flex flex-col items-start justify-start">
              <h2 className="mt-4 text-lg font-bold uppercase text-black/75">
                Our Inspiration
              </h2>
              <p className=" font-medium">
              Our journey began with a deep-seated desire to make a meaningful difference in the lives of those affected by dementia. Witnessing the challenges faced by individuals and their caregivers firsthand, we recognized the need for a reliable and accessible support system.
              </p>
              <h2 className="mt-4 text-lg font-bold uppercase text-black/75">
                What we do
              </h2>
              <p className=" font-medium">
                Our interactive chatbot assistant is designed specifically to
                assist dementia patients in various aspects of daily life.
                Whether it's medication reminders, appointment scheduling, or
                simply providing companionship, our chatbot is here to help
                24/7.
              </p>
              <h2 className="mt-4 text-lg font-bold uppercase text-black/75">
                Why choose us
              </h2>
              <div className=" font-medium">
                <ul>
                  <li>
                    Compassionate Care: We approach dementia care with empathy
                    and understanding, ensuring a supportive environment for
                    patients and their families.
                  </li>
                  <li>
                    Personalized Assistance: Our chatbot is tailored to
                    individual needs, providing customized support based on
                    specific requirements and preferences.
                  </li>
                <li>
                  Accessible Anytime, Anywhere: With our online platform,
                  assistance is just a click away, making it convenient for
                  users to access support whenever they need it.
                </li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
              <div className=" absolute top-0 -right-3 -z-10  w-[102%] h-[103%] rounded-[2rem]  " />
              <Image
                src={profilePic}
                alt="CodeBucks"
                className=" w-full h-auto rounded-2xl"
              ></Image>
            </div>

            <div className="flex flex-col items-end justify-between col-span-2">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimateNumbers value={50}></AnimateNumbers>+
                </span>
                <h2 className=" text-xl font-medium text-black/75 capitalize">
                  satisfied clients
                </h2>
              </div>

              {/* <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimateNumbers value={40}></AnimateNumbers>+
                </span>
                <h2 className=" text-xl font-medium text-black/75 capitalize">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimateNumbers value={4}></AnimateNumbers>+
                </span>
                <h2 className=" text-xl font-medium text-black/75 capitalize">
                  years of experience
                </h2>
              </div> */}
            </div>
          </div>
          {/* <Skills></Skills> */}
          {/* <Experience></Experience> */}
          {/* <Education></Education> */}
        </Layout>
      </main>
    </>
  );
};

export default about;
