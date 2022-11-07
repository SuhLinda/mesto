// определение переменных
let buttonEdit = document.querySelector('.profile__info-edit');
let formPopUp = document.querySelector('.popup');
let closeButton = formPopUp.querySelector('.popup__button-close');
let formElement = document.getElementById('popup__form');
let nameInput = document.getElementById('name-input');
let newName = document.querySelector('.profile__info-title');
let jobInput = document.getElementById('description-input');
let newJob = document.querySelector('.profile__info-subtitle');

// функция открытия popUp
function showPopUp() {
    newName.textContent;
    newJob.textContent;
    formPopUp.classList.add('popup_opened');
};

//функция закрытия popUp
function hidePopUp() {
  formPopUp.classList.remove('popup_opened');
};

// функция присвоения введённых данных
function submitHandlerForm (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    hidePopUp();
};

// слушатели клика
buttonEdit.addEventListener('click', showPopUp);
closeButton.addEventListener('click', hidePopUp);
formElement.addEventListener('submit', submitHandlerForm);