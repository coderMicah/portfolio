import Head from "next/head";
import ContactPage from "../../components/contact/ContactPage";

function Contact(props) {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Page for Micah's Portfolio" />
      </Head>
      <ContactPage />
    </>
  );
}

export default Contact;
