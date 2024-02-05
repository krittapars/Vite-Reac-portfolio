import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>MY Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_item}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero voluptatem iure maxime perspiciatis, fugiat dolor, eaque voluptatum culpa, nulla inventore consequatur sit et voluptatibus accusantium obcaecati laboriosam minima magnam.
                </p>
            </div>
            <div className={styles.services_item}>
                <FaPaintbrush />
                <h4>Web Design</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero voluptatem iure maxime perspiciatis, fugiat dolor, eaque voluptatum culpa, nulla inventore consequatur sit et voluptatibus accusantium obcaecati laboriosam minima magnam.
                </p>
            </div>
            <div className={styles.services_item}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero voluptatem iure maxime perspiciatis, fugiat dolor, eaque voluptatum culpa, nulla inventore consequatur sit et voluptatibus accusantium obcaecati laboriosam minima magnam.
                </p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Services
