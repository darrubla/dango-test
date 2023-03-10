export const transformCurrency = (value: number): string => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  })
  return currency.format(value)
}
