// определение переменных
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
const buttonEdit = document.querySelector('.profile__info-edit');
const formPopUp = document.querySelector('.popup');
const buttonClose = document.getElementById('popup__button-close_edit');
const formElement = document.getElementById('popup__form');
const nameInput = document.getElementById('name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.getElementById('description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const formPopUpAdd = document.getElementById('popup__card');
const buttonCloseAdd = document.getElementById('popup__button-close_card');
const formElementAdd = document.getElementById('popup__form__card');
const nameInputCard = document.getElementById('name-input_card');
const linkInput = document.getElementById('image-input');
const elementsContainer = document.querySelector('.elements');
const templateElement = document.getElementById('template__element').content;
const formPopUpZoom = document.getElementById('popup_zoom');

// функция добавления карточек
initialCards.forEach(function (element) {
  const elementCard = templateElement.cloneNode(true);
  elementCard.querySelector('.element__image').src = element.link;
  elementCard.querySelector('.element__text').textContent = element.name;
  // открытие popUpZoom
  elementCard.querySelector('.element__image').addEventListener('click', function () {
    formPopUpZoom.style.display = 'flex';
    formPopUpZoom.style.visibility = 'visible';
    formPopUpZoom.style.opacity = '1';
    const imgZoom = document.getElementById('popup_zoom-image').src = element.link;
    const textZoom = document.getElementById('popup_zoom-subtitle').textContent = element.name;
  })
  elementsContainer.append(elementCard);
})

// buttonLike
const buttonLike = document.querySelectorAll('.element__stroke');
buttonLike.forEach(like => {
  like.addEventListener('click', function (evt) {
    like.classList.toggle('element__stroke_active');
  })
})

// buttonDelete
const buttonDelete = document.querySelectorAll('.element__delete');
buttonDelete.forEach(del => {
  del.addEventListener('click', function (evt) {
    const delItem = del.closest('.element');
    delItem.parentNode.removeChild(delItem);
  })
})

// закрытие PopUpZoom
document.querySelector('.popup_zoom-close').addEventListener('click', function () {
  formPopUpZoom.style.visibility = 'hidden';
  formPopUpZoom.style.opacity = '0';
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
  const elementCard = templateElement.cloneNode(true);
  elementCard.querySelector('.element__image').src = linkInput.value;
  elementCard.querySelector('.element__text').textContent = nameInputCard.value;
  elementsContainer.prepend(elementCard);
  elementsContainer.querySelector('.element__stroke').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__stroke_active');
  })
  const buttonDelete = document.querySelectorAll('.element__delete');
  buttonDelete.forEach(del => {
    del.addEventListener('click', function (evt) {
      const delItem = del.closest('.element');
      delItem.parentNode.removeChild(delItem);
  })
})
  hidePopUpCard()
    // открытие popUpZoom
  elementsContainer.querySelector('.element__image').addEventListener('click', function (evt) {
    formPopUpZoom.style.display = 'flex';
    formPopUpZoom.style.visibility = 'visible';
    formPopUpZoom.style.opacity = '1';
    const imgZoom = document.getElementById('popup_zoom-image').src = linkInput.value;
    const textZoom = document.getElementById('popup_zoom-subtitle').textContent = nameInputCard.value;
  })
}

// слушатели клика
buttonEdit.addEventListener('click', showPopUp);
buttonClose.addEventListener('click', hidePopUp);
formElement.addEventListener('submit', submitHandlerForm);
buttonAdd.addEventListener('click', showPopUpCard);
buttonCloseAdd.addEventListener('click', hidePopUpCard);
formElementAdd.addEventListener('submit', submitAddForm);