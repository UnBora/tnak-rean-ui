import OneSignal from "react-onesignal";

export default async function runOneSignal() {
  await OneSignal.init({
    appId: "d619bf9c-14b7-4ed3-98cd-a1f7a4256156",
    setInitialized: true,
    allowLocalhostAsSecureOrigin: true,
  });
  window.OneSignal = window.OneSignal || [];
  OneSignal.showSlidedownPrompt();
}
