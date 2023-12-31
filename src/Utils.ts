const Utils = {
  isMobile: (): boolean => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent))
  },
  KEY_LEFT: 'ArrowLeft',
  KEY_RIGHT: 'ArrowRight',
  WIDTH_TO_MOVE: 400
}

export default Utils
