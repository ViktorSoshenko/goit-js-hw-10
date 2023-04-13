import './css/styles.css';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');

input.addEventListener('input', event => {
  event.currentTarget.value;
  fetchCountries(event.currentTarget.value)
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
  console.log(event.currentTarget.value);
});
// fetch('https://restcountries.com/v3.1/all')
//   .then(r => r.json())
//   .then(console.log);
//restcountries.com/v3.1/name/{name}
const BASE_URL = 'https://restcountries.com/v3.1/name/';
const fields = 'fields=name,capital,population,flags,languages';
function fetchCountries(name) {
  return fetch(`${BASE_URL}${input.value}?${fields}`)
    .then(response => response.json())
    .catch(error => console.error());
}

// function coutntry(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/{${event.currentTarget.value}}`
//   );
// }

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `
          <li>
            <p><b>name</b>: ${user.name.official}</p>
            <p><b>capital </b>: ${user.capital}</p>
            <p><b>population </b>: ${user.population}</p>
             <p><IMG SRC="${user.flags.svg}" height = 40px></p>
             <p><b>languages </b>: ${user.languages}</p>
          </li>
      `;
    })
    .join('');
  list.innerHTML = markup;
  console.log('fdfdfdf');
}
