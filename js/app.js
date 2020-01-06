window.onload = function() {
  document.getElementById("enter").onclick = addItem;
}

const addItem = function() {
  var list = document.createElement("li");
  var valueInput = document.getElementById("input").value;
  var input = document.getElementById("input");
  var temp = document.createTextNode(valueInput);
  list.append(temp);

  /* if (input) {
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        addItem();
      }
    });
  }
  */

    if (valueInput !== "" ) {
      document.getElementById("list").append(list);
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
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var lis = document.querySelector("ul");
if (lis) {
  lis.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  }, false);
}
