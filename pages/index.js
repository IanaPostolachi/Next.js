import React, {useEffect, useState} from "react";
import MeetupList from "../components/meetups/MeetupsList";

const dummyData = [
  {
    id: 'm1',
    title:'New-York',
    address: 'some address',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
    description: 'this is the first meetup'
  },
  {
    id: 'm1',
    title:'New-York',
    address: 'some address',
    image: 'https://img.freepik.com/free-photo/view-manhattan-sunset-new-york-city_268835-463.jpg?w=2000',
    description:'This is the second meetup'
  }
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMEetups] = useState([])

  useEffect(() => {
    //send an http request
    setLoadedMEetups(dummyData)
  },[])

  return (
      <MeetupList meetups={loadedMeetups}/>
  );
};

export default HomePage;
