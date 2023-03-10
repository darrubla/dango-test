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
  setValues: Dispatch<SetStateAction<any>>
}

export type { CardProps, ButtonProps, SummaContextType }
