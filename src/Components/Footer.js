import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full border-t-2 border-solid border-black font-medium text-lg">
      <Layout className=" py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build With
          <span className=" text-pink-400 text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="/"
            className=" underline underline-offset-2"
            target={"_blank"}
          >
            MindHarbour
          </Link>
        </div>
        <Link
          href="/"
          className=" underline underline-offset-2"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
