import React from 'react'
import { Container } from './ProductsElement'
import { products } from '../../Data'
import Product from '../Product'

const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
