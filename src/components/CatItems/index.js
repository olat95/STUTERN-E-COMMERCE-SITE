import React from 'react'
import { Container, Image, Info, Title, Button } from './CatItemElement'

const CatItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title> {item.title} </Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  )
}

export default CatItems
