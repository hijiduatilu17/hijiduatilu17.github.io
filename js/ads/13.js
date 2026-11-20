(function(){
  var h=location.hostname.toLowerCase();
  if(!h.endsWith(".pages.dev"))return;

  var e=document.createElement("div");
  e.id="ads-pagesdev-bauval-12";
  document.body.appendChild(e);

  window.atOptions={
    key:"3e0471fdc67e65acf3ab99a6117ff78e",
    format:"iframe",
    height:600,
    width:160,
    params:{}
  };

  var s=document.createElement("script");
  s.src="https://bauval.org/22/3e0471fdc67e65acf3ab99a6117ff78e";
  e.appendChild(s);
})();
