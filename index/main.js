let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status')
let formElement = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('#edit-name');
let statusInput = document.querySelector('#edit-status');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    statusInput.value = profileStatus.textContent;
};

function closePopup() {
    popup.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 