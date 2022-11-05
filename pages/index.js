let editButton = document.querySelector('.profile__info_edit-button');
let formPopUp = document.querySelector('.popup');
let closeButton = formPopUp.querySelector('.popup__button-close');
let saveButton = formPopUp.querySelector('.popup__button-save');

function showPopUp() {
  formPopUp.classList.add('popup__opened');
};

function hidePopUp() {
  formPopUp.classList.remove('popup__opened');
};

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name_input');
let jobInput = document.querySelector('.popup__description_input');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    hidePopUp();
}

editButton.addEventListener('click', showPopUp);

closeButton.addEventListener('click', hidePopUp);

saveButton.addEventListener('submit', formSubmitHandler); 
