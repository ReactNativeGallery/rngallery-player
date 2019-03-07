import styled from 'styled-components'

interface PlayProps {
  show?: boolean
}
export const Play = styled.div<PlayProps>`
  @media (max-width: 769px) {
    position: absolute;
    z-index: 100;
    margin: 0px auto;
    width: 100%;
    height: 100%;
    max-width: 275px;
    opacity: 0.5;
    content: url(/static/images/play-circle.svg);
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
`
