import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
        <h3 className={styles.port_title}>Portfolio</h3>
        <div className={styles.port_list}>
            <div className={styles.port_items}>
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://media.istockphoto.com/id/1020979088/photo/desktop-source-code-and-wallpaper-by-computer-language-with-coding-and-programming.webp?s=170667a&w=0&k=20&c=wpwyoi8k5BbXEqTW8hJv2-RRd-xJeOgz5G2BffgdXLQ=" alt="" />
                </Tilt>
                <p>Projecttitle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Tilt>
                <p>Projecttitle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" alt="" />
                </Tilt>
                <p>Projecttitle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                </Tilt>  
                <p>Projecttitle</p>
            </div>
            <div className={styles.port_items}>
                <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="" />
                </Tilt>
                <p>Projecttitle</p>
            </div>
            <div className={styles.port_items}>
                 <Tilt scale={1.2} transitionSpeed={2500 }tiltReverse={true}> 
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="" />
                </Tilt>
                <p>Projecttitle</p>
            </div>
           
           
        </div>


    </div>
  )
}

export default Portfolio
