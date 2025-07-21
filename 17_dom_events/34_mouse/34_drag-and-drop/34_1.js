class DragAndDrop {
    selectors = { // атрибуты html
        root: '[data-js-dnd]',
    }

    stateClasses = { // классы состояний
        isDragging: 'is-dragging',
        isHidden: 'is-hidden',
    }

    stateVar = {
        eatenFood: [],
    }

    initialState = { // начальные значения
        offsetX: null,
        offsetY: null,
        isDragging: false,
        currentDraggingElement: null,
    }

    constructor() { // итоговый вывод
        this.state = { ...this.initialState }
        this.bindEvents()
    }

    resetState() {
        this.state = {...this.initialState}
    }

    onPointerDown(event) {
        const { target, x, y } = event // деструктуризацией выискиваем координаты верхней точки
        const isDraggable = target.matches(this.selectors.root) // Сравниваем классы выбранного элемента с необходимым нам классом

        if (!isDraggable) { // Если класс не сходится, то игнорируем эту функцию
            return 
        }

        target.classList.add(this.stateClasses.isDragging) // добавляем класс 'is-dragging' если мы нажали на элемент и держим его

        const { left, top } = target.getBoundingClientRect() // Вытаскиваем деструктуризацией текущие координаты относительно окна

        this.state = {
            offsetX: x - left, // Передаем корректные координаты
            offsetY: y - top, // Передаем корректные координаты
            isDragging: true, // Передаем информацию о том что мы держим элемент
            currentDraggingElement: target, // Передаем конкретный элемент, что мы передаем
        }
    }

    onPointerMove(event) {
        if (!this.state.isDragging) {
            return
        }


        const x = event.pageX - this.state.offsetX
        const y = event.pageY - this.state.offsetY


        this.state.currentDraggingElement.style.left = `${x}px`
        this.state.currentDraggingElement.style.top = `${y}px`
    }

    isFoodInMashenka() {
        const mashenka = document.querySelector('.mashenka')
        const mashenkaRect = mashenka.getBoundingClientRect()

        const foodElements = document.querySelectorAll('.draggable')
        const foodName = []
        foodElements.forEach((food) => {
            let foodRect = food.getBoundingClientRect()

            const isInside = (
                foodRect.top >= mashenkaRect.top &&
                foodRect.left >= mashenkaRect.left &&
                foodRect.bottom <= mashenkaRect.bottom &&
                foodRect.right <= mashenkaRect.right
            );

            if (isInside) {
                food.classList.add('is-hidden')
                this.stateVar.eatenFood.push(food.classList[0])
            }
        })
    }

    isAllFoodInMashenka() {
        if (this.stateVar.eatenFood.length === 3) {
            const gameWinner = document.querySelector('.game')
            gameWinner.classList.remove('is-hidden')
        }
    }

    onPointerUp() {
        if (!this.state.isDragging) {
            return
        }

        this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
        this.isFoodInMashenka()
        this.isAllFoodInMashenka()
        this.resetState()
        console.log(this.stateVar)
    }

    bindEvents() {
        document.addEventListener('pointerdown', (event) => this.onPointerDown(event))
        document.addEventListener('pointermove', (event) => this.onPointerMove(event))
        document.addEventListener('pointerup', () => this.onPointerUp())
    }
}



new DragAndDrop()
