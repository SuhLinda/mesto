//переменные 
const closePopUp = document.querySelectorAll('.popup__button-close');
const openPopUp = document.querySelectorAll('.popup');

function showPopUp() {
  openPopUp.forEach(open => {
    open.addEventListener('click', function (evt) {
      openPopUp.classList.add('popup_opened');
    })
  })
}

function hidePopUp() {
  closePopUp.forEach(close => {
    close.addEventListener('click', function (evt) {
      openPopUp.classList.remove('popup_opened');
    })
  })
}