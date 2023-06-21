import { ReactElement } from "react"
import styled from "styled-components"

type CardProps = {
  header?: string,
  children?: ReactElement | ReactElement[]
}

const CardWrapper = styled.section`
  padding: 4rem 10%;
`

const Header = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`

export const Card = (props: CardProps) => {
  const {header, children} = props

  return(
  <CardWrapper>
    <Header>{header}</Header>
    {children}
  </CardWrapper>
  )
}