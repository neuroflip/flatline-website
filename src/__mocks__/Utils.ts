  const Utils = jest.fn()
  const isMobile = jest.fn((): boolean => {
            return true
        })

  module.exports = { 
    isMobile,
    KEY_LEFT: 'ArrowLeft',
    KEY_RIGHT: 'ArrowRight',
    WIDTH_TO_MOVE: 400
  }
  
  