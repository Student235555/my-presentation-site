import React from 'react';
import '../styles/Project.css';

const Project = ({project}) => {

    const {name, link, desc} = project;

    return ( 
        <>
            <li className='liProject'>
                <p className='oneProject'>
                    <strong>{name}</strong>
                    <br></br> <strong>Description: </strong> {desc}
                    <br></br> Click <a target="_blank" rel="noreferrer" href={link}>HERE </a> to see this project!
                </p>
            </li>
        </>
     );
}
 
export default Project;
