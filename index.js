window.addEventListener("load", function () {
  registerSW();
});
async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log("SW Registration Failed"); 
    }
  }
}
