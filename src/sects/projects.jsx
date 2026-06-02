import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>

      <button onClick={() => navigate("/projects/all")}>
        
        Click to see it all {" >> "}
      </button>
    </section>
  );
}

export default Projects;
