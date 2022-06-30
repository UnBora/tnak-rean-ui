import OneSignal from "react-onesignal";
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>;
export default async function runOneSignal() {
  await OneSignal.init({
    appId: "d619bf9c-14b7-4ed3-98cd-a1f7a4256156",
    allowLocalhostAsSecureOrigin: true,
    setInitialized: true,
  });
  OneSignal.showSlidedownPrompt();
}
