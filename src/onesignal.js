import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  <script
    src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
    async=""
  ></script>;
  window.OneSignal = window.OneSignal || [];
  await OneSignal.init({
    appId: "1557ea45-8f4a-473d-ad64-dff9355214ec",
    setInitialized: true,
    safari_web_id: "web.onesignal.auto.39e347a3-7290-467c-af89-3542a6fc2365",
    allowLocalhostAsSecureOrigin: true,
    notifyButton: {
      enable: true,
    },
    subdomainName: "tanrean",
  });
  OneSignal.showSlidedownPrompt();
}
