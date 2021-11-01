import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from '@material-ui/icons'
import React from 'react'
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Right,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from './FooterElement'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>STUTERN..</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at
          eius quia tenetur aliquid distinctio debitis saepe obcaecati
          temporibus cum, dicta ad placeat, fuga, repudiandae id sapiente
          voluptatum nostrum possimus.
        </Desc>
        <SocialContainer>
          <SocialIcon
            color='#3b5999'
            href='//www.facebook.com'
            target='_blank'
            aria-label='Facebook'
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            color='#e4405f'
            href='//www.instagram.com'
            target='_blank'
            aria-label='Instagram'
          >
            <Instagram />
          </SocialIcon>
          <SocialIcon
            color='#55acee'
            href='//www.twitter.com'
            target='_blank'
            aria-label='Twitter'
          >
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          16A, Fola Jinadu Crescent, Gbagada 100266, Lagos
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> 0909 999 7645
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> xxxx_xxxxx@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
