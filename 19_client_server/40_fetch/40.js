const loadPostFormElement = document.querySelector(".load-post-form")
const postIdInputElement = document.querySelector("#post-id")
const resultElement = document.querySelector(".result")
const createPostFormElement = document.querySelector(".create-post-form")
const searchPostFormElements = document.querySelector('.search-posts-form')
const postViewsInputElements = document.querySelector('#post-views')
const searchPostsWithLetterElements = document.querySelector('.search-posts-starts-with-form')
const letterInputElements = document.querySelector('#letter-starts')


/* Создание поста */
createPostFormElement.addEventListener("submit", (event) => {
  event.preventDefault()

  const formData = new FormData(createPostFormElement);
  const formDataObject = Object.fromEntries(formData);

  fetch("http://localhost:3000/posts", {
    method: "post", // указываем метод
    body: JSON.stringify({ // указываем все параметры, которые приходят из формы
      ...formDataObject,
      views: 0,
    }),
    headers: { // заголовки
      'Content-type': 'application/json; charset=UTF-8',
      'X-Auth-Token': 'blabla' // ключ сеанса (токен авторизации)
    },
    // credentials: 'include', // куки
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
});

/* Поиск поста */
loadPostFormElement.addEventListener("submit", (event) => {
  event.preventDefault()

  fetch(`http://localhost:3000/posts/${postIdInputElement.value}`) // два аргумента: url, options
    .then((response) => { // получаем ответ от сервера

      if (!response.ok) { // если response.ok выдал false, то прокидываем ошибку 
        const errorMessage =
          response.status === 404
            ? "Задача по указнному идентификатору не найден"
            : "Что-то пошло не так :("

        throw new Error(errorMessage);
      }

      return response.json();
    })
    .then((json) => { // json - объект ответа от сервера
      console.log(json);

      const { title, views } = json

      /* вставляем результат от сервера в результирующий див */
      resultElement.innerHTML = `
            <p>${title}, просмотров: ${views}</p>
          `
    })
    .catch((error) => { // обрабатываем прокинутую ошибку
      console.log(error);
      resultElement.innerHTML = error.message;
    })
})


/* Фильтрация по параметрам */
searchPostFormElements.addEventListener('submit', (event) => {
  event.preventDefault()

  fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElements.value}`) // указываем параметры get-запросов - endpoint?параметр =значение&параметр=значение в данном случае где просмотры >= значению
    .then((response) => response.json())
    .then((json) => { // получаем список всех отфильтрованных постов по просмотрам
      resultElement.innerHTML = json // вставляем в результат по каждому из посту элемент в html
        .map(({ title, views }) => `<p>${title}, просмотров ${views}</p>`)
        .join('') // разделяем массив, полученный из map
    })
})


/* Все посты начинающиеся с символов */
searchPostsWithLetterElements.addEventListener('submit', (event) => {
  event.preventDefault()
  
  fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((json) => {
      const filteredJson = json.filter((post) => post.title && post.title[0].toLowerCase() === letterInputElements.value.toLowerCase())
      resultElement.innerHTML = filteredJson
        .map(({ id }) => `<p>${id}</p>`)
        .join('')
    })
})