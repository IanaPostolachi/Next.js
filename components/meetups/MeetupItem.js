import React from 'react'
import Card from '../ui/Card'
import './MeetupItem.css'

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
        </div>
        <div className={classes.action}>
            <button>Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
