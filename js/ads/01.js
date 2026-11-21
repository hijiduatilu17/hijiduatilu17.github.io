(function(){
  var h=location.hostname.toLowerCase();
  if(!h.endsWith(".pages.dev"))return;

  var e=document.createElement("div");
  e.id="ads-pagesdev-bauval-01";
  document.body.appendChild(e);

  window.atOptions={
    key:"d43430f40ad6ac961798129c1272c473",
    format:"iframe",
    height:60,
    width:468,
    params:{}
  };

  var s=document.createElement("script");
  s.src="https://bauval.org/22/d43430f40ad6ac961798129c1272c473";
  e.appendChild(s);
})();
