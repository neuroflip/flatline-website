import { useEffect } from 'react';

const UseScript = (url: string, id: string, onLoadedCallback: (this: HTMLScriptElement, ev: Event) => any) => {
  useEffect(() => {
    const scriptElement = document.getElementById(id)
    const script = document.createElement('script')
    
    if(!scriptElement) {
      script.id = id;
      script.src = url
      script.async = true
      if (onLoadedCallback) {
        script.addEventListener('load', onLoadedCallback)
      }

      document.body.appendChild(script);
    }

    return () => {
      script.parentElement && document.body.removeChild(script);
    }
  }, [url]);
};

export default UseScript;