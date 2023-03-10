import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="mt-10 px-12 lg:px-48 font-latoBold">
      <Head>
        <title>Framer Motion Page Transition</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
