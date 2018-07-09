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

A:

> Explain what a JavaScript promise is.

A:

> Explain why CORS exists and how we can work around it.

A:

> Create a fetch request in JavaScript.
It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there. A. Go to News API and click 'Get API Key' sign up for a free API key. B. Use your API key to create a fetch using this URL: https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE> C. Loop through the result data, and for each story on HackerNews, create an <li> tag that contains the contents of the story.
