import Column1Data from './data/Column1.html'
import Column2Data from './data/Column2.html'
import Column3Data from './data/Column3.html'
import Column4Data from './data/Column4.html'
import Column5Data from './data/Column5.html'
import Column6Data from './data/Column6.html'
import Column7Data from './data/Column7.html'

const mod = (x: number, y: number): number => {
  return ((x % y) + y) % y
}

class DataProvider {
  data: any[]

  constructor () {
    this.data = [Column1Data,
      Column2Data,
      Column3Data,
      Column4Data,
      Column5Data,
      Column6Data,
      Column7Data]
  }

  getCurrent (index: number): TrustedHTML {
    return this.data[mod(index, this.data.length)]
  }

  getNext (index: number): TrustedHTML {
    const current = mod((index + 1), this.data.length)

    return this.data[current]
  }

  getPrevious (index: number): TrustedHTML {
    const current = index - 1

    return this.getCurrent(current)
  }
}

export default DataProvider
