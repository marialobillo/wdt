# Exercises

### Questions

> What is the difference between document.querySelector() and document.querySelectorAll()?

A: querySelector() is for one selector and returns the first element that matches, while querySelectorAll() returns a list of items that matches.

> What is the difference between getElement(s)By and querySelector(All)?

A: getElement(s)By returns a list of items and querySelectorAll() returns an array of objects.

> What do JavaScript event handlers do and what is an example of one?

A: Handles are a set of functions that manage what happends when the event is launched


### Code Practice

> Using the code from the prior checkpoint, add an Event Handler to the <li> element and console.log() the name of the shirt they selected.

```
<h3>Shirts</h3>
<ul id='list'>
  <li>Biker Jacket</li>
  <li>Mens Shirt</li>
</ul>

<script type="text/javascript">

  let menu = document.getElementById('list');
  let liList = menu.getElementsByTagName('li');
  for(let i = 0; i< liList.length; i++){
    liList[i].onclick = (event) => {
      console.log(event.target.innerText);
    }
  }

</script>
```
