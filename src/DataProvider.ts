import Column1Data from './data/Crawlear.html'
import Column2Data from './data/ObsoleteEngine.html'
import Column3Data from './data/Tunnel.html'
import Column4Data from './data/Pulgon.html'
import Column5Data from './data/SpaceTrash.html'
import Column6Data from './data/Tetris.html'
import Column7Data from './data/AMP.html'

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
