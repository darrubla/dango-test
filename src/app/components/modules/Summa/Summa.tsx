import { useSumma } from '@/app/context/summaContext'
import { SummaContainer, SummaLabel, SummaValue } from './Summa.styles'
import { transformCurrency } from '@/app/utils'

export const Summa: React.FC = () => {
  const { values } = useSumma()
  const handleSumma = () => {
    const arr = Object.values(values)
    return arr.reduce((acc, value) => acc + value, 0)
  }

  return (
    <SummaContainer>
      <SummaLabel>Total: </SummaLabel>
      <SummaValue> {transformCurrency(handleSumma())}</SummaValue>
    </SummaContainer>
  )
}
