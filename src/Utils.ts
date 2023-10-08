const Utils = {
  isMobile: (): boolean => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent))
  },
  KEY_LEFT: 'ArrowLeft',
  KEY_RIGHT: 'ArrowRight'
}

export default Utils
