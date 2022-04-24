import Head from "next/head";

import { GridHome } from "../components/Layout/GridHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bog | </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GridHome />
    </>
  );
}
