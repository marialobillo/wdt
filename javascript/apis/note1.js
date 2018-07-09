let url = "https://cors-anywhere.herokuapp.com/http://recipepuppy.com/api";

fetch(url)
  .then(r => {
    console.log(r);
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });
