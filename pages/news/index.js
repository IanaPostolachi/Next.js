import React, { Fragment } from "react";
import Link from 'next/link'

const NewsPage = () => {
  
  return (
    <Fragment>
  <h1>The News Page</h1>
  <ul>
    <li><Link href="/news/maybe-something-else">NextJS is a great framework</Link></li>
  </ul>;
  </Fragment>
  )
  
};

export default NewsPage;
