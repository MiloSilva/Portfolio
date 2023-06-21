import { styled } from "styled-components"

type HeaderProps = {
  imageURL?: string
  title?: string
}

const ImageWrapper = styled.img`

`

const HeaderText = styled.h1`

`

export const Header = (props: HeaderProps) => {
  const { imageURL, title } = props
  
  return (
    <section>
      <ImageWrapper src={imageURL}/>
      <HeaderText>{title}</HeaderText>
    </section>
  )
}