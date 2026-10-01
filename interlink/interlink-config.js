/* Goalkeeper × InterLink integration configuration.
   Safe for the client: never put secrets/private keys here. */
(function(){
  "use strict";
  const config = {
    enabled: false,
    environment: "production",
    appId: "",
    sdkVersion: "",
    integrationMode: "adapter",
    features: {
      identity: false,
      miniApp: false,
      payments: false,
      onChain: false,
      creatorCampaigns: false
    }
  };
  window.GoalkeeperInterLinkConfig = Object.freeze(config);
})();