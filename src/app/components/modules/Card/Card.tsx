'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../../elements/Button/Button'

import { CardProps } from '@/app/constants/types'

import {
  CardContainer,
  CardDescription,
  CardEdit,
  CardEditFontSize,
  CardEditTitle,
  CardImage,
  CardTitle,
} from './Card.styles'

export const Card: React.FC<CardProps> = ({
  title,
  price,
  quantity,
  description,
  srcImage,
  id,
}) => {
  const [showEdit, setShowedit] = useState<boolean>(true)
  const [titleValue, setTitleValue] = useState<string>(title)
  const [fontSize, setFontSize] = useState<string>('1.2')

  const handleTitleChange = (value: string) => {
    setTitleValue(value)
  }

  const handleFontSizeChange = (value: string) => {
    setFontSize(value)
  }

  return (
    <CardContainer>
      <CardImage src={srcImage} alt='product image' width={400} height={100} />
      <CardTitle>{titleValue}</CardTitle>
      <CardDescription $fontSize={fontSize}>{description}</CardDescription>
      <Button
        action={() => console.log(`${title} added to cart`)}
        text='Add to cart'
        id={id}
      />
      <Link href={`/product/${id}`}>Learn More</Link>
      <CardEdit $show={showEdit}>
        <CardEditTitle
          type='text'
          value={titleValue}
          onChange={({ target }) => handleTitleChange(target.value)}
        />
        <CardEditFontSize
          type='range'
          min='1'
          max='2'
          step='0.2'
          value={fontSize}
          onChange={({ target }) => handleFontSizeChange(target.value)}
        />
      </CardEdit>
    </CardContainer>
  )
}
