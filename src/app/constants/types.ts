import { Dispatch, SetStateAction } from 'react'

type ButtonProps = {
  text: string
  action: () => void
  id: string | number
}

interface CardProps {
  title: string
  price: number
  quantity: number
  description: string
  id: number
  srcImage: string
}

type SummaContextType = {
  values: Object
  setValues: Dispatch<
    SetStateAction<{
      1: number
      2: number
      3: number
      4: number
      5: number
      6: number
      7: number
    }>
  >
}

export type { CardProps, ButtonProps, SummaContextType }
