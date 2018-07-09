# Exercises

Submit answers to the questions and code exercises below:

> Explain the difference between the request/response cycle.

A: It's like a question and an answer, the request is asking for data and response is providing data.

> List common response codes and their groupings.

A:
- 100s, informational responses.  
- 200s, it's for OK-success. The most common is 200 for success response.
- 300s, it's for redirect and the most popular is 302 Found or 303 See Other, the response is under other URL.
- 400s, it's for client error. The most common is 404 Not Found.
- 500s, it's for server errors. The most common is 500 Internal Server Error or 503 Service Unavailable.

> Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.

A:
- GET: is the most common verb, is used by default to request data.
- POST: this is used to create a new object on the server.
- PATCH: this is used to update an existing object on the server.
- PUT: is used to replace an existing object on the server, it's similar to PATCH.
- DELETE: is used to delete an object from the server.

> Explain the difference between synchronous and asynchronous code.

A: Synchronous code is going to wait until the current task is done for start the next task and the asynchronous code you can move another task before it finished.

> Explain what a JavaScript promise is.

A: Every time you make an asynchronous request, you will get back a promise. A promise has different states: pending, fulfilled, and rejected.

> Explain why CORS exists and how we can work around it.

A: CORS is a mechanism that allows resources on one web page to be requested from a site outside the domain of the original webpage.

> Create a fetch request in JavaScript.

A:

```
let url = "https://cors-anywhere.herokuapp.com/http://recipepuppy.com/api";
fetch(url)
  .then( r => {
      console.log(r);
    })
  .catch( e => {
    console.log('An error occurred: ' + e);
    });
```


> It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there.
A. Go to News API and click 'Get API Key' sign up for a free API key.
B. Use your API key to create a fetch using this URL: https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE>
C. Loop through the result data, and for each story on HackerNews, create an <li> tag that contains the contents of the story.

```
let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=0c814ff20fd342e5b844a000380b54f2";

fetch(url)
.then(r => {
  return r.json();
})
.then(data => {
  let articles = data.articles;
  let articleList = document.createElement("ul");
  let body = document.querySelector("body");
  body.appendChild(articleList);
  articles.map(article => {
    let articleItem = document.createElement("li");
    articleItem.innerHTML =
      '<a href="' + article.url + '">' + article.title + "</a>" +
      '<p>' + article.description + '</p>';
    articleList.appendChild(articleItem);
  });
})
.catch(e => {
  console.log(`An error occurred: ${e}`);
});
```
