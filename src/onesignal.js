import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  <script
    src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
    async=""
  ></script>;
  window.OneSignal = window.OneSignal || [];
  await OneSignal.init({
    appId: "c52f4ef1-f5b6-4095-86d5-1ad49f0359c8",
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
