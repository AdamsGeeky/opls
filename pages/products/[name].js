import React from 'react'
import styles from '../../styles/Products.module.css'
import {data} from '../../data'

const Product = ({product}) => {
  return (
    <div className={styles.container}>
        <div className={styles.cardB}></div>
        <div className={styles.cardS}></div>
      
    </div>
  )
}

export const getStaticPaths = async () =>{
    const products = data;
    const paths = products.map((content) =>{
        return{
            // {object}context to be used in getStaticP rops
            params: {name: content.name},
        }; });
        return{
            paths,
            fallback: false,
        }
};

export const getStaticProps = async (context)=>{
   const name = context.params.name;
/**
 * if data is from tha api we used axios or 
 */
 const product = data.filter((content) => content.name === name)[0];

 return{
    props: {product},  
 }
}
 

export default Product
