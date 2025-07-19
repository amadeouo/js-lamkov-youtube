const preloaderElement = document.querySelector('.preloader')

// preloaderCloseEvent = new Event('preloaderClose', { bubbles: true })

preloaderElement.addEventListener('animationend', (event) => {
    // console.log(event) // выведется два объекта со свойствами анимации
    if (event.animationName === 'fade-out') {
        preloaderElement.dispatchEvent(
            // new Event('preloaderClose', { bubbles: true }) // создаем собственное событие
            new CustomEvent('preloaderClosed', { // можно добавлять детали
            bubbles: true,
            detail: {
                closeAnimationName: event.animationName,
                closeAnimationDuration: event.elapsedTime,
            }})
        )
    }
})
