import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('/images/image-36.jpg') center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;

  ${mobile({ width: '75%' })}
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  height: 35px;
  font-size: 20px;

  ${mobile({ padding: 0, fontSize: '15px' })}
`
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  border-radius: 20px 0 20px 0;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.5s ease-in-out;
  }

  ${mobile({ width: '100%' })}
`
