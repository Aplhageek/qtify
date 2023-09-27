import React, { useState } from 'react'
import styles from './Tab.module.css'


const Tab = ({ listOfGenre, handleSelect }) => {
  const [selectedTab, setSelectedTab] = useState("All")

  return (
    <>
      {/* Constant Tab */}
      <div
        className={`${styles.tab} ${selectedTab === 'All' ? styles.selected : ''}`}
        onClick={(event) => {
          handleSelect(event, "All" );
          setSelectedTab("All");
        }}
      >
        All
      </div>

      {/* Dynamic Tabs */}
      {
        listOfGenre.map((item, index) => {
          return (
            <div
              className={`${styles.tab} ${selectedTab === item.key ? styles.selected : ''}`}
              key={index}
              onClick={(event) => {
                handleSelect(event, item.key);
                setSelectedTab(item.key);
              }
              }
            >
              {item.label}
            </div>
          )
        })
      }
    </>
  )
}

export default Tab;