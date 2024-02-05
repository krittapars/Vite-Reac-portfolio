import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi, it’s me</p>
                    <h3 className={styles.text_2}>Krittapars Kaewthum</h3>
                    <p className={styles.text_3}>
                        <span>I’m a </span>
                        <TypeAnimation
                        sequence={[
                         // Same substring at the start will only be typed out once, initially
                        'Full-stack Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Web developer',
                        1000, 
                        
                        ]}    
                       
                        speed={50}
                        repeat={Infinity}
                        /></p>
                    <p className={styles.text_4}>
                        &nbsp;&nbsp; I don't need to know everything to be a great developer, no one does.
                         <br/>Focus on solving the problems I have today and believe that I can solve any problems
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithub /></a></li>
                        <li><a href="#"><FaLinkedin /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                    </ul>
                </div>
                {/* false ทวนเข็มนาฬิกา true ตามเข็มนาฬิกา */}
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                    <div className={styles.hero_img}>
                        
                    </div>
                </Tilt>
                
            </div>
        </div>
    </div>

  )
}

export default Hero
