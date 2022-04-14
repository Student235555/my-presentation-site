import React, {useState, useEffect} from 'react';
import '../styles/Welcome.css';

const Welcome = () => {

    const Welcome = 'Welcome to my website. I am Marcin Pawluś and I inspire to become junior frontend-developer.';
    const [txt, setTxt] = useState('');
    const time = 60; //text appearing speed

    useEffect(() => {
        let indexText = 0;
        const timer = setInterval(() => {
            setTxt((txt) => txt + Welcome[indexText]);
            indexText++;
            if (indexText === Welcome.length) clearInterval(timer);
    }, time);
    }, []);


    const time2 = 600; //cursor animation
    const [active, setActive] = useState(false);
    let isCursorActive = active ? "cursorActive" : "cursorNotActive";

    useEffect(() => {
        const timer2 = setInterval(() => {
            setActive(!active);
    }, time2);
    return () => {
        clearInterval(timer2);
      };
    }, [active]);

    return ( 
        <div className='mainWelcomeDiv'>
            <p className='mainWelcomeP'>{txt}<span className={isCursorActive}>|</span></p>
            <p className='smallWelcomeP'>I am a graduate of Computer Science at the Faculty of Electronics at Politechnika Wrocławska. My goal is to find a first job as a junior developer or similar position, that will give me the opportunity to make the first steps in the IT industry.</p>
        </div>
     );
}
 
export default Welcome;

