import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Announcement'
import Products from '../Products'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from './ProductListElement'

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Products: </FilterText>
          <Select>
            <Option disabled slected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled slected>
              Size
            </Option>
            <Option>XXXL</Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
