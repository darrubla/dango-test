import { Card } from './components/modules/Card/Card'
import { Cards } from './constants/cards'

export default function Home() {
  return Cards.map((item) => <Card {...item} />)
}
