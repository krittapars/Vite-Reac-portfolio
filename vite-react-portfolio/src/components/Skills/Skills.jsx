import React from 'react'
import styles from './Skills.module.css'
import {FaNode, FaFigma, FaGitAlt, FaSass, FaReact, FaSquareJs} from "react-icons/fa6";
 
function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaNode />
            </li>
            <li>
                <FaFigma />
            </li>
            <li>
                <FaGitAlt />
            </li>
            <li>
                <FaSass />
            </li>
            <li>
                <FaSquareJs />
            </li>
            <li>
                <FaReact />
            </li>
        </ul>
      
    </div>
  ) 
}

export default Skills
