// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">My Projects
        <div className = "projectCard">
            <h1>Project 1</h1>
            <h3>Star Wars API</h3>
            <a href="https:git@github.com:adriancgarcia/project1.git">Git Repo</a>
            <a href="https://project1-starwars.netlify.app/">Deployed Site</a>
            {/* <img src= */}
        </div>

        <div className = "projectCard">
            <h1>Project 2</h1>
            <h3>Photo Assistant</h3>
            <a href="git@github.com:adriancgarcia/project2-photo-assistant.git">Git Repo</a>
            <a href="https://project-2-app.onrender.com/">Deployed Site</a>
            {/* <img src= */}
        </div>
    </div>

}

// export the component
export default Projects
