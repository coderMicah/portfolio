import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import classes from "./ContactPage.module.css";

function ContactPage(props) {
  return (
    <>
      <div className={classes.grid}>
        <div className={classes.letsTalk}>
          {/* <h1 className={classes.title}>Lets Talk</h1> */}
          <h4 className={classes.subtitle}>
            Have A Project? <br />
            I`&apos;`d Love To Help
          </h4>
          <p className={classes.intro}>
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the awesome form and <br />
            ~let`&apos;`s talk.
          </p>

          <ul className={classes.flex}>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>

        <form className={classes.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <textarea type="text" placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
