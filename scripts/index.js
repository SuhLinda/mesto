// определение переменных
let buttonEdit = document.querySelector('.profile__info-edit');
let formPopUp = document.querySelector('.popup');
let buttonClose = document.getElementById('popup__button-close_edit');
let formElement = document.getElementById('popup__form');
let nameInput = document.getElementById('name-input');
let newName = document.querySelector('.profile__info-title');
let jobInput = document.getElementById('description-input');
let newJob = document.querySelector('.profile__info-subtitle');
const elementsContainer = document.querySelector('.elements');
const templateElement = document.querySelector('#template__element').content;

let buttonAdd = document.querySelector('.profile__add-button');
let formPopUpAdd = document.getElementById('popup__card');
let buttonCloseAdd = document.getElementById('popup__button-close_card');
let formElementAdd = document.getElementById('popup__form__card');
let nameInputCard = document.getElementById('name-input_card');
let newNameCard = document.querySelector('.element__text');
let linkInput = document.getElementById('image-input');
let newlink = document.querySelector('.profile__info-subtitle');

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
  const elementCard = templateElement.cloneNode(true);

  elementCard.querySelector('.element__image').src = element.link;
  elementCard.querySelector('.element__text').textContent = element.name;

  elementsContainer.append(elementCard);

  elementCard.querySelector('.element__stroke').addEventListener('click', function (evt) {
    evt.classList.toggle('.element__stroke_active');
  }); 

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

// функция открытия popUpCard
function showPopUpCard() {
  nameInputCard.value = 'Название';
  linkInput.value = 'Ссылка на картинку';
  formPopUpAdd.classList.add('popup_opened');
}

//функция закрытия popUpCard
function hidePopUpCard() {
  formPopUpAdd.classList.remove('popup_opened');
}

// функция присвоения введённых данных card
function submitAddForm (evt) {
  evt.preventDefault();

  initialCards.slice(0, 0,
    'name: nameInputCard.textContent',
    'link: linkInput.value'
  );

  initialCards.pop();

  hidePopUpCard()
}


// слушатели клика
buttonEdit.addEventListener('click', showPopUp);
buttonClose.addEventListener('click', hidePopUp);
formElement.addEventListener('submit', submitHandlerForm);
buttonAdd.addEventListener('click', showPopUpCard);
buttonCloseAdd.addEventListener('click', hidePopUpCard);
formElementAdd.addEventListener('click', submitAddForm);