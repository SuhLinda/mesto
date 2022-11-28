// определение переменных
const buttonEdit = document.querySelector('.profile__info-edit');// кнопка открытия окна редактирования popUpEdit
const popUpEdit = document.querySelector('.popup__edit');//окно popUp edit
const buttonClose = document.querySelectorAll('.popup__button-close');// кнопка закрытия popUpS
const buttonAdd = document.querySelector('.profile__add-button');// кнопка открытия окна добавления карточек popUpAdd
const popUpAdd = document.querySelector('.popup__card');//окно popUp card

const popUpZoom = document.getElementById('popup-zoom');//окно popUp zoom

//// закрытие PopUpS
buttonClose.forEach(close => {
  close.addEventListener('click', function () {
    close.closest('.popup').classList.remove('popup_opened');
  })
})

const btnOpen = document.querySelectorAll('.open');

const formEditElement = document.getElementById('popup__form');
const nameInput = document.getElementById('name-input');
const newName = document.querySelector('.profile__info-title');
const jobInput = document.getElementById('description-input');
const newJob = document.querySelector('.profile__info-subtitle');
const formAddElement = document.getElementById('popup__form_card');
const nameInputCard = document.getElementById('name-input_card');
const linkInput = document.getElementById('image-input');
const elementsContainer = document.querySelector('.elements');
const templateElement = document.getElementById('template__element').content;




  // функция открытия popUpS
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  return popUp;
}

buttonEdit.addEventListener('click', openPopUp);


  /*btnOpen.forEach(open => {
    open.addEventListener('click', (evt) => {

      /*if (open.classList.contains('.profile__info-edit')) {
        popUpEdit.classList.add('popup_opened');
      } else if (open.target.classList.contains('.profile__add-button')){
        popUpAdd.classList.add('popup_opened');
      } else if (open.target.classList.contains('.element__image')){
        popUpZoom.classList.add('popup_opened');
      }*/

      /*const modalId = this.getAttribute('data-modal')
      modalEl = document.querySelector('.modal[data-modal = "'+ modalId + '"]');
      modalEl.classList.add('popup_opened');*/
      //evt.preventDefault();

      /*if (open.style.id = 'popup__edit') {
        popUpEdit.classList.add('popup_opened');
      } 
        if (open.style.id = 'popup__card') {
          popUpAdd.classList.add('popup_opened')
        }*/
      
      /*open[0] = document.querySelector('.popup__edit').classList.add('popup_opened');
      open[1] = document.querySelector('.popup__card').classList.add('popup_opened');
      open[2] = popUpZoom.classList.add('popup_opened');*/
    //})
  //})





/*function showPopUp() {
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  popUpEdit.classList.add('popup_opened');
  form.reset();
}

// функция открытия popUpCard
function showPopUpCard() {

  popUpAdd.classList.add('popup_opened');
  form.reset();
}*/


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
    popUpZoom.classList.add('popup_opened');
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

// функция присвоения введённых данных
function submitHandlerForm (evt) {
    evt.preventDefault();
    newName.textContent = nameInput.value;
    newJob.textContent = jobInput.value;
    hidePopUpCard()//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
  hidePopUpCard()//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // открытие popUpZoom
  /*elementsContainer.querySelector('.element__image').addEventListener('click', function (evt) {
    popUpZoom.classList.add('popup_opened');
    const imgZoom = document.getElementById('popup-zoom__image').src = linkInput.value;
    const textZoom = document.getElementById('popup-zoom__subtitle').textContent = nameInputCard.value;
  })*/
}

// слушатели клика

formEditElement.addEventListener('submit', submitHandlerForm);
//buttonAdd.addEventListener('click', showPopUpCard);
formAddElement.addEventListener('submit', submitAddForm);