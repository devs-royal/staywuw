// conektaScripts.js
export const loadConektaScripts = () => {
    const scripts = [
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" },
      { src: "https://cdn.conekta.io/js/latest/conekta.js" }
    ];
  
    scripts.forEach(scriptInfo => {
      const script = document.createElement('script');
      script.src = scriptInfo.src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    });
  };
  
  export const unloadConektaScripts = () => {
    const scripts = document.querySelectorAll("script[src*='conekta.js'], script[src*='jquery.min.js']");
    scripts.forEach(script => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    });
  };
  