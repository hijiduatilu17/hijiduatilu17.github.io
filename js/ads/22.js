(function(){
  var h=location.hostname.toLowerCase();
  if(!h.endsWith(".pages.dev"))return;

  var e=document.createElement("div");
  e.id="ads-pagesdev-bauval-20";
  document.body.appendChild(e);

  window.atOptions={
    key:"96d8e614d8dd9226e531327d9137f1a1",
    format:"iframe",
    height:300,
    width:160,
    params:{}
  };

  var s=document.createElement("script");
  s.src="https://bauval.org/22/96d8e614d8dd9226e531327d9137f1a1";
  e.appendChild(s);
})();
