import './css/styles.css';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
input.addEventListener('input', () => {
  fetchCountries()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});
// fetch('https://restcountries.com/v3.1/all')
//   .then(r => r.json())
//   .then(console.log);

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/all?fields=name,capital,population,flags,lang`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

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
  console.log(languages);
}
