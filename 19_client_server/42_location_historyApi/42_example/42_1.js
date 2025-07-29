const filterFormElement = document.querySelector('.filter')

filterFormElement.addEventListener('submit', (event) => {
  event.preventDefault()
})

filterFormElement.addEventListener('change', () => {
  const formData = new FormData(filterFormElement)
  const formDataObj = Object.fromEntries(formData)
  // const paramsString = Object.entries(formDataObj)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .join('&')

  /* Можно так */ 
  const params = new URLSearchParams(formDataObj)
  const paramsString = params.toString()

  window.history.replaceState(
    {},
    '',
    `${window.location.pathname}?${paramsString}`
  )
})

// window.location.search
//   .replace('?', '')
//   .split('&')
//   .forEach((queryParam) => {
//     const [name, value] = queryParam.split('=')

//     filterFormElement[name].value = value
// })
const paramsFromUrl = new URLSearchParams(window.location.search)
paramsFromUrl.forEach((value, name) => {
  filterFormElement[name].value = value
})