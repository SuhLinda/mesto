let editButton = document.querySelector('.profile__info-edit');
let formPopUp = document.querySelector('.popup');
let closeButton = formPopUp.querySelector('.popup__button-close');
let saveButton = formPopUp.querySelector('.popup__button-save');
let likeClick = document.querySelector('.elements__element-stroke');

function showPopUp() {
  formPopUp.classList.add('popup_opened');
};

function hidePopUp() {
  formPopUp.classList.remove('popup_opened');
};

function showLike() {
  likeClick.classList.add('elements__element-stroke_active');
};

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name-input');
let jobInput = document.querySelector('.popup__description-input');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    hidePopUp();
}

editButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', hidePopUp);
formElement.addEventListener('submit', formSubmitHandler);
likeClick.addEventListener('click', showLike);