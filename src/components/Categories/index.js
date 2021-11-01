import React from 'react'
import { categories } from '../../Data'
import { Container } from './CategoriElement'
import CatItems from '../CatItems'

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CatItems item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories
