import type { ColumnDataProviderProps } from '../types/ColumnDataProvider'

const ColumnDataProvider = jest.fn().mockImplementation(() => {
  return {
    getData: jest.fn().mockImplementation(({ col1Classes, col2Classes, index }: ColumnDataProviderProps): TrustedHTML[] => {
      let col1
      let col2
      let col3

      if (index === 0) {
        col1 = `<div>column5 ${index}</div>`
        col2 = `<div>column1 ${index}</div>`
        col3 = `<div>column2 ${index}</div>`
      } else {
        col1 = `<div>column1 ${index}</div>`
        col2 = `<div>column2 ${index}</div>`
        col3 = `<div>column3 ${index}</div>`
      }

      return [col1, col2, col3]
    })
  }
})

export default ColumnDataProvider
