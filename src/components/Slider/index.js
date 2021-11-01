import React, { useState } from 'react'
import { sliderItems } from '../../Data'
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Slide,
  Title,
  Desc,
  Button,
} from './SliderElement'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>{item.button}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
