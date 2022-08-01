import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  function NewMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={NewMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
