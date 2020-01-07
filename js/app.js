const list = [];

window.onload = function() {
  document.getElementById("enter").onclick = addItem();
  document.getElementById("enter").addEventListener("keyup", enterKey);
  document.getElementById("input").addEventListener("keyup", enterKey);
}

function addItems() {
  var items = [];
  var strItems = localStorage.getItem("list");
  if (strItems !== null) {
    items = JSON.parse(strItems);
  }
}

function enterKey(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    add();
  }
}

function add() {
  var input = document.getElementById("input").value;
  if (input === "") {
    return;
  }
  var task = [input, 0];
  var todo = addItems();
  todo.push(task);
  localStorage.setItem("list", JSON.stringify(todo));

  
}


//var list = document.createElement("li");
function addItem(text) {
  var inputValue = document.getElementById("input").value;
  const todo = {
    inputValue,
    priority: false,
  };
  list.push(todo);
}

if (inputValue !== "" ) {
  // document.getElementById("list").append(todo);
  addItem(inputValue);
  let inputValue = "";
  input.focus();
}

/*
var input = document.getElementById("input");
var temp = document.createTextNode(valueInput);
*/
/*   if (input) {
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        addItem();
      }
    });
  }
  */

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.append(text);



    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
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
