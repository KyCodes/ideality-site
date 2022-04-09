import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/Layout';
import * as styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout title='Home'>
      <div className={styles.home}>
        <div className={styles.img__event}>
          <StaticImage placeholder='blurred' style={{ height: '100%' }} imgStyle={{ objectFit: 'contain' }} src='../images/event.webp' alt="Ideality example event objective" />
        </div>
        <div className={styles.img__goal}>
          <StaticImage placeholder='blurred' style={{ height: '100%' }} imgStyle={{ objectFit: 'contain' }} src='../images/goal.webp' alt="Ideality example goal objective" />
        </div>
        <div className={styles.img__habit}>
          <StaticImage placeholder='blurred' style={{ height: '100%' }} imgStyle={{ objectFit: 'contain' }} src='../images/habit.webp' alt="Ideality example habit objective" />
        </div>
        <h1>The ideal way to plan</h1>
        <p>Coming to iOS and Android in Spring 2022</p>
      </div>
      <a href='https://ky.codes/' className='tag'>Designed and developed by KyCodes LLC</a>
    </Layout>
  );
}
