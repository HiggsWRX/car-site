const formatter = new Intl.NumberFormat('nl-NL', {
  maximumFractionDigits: 2
})

export const formatNumber = (value: number) => formatter.format(value)
