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

function display() {
  var todo = addItems();

  var html = "<ul>";
  for (var i = 0; i < todo.length; i++) {
    html += "<li>" + todo[i] + '<button class="remove" id="' + i + '">x</button></li>';
  };
  html += "</ul>";

  document.getElementById("list").innerHTML = html;

  var buttons = document.getElementsByClassName("remove");
  for (var i = 0; i < buttons.length; i++) {
    button[i].addEventListener('click', remove);
  };
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

  display();
  document.getElementById("input").value = "";
  return false;
}

function remove() {
  var id = this.getAttribute('id');
  var todo = addItems();
  todo.splice(id, 1);
  localStorage.setItem("list", JSON.stringify(todo));

  display();
  return false;
}
