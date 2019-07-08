import styled from 'styled-components'

interface LoaderProps {
  show?: boolean
}
export const LoaderContainer = styled.div<LoaderProps>`
  @media (max-width: 769px) {
    position: absolute;
    z-index: 100;
    margin: 0px auto;
    width: 100%;
    height: 100%;
    max-width: 275px;
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`
