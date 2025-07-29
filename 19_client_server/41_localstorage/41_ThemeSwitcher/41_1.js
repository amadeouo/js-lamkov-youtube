class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-theme-switcher]',
  }

  themes = {
    dark: 'dark',
    light: 'light',
  }

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  }

  storageKey = 'theme'

  constructor() {
    this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
    this.setInitialTheme()
    this.bindEvents()
  }

  /* проверка на наличие темной теме в кеше */
  get isDarkThemeCached() { // выносим через get, чтобы можно было обращаться как к обычному свойству (this.isDarkThemeCached)
    return localStorage.getItem(this.storageKey) === this.themes.dark
  }

  /* устанавливаем тему по умолчанию */
  setInitialTheme() { 
    document.documentElement.classList.toggle(  // включаем класс is-dark-theme, если он есть в кеше
      this.stateClasses.isDarkTheme,
      this.isDarkThemeCached
    )
  }
  
  /* Устанавливаем по ключу и  */
  onClick = () => { // объявлеяем именно так, чтобы можно было использовать в bindEvents
    localStorage.setItem(
      this.storageKey, // используем 'theme'
      this.isDarkThemeCached ? this.themes.light : this.themes.dark // тернарник на значение из themes
    )

    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme) 
  }

  bindEvents() {
    this.switchThemeButtonElement.addEventListener('click', this.onClick)
  }
}

new ThemeSwitcher()