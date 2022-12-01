// определение переменных
const buttonEdit = document.querySelector('.profile__info-edit');// кнопка открытия окна редактирования popUpEdit
const popUpEdit = document.querySelector('.popup__edit');//окно popUp edit
const buttonClose = document.querySelectorAll('.popup__button-close');// кнопка закрытия popUpS
const buttonAdd = document.querySelector('.profile__add-button');// кнопка открытия окна добавления карточек popUpAdd
const popUpAdd = document.querySelector('.popup__card');//окно popUp card
const imgZoom = document.querySelector('.popup-zoom__image');
const textZoom = document.querySelector('.popup-zoom__subtitle');
const buttonZoom = document.querySelector('.popup-zoom__image');//клик для открытия popUpZoom
const popUpZoom = document.getElementById('popup-zoom');//окно popUp zoom
const elements = document.querySelector('.elements');

//// закрытие PopUpS
buttonClose.forEach(close => {
  close.addEventListener('click', function () {
    close.closest('.popup').classList.remove('popup_opened');
  })
})

// функция открытия popUpS
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  return popUp;
}

// функция присвоения введённых данных
function submitEditForm (evt) {
  evt.preventDefault();
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  hidePopUpCard()//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
  


const formEditElement = document.getElementById('popup__form');
const nameInput = document.getElementById('name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.getElementById('description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const formAddElement = document.getElementById('popup__form_card');
const nameInputCard = document.getElementById('name-input_card');
const linkInput = document.getElementById('image-input');
const elementsContainer = document.querySelector('.elements');
const templateElement = document.getElementById('template__element');


// функция создания карточек
function createCard () {
  const elementCard = templateElement.content.cloneNode(true);
  const img = elementCard.querySelector('.element__image');
  const text = elementCard.querySelector('.element__text');
  const buttonLike = elementCard.querySelector('.element__stroke');
  const buttonDelete = elementCard.querySelectorAll('.element__delete');
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
  buttonDelete.addEventListener('click', (evt) => evt.target.closest('.template__element').remove());

  return elementCard;
}



// функция добавления карточек
initialCards.forEach((card) => renderElement(elements, createCard(item.name, item.link)));


  elementCard.querySelector('.element__image').alt = element.name;
  // открытие popUpZoom
  lementCard.querySelector('.element__image').addEventListener('click', function () {
    popUpZoom.classList.add('popup_opened');
    const imgZoom = document.getElementById('popup-zoom__image').src = element.link;
    const textZoom = document.getElementById('popup-zoom__subtitle').textContent = element.name;
  })
  elementsContainer.append(elementCard);


// buttonLike
/*const buttonLike = document.querySelectorAll('.element__stroke');
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



// функция присвоения введённых данных card
function submitAddForm (evt) {
  evt.preventDefault();
  const elementCard = templateElement.content.cloneNode(true);
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
  hidePopUpCard()//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // открытие popUpZoom
  /*elementsContainer.querySelector('.element__image').addEventListener('click', function (evt) {
    popUpZoom.classList.add('popup_opened');
    const imgZoom = document.getElementById('popup-zoom__image').src = linkInput.value;
    const textZoom = document.getElementById('popup-zoom__subtitle').textContent = nameInputCard.value;
  })*/


// слушатели клика
buttonEdit.addEventListener('click', () => {openPopUp(popUpEdit), submitEditForm});//слушает клик и открывает popUpEdit
formEditElement.addEventListener('submit', submitEditForm);//слушает клик и заносит данные в EditForm
buttonAdd.addEventListener('click', () => {openPopUp(popUpAdd)});//слушает клик и открывает popUpAdd
formAddElement.addEventListener('submit', submitAddForm);
buttonZoom.addEventListener('click', () => {openPopUp(popUpZoom)});//слушает клик и открывает popUpZoom