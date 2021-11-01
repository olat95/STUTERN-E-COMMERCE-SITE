import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('/images/image-37.jpg') center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background-color: #fff;
  opacity: 0.9;

  ${mobile({ width: '75%' })}
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  height: 35px;
  font-size: 20px;
  margin: 20px 0;
  padding: 10px;

  ${mobile({ fontSize: '15px' })}
`
export const Text = styled.div`
  margin-right: 5px;
`
export const Button = styled.button`
  width: 40%;
  height: 60px;
  border: none;
  padding: 15px 20px;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
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

export const RegLink = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #5a1cb9;
  font-weight: 700;
`
export const Wrap = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Wrapp = styled.div`
  display: flex;
  font-size: 15px;
  margin: 10px 0;
`
