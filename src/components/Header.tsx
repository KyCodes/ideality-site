import React, { useState, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "../styles/Header.module.css"

export default function Header() {
  const [menu, setMenu] = useState(false)
  const hamMenu = useRef(null)
  const data = useStaticQuery(graphql`
    {
      allWpMenuItem(filter: {locations: {eq: GATSBY_HEADER_MENU}}) {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  `)

  const listItems = data.allWpMenuItem.edges.map((data, index) => {
    return <a href={data.node.path} key={index}>{data.node.label}</a>
  })

  function hamburger() {
    if (menu == false) {
      setMenu(true)
      document.getElementById('hamMenu').classList.add(styles.active)
      document.getElementById('ham').classList.add(styles.ham_active)
    }
    else {
      setMenu(false)
      document.getElementById('hamMenu').classList.remove(styles.active)
      document.getElementById('ham').classList.remove(styles.ham_active)
    }
  }

  return (
    <header className={styles.nav}>
      <a href='/' className={styles.nav__imagewrapper}>
        <StaticImage style={{ height: '100%' }} imgStyle={{ objectFit: 'contain' }} placeholder='blurred' src='../images/ideality-full.webp' alt='Ideality full navigation bar logo' />
      </a>
      <ul id='hamMenu'>{listItems}</ul>
      <div id='ham' onClick={hamburger} className={styles.nav__hamburger} />
    </header>
  );
}
