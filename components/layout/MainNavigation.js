import Link from 'next/link'
import React from 'react'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
            React MeetUps!
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/'>All meetups</Link>
                </li>
                <li>
                    <Link href='/new-meetup'>Add new meetup</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
