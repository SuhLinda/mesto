// определение переменных
const buttonEdit = document.querySelector('.profile__info-edit');// кнопка открытия окна редактирования popUpEdit
const popUpEdit = document.querySelector('.popup_edit');//окно popUp edit
const popups = document.querySelectorAll('.popup');// кнопка закрытия popUpS
const formEditElement = document.querySelector('#popup__form_edit');
const nameInput = document.querySelector('#name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.querySelector('#description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const buttonAdd = document.querySelector('.profile__add-button');// кнопка открытия окна добавления карточек popUpAdd
const formPlace = document.querySelector('.popup__fieldset-input');
const popUpAdd = document.querySelector('.popup_card');//окно popUp card
const formAddElement = document.querySelector('#popup__form_card');
const nameInputCard = document.querySelector('#name-input_card');
const linkInput = document.querySelector('#image-input');
const buttonZoom = document.querySelector('.popup-zoom__image');//клик для открытия popUpZoom
const popUpZoom = document.querySelector('#popup-zoom');//окно popUp zoom
const imgZoom = document.querySelector('.popup-zoom__image');
const templateElement = document.querySelector('#template__element');//для будущего клона карточки
const textZoom = document.querySelector('.popup-zoom__subtitle');
const elements = document.querySelector('.elements');

// функция открытия popUpS
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
}

// закрытие PopUpS
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}

function fillPopupEditInputs() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
}

// функция присвоения введённых данных
function submitEditForm (evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  closePopUp(popUpEdit);
}
  
// функция создания карточек
function createCard (name, link) {
  const elementCard = templateElement.content.cloneNode(true);
  const img = elementCard.querySelector('.element__image');
  const text = elementCard.querySelector('.element__text');
  const buttonLike = elementCard.querySelector('.element__stroke');
  const buttonDelete = elementCard.querySelector('.element__delete');

  img.src = link;
  img.alt = name;
  text.textContent = name;

  img.addEventListener('click', () => {
    openPopUp(popUpZoom);
    imgZoom.src = img.src;
    imgZoom.alt = text.textContent;
    textZoom.textContent = text.textContent;
  })
  buttonLike.addEventListener('click', (evt) => evt.target.classList.toggle('element__stroke_active'));
  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.element').remove()); 

  return elementCard;
}

//ставим новый элемент на 1ое место
function prependCard(box, card) {
  box.prepend(card);
}

// функция добавления карточек
initialCards.forEach((card) => prependCard(elements, createCard(card.name, card.link)));

formAddElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  prependCard(elements, createCard(nameInputCard.value, linkInput.value));
  formAddElement.reset();
  closePopUp(popUpAdd);
});

// слушатели

//перебираем окна popup и слушаем кнопку close
popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
      closePopUp(popup);
    }
  })
})

buttonEdit.addEventListener('click', () => {openPopUp(popUpEdit), fillPopupEditInputs(popUpEdit)});//слушает клик и открывает popUpEdit
formEditElement.addEventListener('submit', submitEditForm);//слушает клик и заносит данные в EditForm
buttonAdd.addEventListener('click', () => {openPopUp(popUpAdd)});//слушает клик и открывает popUpAdd
buttonZoom.addEventListener('click', () => {openPopUp(popUpZoom)});//слушает клик и открывает popUpZoom