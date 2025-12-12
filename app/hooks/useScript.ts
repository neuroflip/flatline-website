import { useEffect } from 'react';

const UseScript = (url: string, id: string, onLoadedCallback: (this: HTMLScriptElement, ev: Event) => any) => {
  useEffect(() => {
    const scriptElement = document.getElementById(id)
    const script = document.createElement('script')
    
    if(!scriptElement) {
      script.id = id;
      script.src = url
      script.async = true
      script.dataset.testid = id

      if (onLoadedCallback) {
        script.addEventListener('load', onLoadedCallback)
      }

      document.body.appendChild(script);
    }
  }, [url]);
};

export default UseScript;