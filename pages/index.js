import Hero from "../components/home/Hero";
import Head from "next/head";

function HomePage(props) {

   return <>
   <Head>
      <title>Micah&apos;s Portfolio</title>
      <meta name="title" content="Micah's Portfolio Homepage" />
   </Head>
    <Hero/>
   </>
}

export default HomePage;
