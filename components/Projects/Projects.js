import { useState } from "react";
import Link from "next/link";
import Filters from "../ui/Filters";
import classes from "./Projects.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "../../sanity";

function Projects(props) {

  const [projects, setProjects] = useState(props.projects);
  const [filteredProjects, setFilteredProjects] = useState(projects);


  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Projects <br></br>Showcase</h1>

      <Filters projects={projects} setFilteredProjects={setFilteredProjects} />

      <motion.div layout className={classes.grid}>
        {filteredProjects.map((project) => (
          <AnimatePresence key={project.slug}>
            <Link href={`/myprojects/${project.slug}`} passHref>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <img src={urlFor(project.image).url()} alt={`${project.title} image`} layout="fill"/>
            

                <h3>{project.title}</h3>
              </motion.div>
            </Link>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
