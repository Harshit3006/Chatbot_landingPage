import Head from "next/head";
import Image from "next/image";
import Layout from "@/Components/Layout";
import profilePic from "../../public/images/profile/dementia-care-e1673612370499.jpg";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/Components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-center w-full ">
            <div className=" w-1/2">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className=" w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <AnimatedText
                text="Welcome to Dementia Care Assistant"
                className="!text-5xl !text-left"
              ></AnimatedText>
              <p className="my-4 text-base font-medium">
              Are you or a loved one living with dementia? You're not alone. At Dementia Care Assistant, we understand the unique challenges and complexities that come with dementia. Our mission is to provide compassionate assistance and support to individuals and families navigating this journey.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  href="https://chatbot-ruby-three.vercel.app/"
                  // target={"_blank"}
                  className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg  text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black"
                >
                  ChatBot <LinkArrow className="mx-2 w-6"></LinkArrow>
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className=" ml-4 font-medium text-lg underline text-black"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe></HireMe> */}

        <div className=" absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="" className=" w-full h-auto" />
        </div>
      </main>
    </>
  );
}
