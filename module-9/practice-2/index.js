/* 
    1. Implement adding author
    2. Implement rendering authors (with mock data)
    3. Change mock data to real one
*/

import api from "./scripts/api.js";

const addAuthorFormEl = document.getElementById("addAuthorForm");
const authorsNumberEl = document.getElementById("authorsNumber");
const authorsEl = document.getElementById("authors");

const addAuthor = (event) => {
  event.preventDefault();
  const authorName = event.target.authorName.value;

  if (authorName) {
    const delay = Math.random() > 0.5 ? 1500 : 2500;
    api.addAuthor(authorName, delay);
    renderAuthors();
  }
};

const renderAuthors = () => {
  api
    .getAuthors()
    .then((result) => {
      if (Array.isArray(result)) {
        authorsEl.innerHTML = "";
        authorsNumberEl.textContent = `There are ${result.length} authors in the system`;

        result.forEach((item) => {
          const el = document.createElement("li");
          el.textContent = item;
          authorsEl.appendChild(el);
        });
      }
    })
    .catch((err) => (authorsEl.innerHTML = err));
};

addAuthorFormEl.addEventListener("submit", addAuthor);
