import React from 'react'
import './dashboard.css';
import { capitalize } from 'lodash';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
        <h1>Hii <span style={{color:"yellow"}}>{capitalize(localStorage.getItem("lastname"))}</span>, Welcome To Dashboard</h1>
    </div>
  )
}
