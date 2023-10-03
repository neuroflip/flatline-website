import type { ColumnDataProviderProps } from '../types/ColumnDataProvider'

const ColumnDataProvider = jest.fn().mockImplementation(() => {
  return {
    getData: jest.fn().mockImplementation(({ col1Classes, col2Classes, index }: ColumnDataProviderProps): TrustedHTML[] => {
      const col1 = index === 0 ? '<div>column5 0</div>' : '<div>column1 1</div>'
      const col2 = index === 0 ? '<div>column1 0</div>' : '<div>column2 1</div>'
      const col3 = index === 0 ? '<div>column2 0</div>' : '<div>column3 1</div>'

      return [col1, col2, col3]
    })
  }
})

export default ColumnDataProvider
