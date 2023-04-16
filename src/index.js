import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetch';
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
let inputSerch = '';

input.addEventListener('input', debounce(renderUserList, DEBOUNCE_DELAY));

function renderUserList(event) {
  event.preventDefault();
  inputSerch = input.value.trim();
  if (inputSerch === '') {
    clearAll();
    return;
  } else
    fetchCountries(inputSerch)
      .then(users => {
        if (users.length > 10) {
          moreTenElements();
        } else if (users.length > 1 && users.length < 10) {
          listCoutrys(users);
        } else {
          cartCountry(users);
        }
      })
      .catch(error => {
        clearAll();
        if (error.message === '404') {
          Notiflix.Notify.failure('Oops, there is no country with that name.');
          console.log(error);
        }
      });
}
function moreTenElements() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
  return clearAll();
}

function cartCountry(users) {
  const markup = users
    .map(user => {
      return `<li>
            <p><b>name</b>: ${user.name.official}</p>
            <p><b>capital </b>: ${user.capital}</p>
            <p><b>population </b>: ${user.population}</p>
            <p><b>languages </b>: ${Object.values(user.languages).join(',')}</p>
             <p><IMG SRC="${user.flags.svg}" height = 40px></p>
             </li>
      `;
    })
    .join('');
  list.innerHTML = markup;
}

function listCoutrys(users) {
  const markup = users
    .map(
      user =>
        `<li class=list-flex>
        <p><IMG SRC="${user.flags.svg}" height = 40px></p>
            <p>${user.name.official}</p>
            </li>`
    )
    .join('');
  list.innerHTML = markup;
}

function clearAll() {
  list.innerHTML = '';
}
