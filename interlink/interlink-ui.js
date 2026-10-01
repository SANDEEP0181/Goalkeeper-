(function(){
  "use strict";
  function byId(id){return document.getElementById(id);}
  function render(){
    const status = byId("interlinkStatus");
    const button = byId("interlinkConnectBtn");
    const cfg = window.GoalkeeperInterLinkConfig || {};
    if(!status || !button) return;
    if(cfg.enabled && cfg.appId){
      status.textContent = "Integration ready";
      button.disabled = false;
      button.textContent = "Connect InterLink";
    } else {
      status.textContent = "Integration not configured";
      button.disabled = true;
      button.textContent = "InterLink — Coming Soon";
    }
  }
  async function connect(){
    const r = await window.GoalkeeperInterLink?.authenticate();
    if(!r?.ok) {
      const status = byId("interlinkStatus");
      if(status) status.textContent = "Official InterLink credentials are required.";
    }
  }
  function init(){
    const b=byId("interlinkConnectBtn");
    if(b && !b.dataset.bound){ b.dataset.bound="1"; b.addEventListener("click",connect); }
    render();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();