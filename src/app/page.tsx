'use client'
import { Card } from './components/modules/Card/Card'
import { Summa } from './components/modules/Summa/Summa'
import { GridContainer } from './components/styles/page.styles'
import { Cards } from './constants/cards'
import { SummaProvider } from './context/summaContext'

export default function Home() {
  return (
    <>
      <SummaProvider>
        <GridContainer>
          {Cards.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </GridContainer>
        <Summa />
      </SummaProvider>
    </>
  )
}
