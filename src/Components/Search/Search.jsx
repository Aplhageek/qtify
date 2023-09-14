import React from 'react'
import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'

const Search = () => {
  return (
    <form className={styles.searchBarWrapper}>
        <input type="text"  className={styles.search}/>
        <div>
            <button className={styles.searchButton} type='submit'>
                <SearchIcon/>
            </button>
        </div>
    </form>
  )
}

export default Search;