import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Cartitems } from '../Data'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && '#fff'};
`
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;

  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  })}
`
const Image = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 50px;

  ${mobile({ width: '40vh', marginBottom: '20px' })}
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({ width: '100%', alignItems: 'center' })}
`
const ProductName = styled.span`
  ${mobile({ marginBottom: '10px' })}
`
const ProductId = styled.span`
  ${mobile({ marginBottom: '10px' })}
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
  ${mobile({ marginTop: '10px' })}
`
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${mobile({ marginBottom: '15px' })}
`
const Line = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: '5px 15px' })}
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

  ${mobile({ marginTop: '20px' })}
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'}
  font-size: ${(props) => props.type === 'total' && '24px'}
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 600;
  background-color: black;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>your bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {Cartitems.map((item) => (
              <>
                <Product>
                  <ProductDetails>
                    <Image src={item.img} key={item.id} />
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                        {item.productname}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b>
                        {item.productid}
                      </ProductId>
                      <ProductColor color={item.productcolor} />
                      <ProductSize>
                        <b>Size:</b>
                        {item.productsize}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{item.productamount}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>{item.productprice}</ProductPrice>
                  </PriceDetails>
                </Product>
                <Line />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemPrice>N40,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice>N5,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount:</SummaryItemText>
              <SummaryItemPrice>-N5,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>N40,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
