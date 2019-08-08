import React from 'react'
import  styles from "./card-style.module.scss"


const Card =({name ,avatar ,email}) =>(
   <>
    <div className={styles.card}>
        <h6>{name}</h6>
        <img src={avatar} alt={name} />
        <p>{email}</p>
    </div>
   </>
)


export default Card;