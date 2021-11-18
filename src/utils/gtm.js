export const triggerTagManagerEvent = (event) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: event,
    })
  } else {
    console.log("window.dataLayer is undefined => check src/utils/gtm.js")
  }
}
