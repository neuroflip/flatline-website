import DataProvider from './DataProvider'
import type { ColumnDataProviderProps } from './types/ColumnDataProvider'

class ColumnDataProvider {
  dataProvider: DataProvider

  constructor () {
    this.dataProvider = new DataProvider()
  }

  getData ({ col1Classes, col2Classes, index }: ColumnDataProviderProps): TrustedHTML[] {
    let col1: TrustedHTML,
      col2: TrustedHTML,
      col3: TrustedHTML

    if (col1Classes.includes('current')) {
      col1 = this.dataProvider.getCurrent(index)
      col2 = this.dataProvider.getNext(index)
      col3 = this.dataProvider.getPrevious(index)
    } else if (col2Classes.includes('current')) {
      col1 = this.dataProvider.getPrevious(index)
      col2 = this.dataProvider.getCurrent(index)
      col3 = this.dataProvider.getNext(index)
    } else {
      col1 = this.dataProvider.getNext(index)
      col2 = this.dataProvider.getPrevious(index)
      col3 = this.dataProvider.getCurrent(index)
    }

    return [col1, col2, col3]
  }
}

export default ColumnDataProvider
