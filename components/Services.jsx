import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Services.module.css'
const Services = ({services}) => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}> What we Can Do ?</h1>
       <h1 className={styles.subtitle}> Services we can help you With</h1>
       <div className={styles.services}>
        {services.map(service =>(
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.name}</span>
              <div className={styles.media}>
                <Image
                className={styles.img}
                 src={`/src/img/${service.photo}`}
                 width="100%"
                 height="100%"
                 layout="responsive"
                 objectFit="cover"
                  alt="photo"
                 />
              </div>
              
            </div>         
          </Link>
          
          ))}

       </div>
    </div>
  )
}

export default Services
