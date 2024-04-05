const inputEmail = document.querySelector('[name="e-mail"]');
const emailText = document.querySelector('.email-text');
const firstNameInput = document.querySelector('[name="first-name"]');
const firstNameText = document.querySelector('.first-name-text');
const lastNameInput = document.querySelector('[name="last-name"]');
const lastNameText = document.querySelector('.last-name-text');
const locationName = document.querySelector('[name="location"]');
const locationNameText = document.querySelector('.location-text');
const linkedin = document.querySelector('[name="linkedin-profile"]');
const linkedinText = document.querySelector('.linkedin-text');


const handleInputEmail = () => {
  emailText.innerText = inputEmail.value;
};

inputEmail.addEventListener('input', handleInputEmail);

const handleFirstNameInput = () => {
  firstNameText.innerText = firstNameInput.value;

};

firstNameInput.addEventListener('input', handleFirstNameInput);

const handleLastNameInput = () => {
  lastNameText.innerText = lastNameInput.value;
};

lastNameInput.addEventListener('input', handleLastNameInput);

const handleLocation = () => {
  locationNameText.innerText = locationName.value;
};

locationName.addEventListener('input', handleLocation);

const handleLinkedin = () => {
  linkedinText.innerText = linkedin.value;
};

linkedin.addEventListener('input', handleLinkedin);

// ------ String Includes -----
// const numeleMeu = 'Cristian';

// if(numeleMeu.includes('sti')) === false { // === includes da fie false fie true...
//   alert('Numele tau include sti');
// }