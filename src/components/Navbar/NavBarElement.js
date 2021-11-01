import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  height: 80px;
  ${mobile({ height: '50px' })};
`
export const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: '10px 0' })};
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: 'none' })}
`
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ margin: '0 10px' })}
`
export const Input = styled.input`
  border: none;
  padding: 5px;

  ${mobile({ width: '50px' })};
`
export const Center = styled.div`
  flex: 1;
  text-align: center;
`
export const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: '20px' })};
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ justifyContent: 'center', flex: '2' })};
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: '12px', marginLeft: '10px' })};
`
