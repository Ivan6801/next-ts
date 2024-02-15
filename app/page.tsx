import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RandomFox />
      </main>

      <footer></footer>
    </div>
  );
}
