
let mydiv = document.querySelector('#myDiv');
let paragraphs = mydiv.getElementsByTagName('p');
for(let i = 0; i < paragraphs.length; i++){
  paragraphs.log("clicked!");
  let newPa = '<p>New paragraph under ' + event.target.innerText + '</p>';

  event.target.insertAdjacentHTML('afterend', newPa);
}
