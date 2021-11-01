import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;

  ${mobile({ display: 'none' })}
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.8;
  z-index: 2;
`
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
export const Image = styled.img`
  height: 90%;
  margin-left: 100px;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
export const Title = styled.h1`
  font-size: 70px;
`
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: crimson;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  outline: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  text-decoration: none;
`
