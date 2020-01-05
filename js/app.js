window.onload = function() {
  document.getElementById("add").onclick = addItem;
}

let todoItem = [];

const addItem = function() {
  var list = document.createElement("li");
  var valueInput = document.getElementById("input").value;
  var input = document.getElementById("input");
  var temp = document.createTextNode(valueInput);
  list.append(temp);

  /* input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add").click();
    }
  }); */

  if (valueInput !== "" ) {
    document.getElementById("itemlist").append(list);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.append(text);
  list.append(span);
  text = input.value.trim()

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
