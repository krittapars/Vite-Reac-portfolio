import React from 'react'
import styles from './Contect.module.css'
import { FaPhone, FaEnvelope} from "react-icons/fa6";

function Contect() {
  return (
    <div className={styles.Contect_wrapper}>
        <div className={styles.Contect_con}>
            <div className={styles.Contect_info}>
                <h3>Get in touch</h3>
                <p className={styles.Contect_desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam incidunt culpa sunt, temporibus mollitia porro eligendi cumque molestias! Ipsa mollitia aut, quasi excepturi laboriosam animi magni corporis quidem id!
                </p>
                <p className={styles.Contect_address}>
                23 Main Street <br />
                Bangkok, Thailand
                </p>
                <p><FaPhone/>(+66) 98 555 1234</p>
                <p><FaEnvelope/>support@site.com</p>
            </div>
            <div className={styles.Contect_form}>
                <form action="">
                    <div className={styles.Contect_group }>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder='ed.Jone'/>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder='ed.Doe'/>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg.Jonedoe@gmail.com'/>
                    <label htmlFor="message">Your Address </label>
                    <input type="email" placeholder='eg.Jonedoe@gmail.com'/>
                    <textarea name="" id="" cols="30" rows="10"placeholder='Type here'></textarea>
                     <button type='submit'>Submit</button>       
   
                </form>
             </div>    
        </div>
        
    </div>
    
      
  )
}

export default Contect
