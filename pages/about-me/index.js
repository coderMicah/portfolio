import Head from "next/head";
import AboutPage from "../../components/about/AboutPage";

function About(props) {
  return (
    <>
      <Head>
        <title>Micah | About Me</title>
      </Head>
      <AboutPage />
    </>
  );
}

export default About;
