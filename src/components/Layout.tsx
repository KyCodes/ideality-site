import React, { Fragment } from 'react';
import { Helmet } from "react-helmet"
import Header from './Header';

interface layoutProps {
  children: any;
  title: string;
}

export default function Layout(props: layoutProps) {

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ideality | {props.title}</title>
      </Helmet>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}