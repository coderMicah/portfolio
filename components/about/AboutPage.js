import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./AboutPage.module.css";

function AboutPage(props) {
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image
          className={classes.image}
          src="/demo.jpg"
          alt="Picture of Micah"
          width={300}
          height={300}
         
          objectFit="cover"
        />
      </div>
      <div>
        <h1 className={classes.header}>Micah Sigsbert</h1>
        <h3 className={classes.title}>
          Web Designer, Web Developer and Freelancer
        </h3>

        <div className={classes.aboutme}>
          <p className={classes.paragraph}>
            Hello, I&apos;m Micah. A full stack developer with passion to create
            cutting-edge, pixel-perfect and scalable products with great user
            experience. With over 4+ years experience building clients products
            and contributing to open source projects
          </p>

          <p className={classes.paragraph}>
            Turning ideas into real life products is my hobby! I love exploring
            around Javascript ecosystem although I&apos;ve experience with python and
            C++.Working with NodeJS and React(NextJS) seems cool to me!
          </p>
          <p className={classes.paragraph}>
            When not working I love watching movies, playing video games or
            watching football.
          </p>
        </div>

        <div className={classes.flex}>
          <Link href="/myprojects">
            <a className={classes.btn}>My Projects</a>
          </Link>
          <Link href="/myprojects">
            <a className={classes.btn}>Resume</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
