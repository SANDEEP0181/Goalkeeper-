/* InterLink adapter boundary.
   The adapter deliberately fails closed until an official SDK/App ID is configured. */
(function(){
  "use strict";
  const cfg = window.GoalkeeperInterLinkConfig || {};
  let sdk = null;
  let initialized = false;

  function available(){
    return Boolean(cfg.enabled && cfg.appId && window.InterLink);
  }
  async function initialize(){
    if (!available()) return {ok:false, reason:"not_configured"};
    try {
      sdk = window.InterLink;
      initialized = true;
      return {ok:true};
    } catch(e) {
      console.warn("Goalkeeper InterLink init:", e);
      return {ok:false, reason:"init_failed"};
    }
  }
  async function authenticate(){
    if (!initialized) {
      const r = await initialize();
      if (!r.ok) return r;
    }
    return {ok:false, reason:"official_auth_flow_required"};
  }
  async function getIdentity(){
    return {ok:false, reason:"not_authenticated"};
  }
  function capabilities(){
    return cfg.features || {};
  }
  window.GoalkeeperInterLink = Object.freeze({
    available, initialize, authenticate, getIdentity, capabilities,
    status: () => ({configured:Boolean(cfg.appId), enabled:Boolean(cfg.enabled), initialized})
  });
})();