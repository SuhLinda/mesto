// определение переменных
const buttonEdit = document.querySelector('.profile__info-edit');// кнопка открытия окна редактирования popUpEdit
const popUpEdit = document.querySelector('.popup__window-edit');//окно popUp edit
const buttonCloses = document.querySelectorAll('.popup__button-close');// кнопка закрытия popUpS
const formEditElement = document.getElementById('popup__form');
const nameInput = document.getElementById('name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.getElementById('description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const buttonAdd = document.querySelector('.profile__add-button');// кнопка открытия окна добавления карточек popUpAdd
const formPlace = document.querySelector('.popup__fieldset-input');
const popUpAdd = document.querySelector('.popup__window-card');//окно popUp card
const formAddElement = document.getElementById('popup__form_card');
const nameInputCard = document.getElementById('name-input_card');
const linkInput = document.getElementById('image-input');
const buttonZoom = document.querySelector('.popup-zoom__image');//клик для открытия popUpZoom
const popUpZoom = document.getElementById('popup-zoom');//окно popUp zoom
const imgZoom = document.querySelector('.popup-zoom__image');
const templateElement = document.getElementById('template__element');//для будущего клона карточки
const textZoom = document.querySelector('.popup-zoom__subtitle');
const elements = document.querySelector('.elements');

// функция открытия popUpS
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  return popUp;
}

// закрытие PopUpS
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}

//перебираем все кнопки close
buttonCloses.forEach(closes => {
  closes.addEventListener('click', function () {
    closes.closest('.popup').classList.remove('popup_opened');
  })
})

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
    img.alt = text.textContent;
    textZoom.textContent = text.textContent;
  })
  buttonLike.addEventListener('click', (evt) => evt.target.classList.toggle('element__stroke_active'));
  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.element').remove()); 

  return elementCard;
}

//очищаем форму
function resetForm() {
  nameInputCard.value.reset;
  linkInput.value.reset;
}

//отменяем стандартное действие
function formDefault(evt) {
  evt.preventDefault();
}

//ставим новый элемент на 1ое место
function prependEnd(box, card) {
  box.prepend(card);
}

// функция добавления карточек
initialCards.forEach((card) => prependEnd(elements, createCard(card.name, card.link)));

formAddElement.addEventListener('submit', (evt) => {
  resetForm();
  prependEnd(elements, createCard(nameInputCard.value, linkInput.value));
  formDefault(evt);
  closePopUp(popUpAdd);
});

// слушатели
buttonEdit.addEventListener('click', () => {openPopUp(popUpEdit), submitEditForm});//слушает клик и открывает popUpEdit
formEditElement.addEventListener('submit', submitEditForm);//слушает клик и заносит данные в EditForm
buttonAdd.addEventListener('click', () => {openPopUp(popUpAdd)});//слушает клик и открывает popUpAdd
formAddElement.addEventListener('submit', (evt) => {formDefault(evt);});
buttonZoom.addEventListener('click', () => {openPopUp(popUpZoom)});//слушает клик и открывает popUpZoom