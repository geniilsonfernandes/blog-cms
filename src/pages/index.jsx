import Head from "next/head";
import Image from "next/image";
import { PostCardBig } from "../components/PostCardBig";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bog | </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostCardBig />
    </div>
  );
}
