const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // store the triggered event obj
  window.deferredPrompt = event;
  // unhide the INSTALL button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  // validate that we GRABBED an EVENT
  if (!promptEvent) {
    return;
  }
  // show the prompt to user
  promptEvent.prompt();
  // reset out event obj
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // clearing out the prompt obj
  window.deferredPrompt = null;
});
