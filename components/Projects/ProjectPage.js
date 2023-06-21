
import classes from "./ProjectPage.module.css";

function ProjectPage({ projectData }) {
  return (
    <div className={classes.main}>
      <div className={classes.bgTitle}>
        <h1>{projectData.title}</h1>
      </div>
      <div className={classes.projects}>
        <div className={classes.projectDescriptions}>
          <h1>{projectData.title}</h1>
          <p>{projectData.excerpt}</p>
          <button>Live Preview</button>
        </div>
        <div className={classes.img}>
          {/* {images.map((image) => {
            <img src={`${process.env.baseUrl}` + image.imgUrl}></img>;
          })} */}
          <img src={projectData.image} layout="fill"  alt={`${projectData.title} image`}/>
        </div>
      </div>

      <div className={classes.content}>
        <h1>Description</h1>
        <div dangerouslySetInnerHTML={{ __html: projectData.description }} />
      </div>

      <div className={classes.content}>
        <h1>Technologies</h1>
        <div dangerouslySetInnerHTML={{ __html: projectData.technologies }} />
      </div>
    </div>
  );
}

export default ProjectPage;
