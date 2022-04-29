import React from 'react';
import Project from './Project';
import '../styles/ProjectsList.css';

const myProjects = [
    {
      id: 0,
      name: "movie-manager-app",
      link: "https://student235555.github.io/movie-manager-app/",
      desc: "An application for managing movies you want to watch.",
    },
    {
      id: 1,
      name: "simple-weather-app",
      link: "https://student235555.github.io/simple-weather-app/",
      desc: "A simple app showing weather after giving location.",
    },
    {
      id: 2,
      name: "multi-page-app",
      link: "https://student235555.github.io/multi-page-app/",
      desc: "A simple blog, with multiple subpages using react router, about Greek Mythology.",
    },
    {
      id: 3,
      name: "solar-system-facts",
      link: "https://student235555.github.io/solar-system-facts/",
      desc: "An educational app about our Solar System.",
    },
    {
      id: 4,
      name: "chess-app",
      link: "https://student235555.github.io/chess-app/",
      desc: "An app that allows you to play chess against AI made using chess.js and chessboard.js libraries.",
    },
  ]

  const projectsList =myProjects.map(project =>
    <Project key={project.id} project={project}/>)

const ProjectsList = () => {
    return (  
      <>
        <ul className='ListOfProjects'>
            {projectsList}
        </ul>
      </>
    );
}
 
export default ProjectsList;