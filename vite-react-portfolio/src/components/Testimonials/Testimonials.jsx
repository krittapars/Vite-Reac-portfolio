import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}> Testimonials </h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aspernatur enim quia autem quidem mollitia, reprehenderit esse assumenda iusto soluta impedit doloribus cumque ducimus, nisi perspiciatis ullam amet voluptatibus repellat!</p>
                <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.testi_bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aspernatur enim quia autem quidem mollitia, reprehenderit esse assumenda iusto soluta impedit doloribus cumque ducimus, nisi perspiciatis ullam amet voluptatibus repellat!</p>
                <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.testi_bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aspernatur enim quia autem quidem mollitia, reprehenderit esse assumenda iusto soluta impedit doloribus cumque ducimus, nisi perspiciatis ullam amet voluptatibus repellat!</p>
                <img src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.testi_bio}>Web Developer</p>
            </div>

        </div>

    </div>
  )
}

export default Testimonials
