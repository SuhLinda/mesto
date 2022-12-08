//определение переменных
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__fieldset-input');

//функция?добавляющая класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
  //найдём элемент ошибки в самой функции
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  //добавим класс к input с ошибкой
  formInput.classList.add('popup__fieldset-input_type_error');
  //заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  //покажем сообщение об ошибке
  formError.classList.add('popup__fieldset-error_active');
}

//функция, удаляющая класс с ошибкой
const hideInputError = (formElement, formInput) => {
  //найдём элемент ошибки
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  //удалим класс к input с ошибкой
  formInput.classList.remove('popup__fieldset-input_type_error');
  //скроем сообщение об ошибке
  formError.classList.remove('popup__fieldset-error_active');
  //очистим ошибку
  formError.textContent = '';
}

//функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    //покажем ошибку, если поле не прошло валидацию,передадим сообщение об ошибке 2м аргументом
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    //скроем ошибку, если проходит
    hideInputError(formElement, formInput);
  }
}

//функция для проверки введённых данных в нужных полях
const hasInvalidInput = (inputList) => {
  //переберём все элементы методом some
  return inputList.some((formInput) => {
    //если поле не валидно, колбэк вернёт true, обход массива прекратится и вся функция вернёт true
    return !formInput.validity.valid;
  })
}

//функция для стилизации кнопки save и add
const toggleButtonState = (inputList, buttonElement) => {
  //проверим валидность
  if (hasInvalidInput(inputList)) {
    //делаем кнопку неактивной
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__button-save_inactive');
  } else {
    //иначе кнопка активна
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove('popup__button-save_inactive');
  }
}

//вызовем функцию isValid слушателем
const setEventListeners = (formElement) => {
  //найдём все поля внутри формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.popup__fieldset-input'));
  //ищем кнопку отправки в текущей форме
  const buttonElement = formElement.querySelector('.popup__button-save');
  toggleButtonState(inputList, buttonElement);
  //переберём все элементы массива
  inputList.forEach((formInput) => {
    //добавим обработчик input каждому полю
    formInput.addEventListener('input', () => {
      //ывзовем isValid внутри колбэка, передадим ей форму и проверяемый элемент
      isValid(formElement, formInput);
      //вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    })
  })
}

const enableValidation = () => {
  //найдём все формы в DOM и сделаем из них массив
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  //переберём все элементы массива
  formList.forEach((formElement) => {
    //вызовем setEventListeners для каждой формы, передав ей элемент формы
    setEventListeners(formElement);
  })
}

//вызовем enableValidation
enableValidation();

//функция, ответственная за подключение всех форм
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__fieldset',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
