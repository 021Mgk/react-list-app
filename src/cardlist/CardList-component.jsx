import React from 'react'
import styles from './cardlist-style.module.scss';
import Card from '../card/Card-Component';

const CardList = ({users}) => (
    <div className={styles.card__container}>
       {users.map(user =>(
           <Card  key={user.id.toString()} name={user.name} avatar={user.avatar} email={user.email} />
       ))}
    </div>
)


export default CardList;