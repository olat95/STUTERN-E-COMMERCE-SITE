import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  height: 30px;
  background-color: crimson;
  color: white;
  letter-spacing: 3px;
  ${mobile({ fontSize: '9px' })}
`
