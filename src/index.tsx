import * as React from 'react'
import { Smartphone } from './Smartphone'
import { GifContainer } from './GifContainer'
import { Play } from './Play'
import { Sizer } from './Sizer'
import { Source } from './Source'
import { ButtonContainer, Button } from './Button'

const BASE_SOURCE_GIF_GIANT = 'https://giant.gfycat.com/'
const BASE_SOURCE_GIF_THUMBS = 'https://thumbs.gfycat.com/'

export interface Props {
  gifId: string
  username?: string
  slug?: string
  minWidth?: number
  autoplay?: boolean
  styles?: object
  rotate?: boolean
}

export default class Gif extends React.Component<Props> {
  static defaultProps = {
    minWidth: undefined,
    autoplay: false,
    styles: {},
    username: undefined,
    slug: undefined,
    rotate: false,
  }

  state = {
    play: this.props.autoplay,
    buttonHover: false,
    buttonClicked: false,
  }

  playPromise: any = undefined
  video: any

  onMouseEnterHandler = () => {
    if (this.props.autoplay) {
      return
    }
    this.play()
    this.setState({ play: true })
  }

  onMouseLeaveHandler = () => {
    if (this.props.autoplay) {
      return
    }
    this.pause()
    this.setState({ play: false })
  }

  onClick = () => {
    // const { username, slug } = this.props
    // window.location.href = `/${username}/${slug}`
  }

  pause = () => {
    if (this.playPromise !== undefined && this.playPromise.then) {
      this.playPromise.then(() => this.video.pause())
    }
  }

  play = () => {
    this.playPromise = this.video.play()
  }

  render() {
    const { gifId, username, slug, minWidth, autoplay, rotate } = this.props
    return (
      <Smartphone
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={this.onClick}
        minWidth={minWidth}
        isRotate={rotate}
        cursorPointer={autoplay}
        isPlaying={this.state.play}
      >
        <GifContainer>
          <Play show={!this.state.play} />
          <Sizer />
          <video
            ref={ref => {
              this.video = ref
              return undefined
            }}
            autoPlay={autoplay}
            loop
            playsInline
            preload="none"
            muted
            poster={`${BASE_SOURCE_GIF_THUMBS}${gifId}-poster.jpg`}
            style={{
              width: rotate ? 450 : '100%',
              height: rotate ? 250 : '100%',
              position: 'absolute',
              top: rotate ? 100 : 0,
              left: rotate ? -100 : 0,
              transform: rotate ? 'rotate(0.25turn)' : 'none',
            }}
          >
            <track kind="captions" />
            <Source
              id={gifId}
              mediatype="webm"
              baseSourceGifGiant={BASE_SOURCE_GIF_GIANT}
            />
            <Source
              id={gifId}
              mediatype="mp4"
              baseSourceGifGiant={BASE_SOURCE_GIF_GIANT}
            />
          </video>
        </GifContainer>
        <ButtonContainer>
          <Button
            onFocus={() => this.setState({ buttonHover: true })}
            onMouseOver={() => this.setState({ buttonHover: true })}
            onMouseLeave={() =>
              this.setState({ buttonHover: false, buttonClicked: false })
            }
            onClick={() => {
              window.location.href = `/${username}/${slug}`
              this.setState({ buttonClicked: true })
            }}
            hover={this.state.buttonHover}
            clicked={this.state.buttonClicked}
          />
        </ButtonContainer>
      </Smartphone>
    )
  }
}
