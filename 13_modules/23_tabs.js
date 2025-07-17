export const selectors = { name: 'alexander' }

export default function() { // при default можем вообще не указывать имя
    console.log('InitTabs')
}

// export default initTabs // в случае если функция была бы стрелочной

// export { selectors as tabsSelectors }