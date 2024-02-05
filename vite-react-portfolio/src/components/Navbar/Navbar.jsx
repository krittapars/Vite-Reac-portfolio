import React ,{ useState }from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'



function Navbar() {

   const [isToggled, setToggled] = useState(false);

   function handleToggled() {
      setToggled(!isToggled) //fals(!isToggled) + (usestate) fals = true
   }
  return (
   <nav>
        <div className={styles.container}>
            <div className={styles.nav_con}>
                  <div className={styles.logo}>
                    <a href="#">KKPORT</a>
                  </div>

                  <ul>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>

                  <div className={styles.Button}>
                    <a href="#">Hire ME</a>
            
                  </div>

            </div>

            {/* Mobile Menu */}
            <FaBars className={styles.bars} onClick={handleToggled} />
            {isToggled ? ( 
               <>
                  <ul className={styles.mobile_menu}>
                    <li><a href="#">Skills</a></li>
                     <li><a href="#">Portfolio</a></li>
                     <li><a href="#">Contact</a></li>
                  </ul>
                  <div className={styles.mobile_button}>
                     <a href="#">Hire ME</a>
                  </div>
               </>

               ) : null }
               {/* if else*/}
        </div>
   </nav>
  )
}

export default Navbar
