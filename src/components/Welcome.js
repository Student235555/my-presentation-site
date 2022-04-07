import React from 'react';
import '../styles/Welcome.css';

const Welcome = () => {
    return ( 
        <div className='mainWelcomeDiv'>
            <p className='mainWelcomeP'>Welcome to my website. I am Marcin Pawluś 
            and I inspire to become junior frontend-developer.</p>
            <p className='smallWelcomeP'>I am a graduate of Computer Science at the 
            Faculty of Electronics at Politechnika Wrocławska. My goal is to find a first 
            job as a junior developer or similar position, that will give me the opportunity 
            to make the first steps in the IT industry.</p>
        </div>
     );
}
 
export default Welcome;

