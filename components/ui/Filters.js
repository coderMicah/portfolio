import classes from "./Filters.module.css";

function Filters({ projects, setFilteredProjects }) {
  function filterProjects(filterKey) {
    if (filterKey === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.includes(filterKey)
      );
      setFilteredProjects(filtered);

    }
  }

  return (
    <div className={classes.filters}>
      <ul>
        <li>
          <button onClick={() => filterProjects("all")}>All</button>
        </li>
        <li>
          <button onClick={() => filterProjects("Javascript")}>
            Javascript
          </button>
        </li>
        <li>
          <button onClick={() => filterProjects("HTML")}>HTML</button>
        </li>
        <li>
          <button onClick={() => filterProjects("CSS")}>CSS</button>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
