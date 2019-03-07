import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 45px;
  right: 0;
  padding-top: 7px;
`

interface ButtonProps {
  hover?: boolean
  clicked?: boolean
}
export const Button = styled.div<ButtonProps>`
  margin: 0px auto;
  border: ${({ hover }) => (hover ? 'solid 3px #eee' : 'solid 3px #707070')};
  width: 45px;
  height: 45px;
  border-radius: 90px;
  cursor: pointer;
  background: ${({ clicked }) => (clicked ? '#eee' : 'transparent')};
`
