import Navbar from "@/Components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";
import Footer from "@/Components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <AnimatePresence mode="wait">
          <Component  key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer></Footer>
      </main>
    </>
  );
}
