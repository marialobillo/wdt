# Exercises

### Questions

> What does the acronym DOM stand for and explain in your own words what it is.

A: Document Object Model, the whole HTML file is as one object.

> How does the DOM make web programming more efficient?

A: Instead you have to reload the whole HTML is you want to change something, when you can only reload or change the piece of the code that is going to change is more efficient than before, using document.querySelector() or even the old ones like document.getElementById() and more.

### Code Practice

> Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.

```
<h3>Shirts</h3>
<ul id='list'>
    <li>Biker Jacket</li>
</ul>

<script type="text/javascript">

  let menu = document.getElementById('list');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode("Mens T-shirt"));
  menu.appendChild(li);

</script>

```
