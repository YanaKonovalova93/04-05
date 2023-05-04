let authors = [];

const addAuthor = (authorName, delay) =>
  authors.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        authorName ? resolve(authorName) : reject("No name");
      }, delay);
    })
  );

const getAuthors = () => Promise.all(authors);

export default {
  addAuthor,
  getAuthors,
};

// const authors = [];

// const addAuthor = (authorName, delay) => {
//   authorName.push(
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         authorName ? resolve(authorName) : reject("No name");
//       }, delay);
//     })
//   );
// };

// const getAuthors = () => Promise.all(authors);

// export default {
//   addAuthor,
//   getAuthors,
// };


// промисифікація--------------

function sum(x, y) {
  const isSuccess = x > 0;

  if (isSuccess) {
    console.log("Success, hooray");
    return x + y;
  } else {
    console.log("Bad luck");
  }
}

function sum(x, y) {
  const isSuccess = x > 0;
  // if (isSuccess) {
  //   return Promise.resolve(x+y)
  // } else {
  //   return Promise.reject("failed");
  // }

  return isSuccess ? Promise.resolve(x + y) : Promise.reject("failed");
}

sum()
  .then((greeting) => console.log(greeting))
  .catch((error) => console.log(error));
