// определение переменных
let buttonEdit = document.querySelector('.profile__info-edit');
let formPopUp = document.querySelector('.popup');
let closeButton = formPopUp.querySelector('.popup__button-close');
let formElement = document.getElementById('popup__form');
let nameInput = document.getElementById('name-input');
let newName = document.querySelector('.profile__info-title');
let jobInput = document.getElementById('description-input');
let newJob = document.querySelector('.profile__info-subtitle');

const elementsContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// функция добавления карточек
initialCards.forEach(function (element) {
  const templateElement = document.querySelector('#template__element').content;
  const elementCard = templateElement.cloneNode(true);

  elementCard.querySelector('.element__image').src = element.link;
  elementCard.querySelector('.element__text').textContent = element.name;
  elementsContainer.append(elementCard);
})

// функция открытия popUp
function showPopUp() {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    formPopUp.classList.add('popup_opened');
}

//функция закрытия popUp
function hidePopUp() {
  formPopUp.classList.remove('popup_opened');
}

// функция присвоения введённых данных
function submitHandlerForm (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    hidePopUp()
}

// слушатели клика
buttonEdit.addEventListener('click', showPopUp);
closeButton.addEventListener('click', hidePopUp);
formElement.addEventListener('submit', submitHandlerForm);