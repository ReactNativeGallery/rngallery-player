import * as React from 'react'

interface SourceProps {
  mediatype: string
  id: string
  baseSourceGifGiant: string
}
export const Source = ({ mediatype, id, baseSourceGifGiant }: SourceProps) => (
  <source
    src={`${baseSourceGifGiant}${id}.${mediatype}`}
    type={`video/${mediatype}`}
  />
)
