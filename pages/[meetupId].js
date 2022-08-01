import React from "react";
import MeetupDetails from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetails
      title={props.meetupData.title}
      address={props.meetupData.address}
      image= {props.meetupData.image}
      description ={props.meetupData.description}
    />
  );
};

export async function getStaticPaths(){
    return{
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetUpId = context.params.meetupId
  
    console.log(meetUpId);
    
      return {
      props: {
        meetupData: {
          id: meetUpId,
          title: "New-York",
          address: "some address",
          image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
          description: "this is the first meetup",
        },
      },
    };
  }

export default MeetupDetailsPage;
