import styled from 'styled-components'
import Image from 'next/image'

export const CardContainer = styled.div`
  display: grid;
  border: 1px solid black;
  padding: 2rem 1.5rem;
  & button {
    justify-self: center;
  }
  & > * {
    margin: 0.6rem 0;
  }
  & * {
    font-family: sans-serif;
  }
`

export const CardTitle = styled.h3`
  display: -webkit-box;
  font-weight: bold;
  font-size: 1.6rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CardImage = styled(Image)`
  width: 90%;
  height: 8rem;
  border-radius: 0.8rem;
  background-color: papayawhip;
  object-fit: contain;
  margin: 0 auto 1.5rem;
`

export const CardPriceContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const CardPrice = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`

export const CardQuantity = styled.input`
  border: 1px solid gray;
  heigh: 2.5rem;
  padding: 0.5rem;
`

export const CardDescription = styled.p<{ $fontSize: string }>`
  display: -webkit-box;
  font-weight: regular;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '1.2')}rem;
  color: gray;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CardLink = styled.a`
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  cursor: pointer;
  justify-self: center;
  font-size: 1.4rem;
`

export const CardEdit = styled.div<{ $show: Boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`

export const CardEditTitle = styled.input`
  width: 100%;
  font-size: 1rem;
  heigh: 2.5rem;
  padding: 0.5rem;
`

export const CardEditFontSize = styled.input`
  width: 100%;
  margin-top: 1.5rem;
`
