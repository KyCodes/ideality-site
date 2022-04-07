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
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ideality is the ideal way to plan." />
        <meta name="keywords" content="App, Health, Productivity" />
        <meta name="author" content="Kyler Fullerton" />
        <title>Ideality | {props.title}</title>
      </Helmet>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}