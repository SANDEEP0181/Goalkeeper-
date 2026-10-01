/* Reserved for the official InterLink authentication implementation.
   Do not invent SDK calls or accept client assertions as verified identity. */
(function(){
  "use strict";
  window.GoalkeeperInterLinkAuth = Object.freeze({
    isConfigured: function(){
      const c=window.GoalkeeperInterLinkConfig||{};
      return Boolean(c.enabled && c.appId);
    },
    authenticate: async function(){
      return {ok:false, reason:"official_auth_flow_required"};
    }
  });
})();