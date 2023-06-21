import Head from "next/head";
import Projects from "../../components/Projects/Projects";
import projectss from "../../utils/projects"
import { fetchProjects } from "../../utils/helper";

function Project({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Micah's recent Projects" />
      </Head>
      <Projects projects={projects} />
    </>
  );
}

export async function getStaticProps() {

  const projects = await fetchProjects();
  // const projects = [
  //   {
  //     title: "Project1",
  //     slug: "project1",
  //     description: "Build with typescript",
  //     excerpt: "Build with typescript",
  //     technologies: ["Typescript", "Javascript", "CSS", "HTML"],
  //     images: ["/slide1.jpg", "/slide1.jpg"],
  //     categories: ["Typescript", "Javascript", "CSS", "HTML"],
  //   },
  //   {
  //     title: "Project2",
  //     slug: "project2",
  //     description: "Build with typescript",
  //     excerpt: "Build with typescript",
  //     technologies: ["Typescript", "Javascript", "CSS", "HTML"],
  //     images: ["/slide2.jpeg", "/slide1.jpg"],
  //     categories: ["Typescript", "Javascript", "CSS", "HTML"],
  //   },
  //   {
  //     title: "Project1",
  //     slug: "project1",
  //     description: "Build with typescript",
  //     excerpt: "Build with typescript",
  //     technologies: ["Typescript", "Javascript", "CSS", "HTML"],
  //     images: ["/slide1.jpg", "/slide1.jpg"],
  //     categories: ["Typescript", "Javascript", "CSS", "HTML"],
  //   },
  //   {
  //     title: "Project2",
  //     slug: "project2",
  //     description: "Build with typescript",
  //     excerpt: "Build with typescript",
  //     technologies: ["Typescript", "Javascript", "CSS", "HTML"],
  //     images: ["/slide2.jpeg", "/slide1.jpg"],
  //     categories: ["Typescript", "Javascript", "CSS", "HTML"],
  //   },
  // ];
  

  return {
    props: {
      projects,
    },
    revalidate:10
  };
}

export default Project;
