var value = document.getElementById('fname').value;
window.localStorage.setItem('valueArrray',value);
function addFunction()
{
  var value = document.getElementById('fname').value;
  window.localStorage.setItem('valueArrray',value);

  var name =window.localStorage.getItem('valueArrray');
  var textTobeInserted = document.createTextNode(name);

  var node = document.createElement("li");
  node.appendChild(textTobeInserted);
  document.getElementById('myUL').appendChild(node);
}
