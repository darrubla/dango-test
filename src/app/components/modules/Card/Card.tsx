import { useEffect, useState } from 'react'
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
  CardLink,
  CardPrice,
  CardPriceContainer,
  CardQuantity,
  CardTitle,
} from './Card.styles'
import { useSumma } from '@/app/context/summaContext'
import { transformCurrency } from '@/app/utils'

export const Card: React.FC<CardProps> = ({
  title,
  price,
  quantity,
  description,
  srcImage,
  id,
}) => {
  const { setValues, values } = useSumma()
  const [showEdit, setShowedit] = useState<boolean>(false)
  const [titleValue, setTitleValue] = useState<string>(title)
  const [fontSize, setFontSize] = useState<string>('1.2')
  const [units, setUnits] = useState(quantity)

  useEffect(() => {
    setValues({
      ...values,
      [id]: units * price,
    })
  }, [units])

  return (
    <CardContainer>
      <CardImage src={srcImage} alt='product image' width={400} height={100} />
      <CardTitle>{titleValue}</CardTitle>
      <CardPriceContainer>
        <CardPrice>{transformCurrency(price)}</CardPrice>
        <CardQuantity
          value={units}
          type='number'
          min={0}
          step={1}
          max={10}
          onChange={({ target }) => setUnits(parseInt(target.value))}
        />
      </CardPriceContainer>
      <CardDescription $fontSize={fontSize}>{description}</CardDescription>
      <Button
        action={() =>
          console.log(`%c${title}`, 'color: blue', 'added to cart!')
        }
        text='Add to cart'
        id={id}
      />
      <Link href={`#`} legacyBehavior>
        <CardLink>Learn More</CardLink>
      </Link>
      <Button
        text={!showEdit ? 'Edit' : 'Close Edit'}
        action={() => setShowedit(!showEdit)}
        id='show-edit'
      />
      <CardEdit $show={showEdit}>
        <CardEditTitle
          type='text'
          value={titleValue}
          onChange={({ target }) => setTitleValue(target.value)}
        />
        <CardEditFontSize
          type='range'
          min='1'
          max='2'
          step='0.2'
          value={fontSize}
          onChange={({ target }) => setFontSize(target.value)}
        />
      </CardEdit>
    </CardContainer>
  )
}
