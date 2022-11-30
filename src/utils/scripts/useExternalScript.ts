import React from "react";


export const useExternalScript = (url: string) => {
  const [script, setScript] = React.useState({
    idle: false,
    loading: true,
    ready: false,
  })

  React.useEffect(()=>{
    if (!url) {
      setScript(curr => { return { ...curr, idle: true }})
    }
    const handleLoad = (event: Event) => {
    const loaded = event.type === "load" ? true : false
      setScript(curr => { return { ...curr, loading: !loaded, ready: loaded }})
    }
    const scriptElement = document.querySelector(`script[src="${url}]`) as HTMLElement | null

    if (!scriptElement) {
      const newScript = document.createElement('script');
      newScript.charset = 'utf-8';
      newScript.src = url;
      newScript.async = true;
      document.body.appendChild(newScript)
      newScript.addEventListener('load', handleLoad)
      newScript.addEventListener('error', handleLoad)
    }else {
      scriptElement.addEventListener('load', handleLoad)
      scriptElement.addEventListener('error', handleLoad)
    }

    return () => {
      scriptElement?.removeEventListener('load', handleLoad)
      scriptElement?.removeEventListener('error', handleLoad)
    }
  },[url])

  return script
}
