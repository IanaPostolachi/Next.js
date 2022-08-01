import Link from 'next/link'
import React from 'react'
import './MainNavigation.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            React MeetUps!
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add new meetup</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
