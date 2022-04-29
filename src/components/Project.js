import React from 'react';
import '../styles/Project.css';

const Project = ({project}) => {

    const {name, link, desc} = project;

    return ( 
        <>
            <li className='liProject'>
                <p className='oneMovieA'>
                    <strong>{name}</strong>, Description: {desc}, (Link: {link})
                </p>
            </li>
        </>
     );
}
 
export default Project;
