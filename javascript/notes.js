<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div id='myDiv'>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>

  <script type="text/javascript">
  let mydiv = document.querySelector('#myDiv');
  let paragraphs = mydiv.getElementsByTagName('p');
  for (let i = 0;i < paragraphs.length;i++ ){
    paragraphs[i].onclick = (event) => {
    console.log("clicked");
    let newPa = '<p>New paragraph under ' + event.target.innerText + '</p>';
    event.target.insertAdjacentHTML( 'afterend',  newPa );

  }
}
  </script>
</body>
</html>
