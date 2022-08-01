import React from "react";
import MeetupDetails from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      title="New-York"
      address="some address"
      image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
      description = 'this is the first meetup'
    />
  );
};

export default MeetupDetailsPage;
