import React from 'react'    
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Logo from '../public/src/img/logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image  src={Logo} alt="logo"
         width={35}
         height={35}         
        />
      </Link>
      <ul>
        <li className={styles.listItem}>
          <Link href="/products/Marketing">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Design">Teams</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Mobile">services</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Maintenance">Comminity</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/consultant">Courses</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/Database">Blogs</Link>
        </li>
      </ul>

    </div>

  )
}

export default Navbar
