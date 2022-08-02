import { MongoClient } from "mongodb";
import React from "react";
import MeetupList from "../components/meetups/MeetupsList";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Next Meetups</title>
        <meta 
        name="description"
        content="This is a place to find places!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  //alternative
  // const response = await fetch('/api/meetups', {
  //   method:'GET',
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   }
  // })

  // const meetups = await response.json()

  const client = await MongoClient.connect(
    "mongodb+srv://Iana:mongodb@cluster0.siwvf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   return{
//     props: {
//       meetups: dummyData
//     }
//   }
// }

export default HomePage;
