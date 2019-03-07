import styled from 'styled-components'

interface Props {
  minWidth?: number
  cursorPointer?: boolean
  isRotate?: boolean
  isPlaying?: boolean
}

export const Smartphone = styled.div<Props>`
  position: relative;
  padding: 65px 12px;
  background: rgba(49, 49, 49, 0.8);
  border-radius: 38px;
  box-shadow: inset 0 0 3px 0 rgb(79, 86, 95, 0.2);
  border: solid 1px rgb(79, 86, 95, 0.2);
  max-width: 275px;
  min-width: ${({ minWidth }) => (minWidth && `${minWidth}px`) || '194px'};
  min-height: 250px;
  margin: auto;
  cursor: ${({ cursorPointer }) =>
    cursorPointer ? 'pointer' : 'url(/static/images/play-circle.svg), auto;'};
  transform: ${({ isRotate }) => (isRotate ? 'rotate(-0.25turn)' : 'none')};
  margin-top: ${({ isRotate }) => (isRotate ? '-100px' : 'auto')};
  background: ${({ isPlaying }) =>
    isPlaying ? '#141414' : 'rgba(49, 49, 49, 0.8)'};
`
