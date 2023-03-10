import { useContext, createContext, ReactNode, useState, useMemo } from 'react'
import { SummaContextType } from '../constants/types'

const summaContextDefaultValues: SummaContextType = {
  values: {
    1: 12,
    2: 12,
    3: 12,
    4: 12,
    5: 12,
    6: 12,
    7: 12,
  },
  setValues: () => {},
}

const SummaContext = createContext<SummaContextType>(summaContextDefaultValues)

export function useSumma() {
  return useContext(SummaContext)
}

type Props = {
  children: ReactNode
}

export function SummaProvider({ children }: Props) {
  const [values, setValues] = useState({
    1: 12,
    2: 12,
    3: 12,
    4: 12,
    5: 12,
    6: 12,
    7: 12,
  })
  const sum = () => {
    // const quantities = Object.values(summa)
    // const result = quantities.reduce((acc, item) => acc + item, 0)
    // setSumma(result)
  }
  const value = useMemo(
    () => ({
      values,
      setValues,
    }),
    [values]
  )

  return <SummaContext.Provider value={value}>{children}</SummaContext.Provider>
}
