import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  border-radius: 50px 0 50px 0;
  object-fit: cover;

  ${mobile({ height: '50vh' })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-weight: 200;

  ${mobile({ marginTop: '15px' })}
`
const Underline = styled.hr`
  margin-top: 7px;
  width: 50px;
  border: 1px solid yellow;
`
const Desc = styled.p`
  margin: 20px 0;
  line-height: 1.5rem;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: '100%' })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 8px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterOption = styled.option``
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  ${mobile({ width: '100%' })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
    transition: all 0.3s ease-in-out;
  }
`

const Goodsitem = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`)
        setProduct(res.data)
      } catch (err) {}
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    //updating cart
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    )
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Underline />
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterOption key={s}>{s}</FilterOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={() => handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Goodsitem
