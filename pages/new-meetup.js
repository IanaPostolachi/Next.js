import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetup = () => {
  const router = useRouter();

  async function NewMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add Meetup</title>
        <meta
          name="description"
          content="Here you can add places to your network"
        />
      </Head>
      <NewMeetupForm onAddMeetup={NewMeetupHandler} />
    </>
  );
};

export default NewMeetup;
