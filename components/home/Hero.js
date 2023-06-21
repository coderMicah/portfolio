import classes from "./Hero.module.css";

function Hero(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.intro}>
          <h1>
            <span>H</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
          </h1>

          <p>
            <span className={classes.underline}>I&apos;m Micah,</span>
            <br /> UX Designer & <br />
            Frontend Developer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
