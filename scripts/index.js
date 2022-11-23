// определение переменных
const buttonEdit = document.querySelector('.profile__info-edit');// кнопка открытия окна редактирования popUpEdit
const PopUpEdit = document.getElementById('popup__edit');
const buttonClose = document.getElementById('popup__button-close_edit');// кнопка закрытия popUpEdit
const formEditElement = document.getElementById('popup__form');
const nameInput = document.getElementById('name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.getElementById('description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const buttonAdd = document.querySelector('.profile__add-button');// кнопка открытия окна добавления карточек popUpAdd
const PopUpAdd = document.getElementById('popup__card');

const buttonCloseAdd = document.getElementById('popup__button-close_card');// кнопка закрытия popUpAdd

const formAddElement = document.getElementById('popup__form_card');
const nameInputCard = document.getElementById('name-input_card');
const linkInput = document.getElementById('image-input');
const elementsContainer = document.querySelector('.elements');

const templateElement = document.getElementById('template__element').content;

const PopUpZoom = document.getElementById('popup-zoom');

// функция создания карточек
function createCard () {}


// функция добавления карточек
initialCards.forEach(function (element) {
  const elementCard = templateElement.cloneNode(true);
  elementCard.querySelector('.element__image').src = element.link;
  elementCard.querySelector('.element__text').textContent = element.name;
  elementCard.querySelector('.element__image').alt = element.name;
  // открытие popUpZoom
  elementCard.querySelector('.element__image').addEventListener('click', function () {
    PopUpZoom.style.display = 'flex';
    PopUpZoom.style.visibility = 'visible';
    PopUpZoom.style.opacity = '1';
    const imgZoom = document.getElementById('popup-zoom__image').src = element.link;

    const textZoom = document.getElementById('popup-zoom__subtitle').textContent = element.name;
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
document.querySelector('.popup-zoom__close').addEventListener('click', function () {
  PopUpZoom.style.visibility = 'hidden';
  PopUpZoom.style.opacity = '0';
})

// функция открытия popUp
function showPopUp() {
    nameInput.value = newName.textContent;
    jobInput.value = newJob.textContent;
    PopUpEdit.classList.add('popup_opened');
}

//функция закрытия popUp
function hidePopUp() {
  PopUpEdit.classList.remove('popup_opened');
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
  PopUpAdd.classList.add('popup_opened');
}

//функция закрытия popUpCard
function hidePopUpCard() {
  PopUpAdd.classList.remove('popup_opened');
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
    PopUpZoom.style.display = 'flex';
    PopUpZoom.style.visibility = 'visible';
    PopUpZoom.style.opacity = '1';
    const imgZoom = document.getElementById('popup-zoom__image').src = linkInput.value;
    const textZoom = document.getElementById('popup-zoom__subtitle').textContent = nameInputCard.value;
  })
}

// слушатели клика
buttonEdit.addEventListener('click', showPopUp);
buttonClose.addEventListener('click', hidePopUp);
formEditElement.addEventListener('submit', submitHandlerForm);
buttonAdd.addEventListener('click', showPopUpCard);
buttonCloseAdd.addEventListener('click', hidePopUpCard);
formAddElement.addEventListener('submit', submitAddForm);