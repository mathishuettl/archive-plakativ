export const getLanguageFromUrl = () => {
  const url = window.location.pathname
  const urlParts = url.split("/")
  let currentLanguage = "de"

  if (urlParts.length >= 1) {
  	if (urlParts[1] === "de") {
    	currentLanguage = "de"
    }
    if (urlParts[1] === "en") {
    	currentLanguage = "en"
    }
  }

  return currentLanguage
}
