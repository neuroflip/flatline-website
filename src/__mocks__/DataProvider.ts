const DataProvider = jest.fn().mockImplementation(() => {
  return {
    getCurrent: jest.fn().mockImplementation((index: number): TrustedHTML => {
      if (index === 0) {
        return `<div>column1 ${index}</div>`
      } else {
        return `<div>column2 ${index}</div>`
      }
    }),
    getNext: jest.fn().mockImplementation((index: number): TrustedHTML => {
      if (index === 0) {
        return `<div>column2 ${index}</div>`
      } else {
        return `<div>column3 ${index}</div>`
      }
    }),
    getPrevious: jest.fn().mockImplementation((index: number): TrustedHTML => {
      if (index === 0) {
        return `<div>column5 ${index}</div>`
      } else {
        return `<div>column1 ${index}</div>`
      }
    })
  }
})

export default DataProvider
