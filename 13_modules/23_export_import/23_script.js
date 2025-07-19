// декомпозиция - разделение кода на более мелкие части 
// рефакторинг - измнение кода без изменения работоспособности

// import { initTabs } from "./tabs.js";
// import initTabs from "./tabs.js"; // указываем это в случае если указан export default
// import initTabs, { selectors } from "./tabs.js"; // Для дефолтного значения можно использовать любое имя
// import { initModals } from "./modals.js";
// import { initSliders } from "./sliders.js";

// initModals()
// initSliders()
// initTabs()

// import logCat, {a, b, c} from "./constants.js";
import * as constants from './constants/folder-1/folder-2/23_constants.js'
import { num } from './23_sayHi.js'



console.log(constants.a)
console.log(constants.b)
console.log(constants.c)
constants.logCat()