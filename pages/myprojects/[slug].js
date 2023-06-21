import Head from "next/head";
import ProjectPage from "../../components/Projects/ProjectPage";
import { fetchProjects } from "../../utils/helper";
// import markdownToHtml from "../../utils/markdownToHtml";

function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>Project | {projectData.title}</title>
        <meta name="description" content={`webpage to display project ${projectData.title} description`} />
      </Head>
      <ProjectPage projectData={projectData} />
    </>
  );
}

export async function getStaticPaths() {
  const projects = await fetchProjects();

  const params = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths: params,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  // const data = await getProjects();

  const data = await fetchProjects();

  const projectData = data.find((event) => event.slug === slug);

  //convert description,technologies from md to html
  // const description = await markdownToHtml(projectData.description);
  // const technologies = await markdownToHtml(projectData.technologies);

  return {
    props: {
      projectData: { ...projectData },
    },
  };
}

export default Project;
