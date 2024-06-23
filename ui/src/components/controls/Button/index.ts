import { rgba } from 'polished'
import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  background-color: #678efe;
  border-radius: 6px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: ${rgba('#678efe', 0.85)};
  }
`
