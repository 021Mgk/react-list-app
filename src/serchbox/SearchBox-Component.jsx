import React from 'react'
import  styles  from './searchbox-style.module.scss';


const SearchBox = ({placeholder ,onChangeHandeler}) => (

    <div className={styles.searchbox}>
       <input type="search" placeholder={placeholder} onChange={onChangeHandeler}/>
    </div>
)



export default SearchBox;