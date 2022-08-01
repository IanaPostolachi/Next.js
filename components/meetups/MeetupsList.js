import React from "react";
import MeetupItem from "./MeetupItem";
import './MeetupsList.css'

const MeetupsList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={MediaElementAudioSourceNode.title}
          addres={meetup.addres}
        />
      ))}
    </ul>
  );
};

export default MeetupsList;
