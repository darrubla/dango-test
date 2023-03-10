import styled from 'styled-components'
import Image from 'next/image'

export const CardContainer = styled.div`
  display: grid;
  border: 1px solid black;
  padding: 1rem;
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
  width: 30rem;
  height: 8rem;
  margin: 0 auto;
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

export const CardEdit = styled.div<{ $show: Boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`

export const CardEditTitle = styled.input`
  width: 100%;
`

export const CardEditFontSize = styled.input`
  width: 100%;
`
