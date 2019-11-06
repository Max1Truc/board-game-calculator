function solve(remaining) {
  var move = remaining % 4;
  return move;
}

function getremaining() {
  var remaining = Number(prompt("Number remaining ?"));
  return remaining;
}

function showmove(remaining, move, result_selector) {
  var result_element = document.querySelector(result_selector);
  var table = document.createElement("table");
  table.setAttribute("class", "centered")
  var tr = document.createElement("tr");

  for (let j = 0; j < remaining; j++) {
    var td = document.createElement("td"),
      div = document.createElement("div");

    if (move != 0 && j >= (remaining - move)) {
      div.setAttribute("class", "removed stick");
    } else {
      div.setAttribute("class", "stick");
    }

    td.appendChild(div);
    tr.appendChild(td);
  }

  table.appendChild(tr);
  result_element.appendChild(table);

  if (move == 0) {
    var h4 = document.createElement("h4");
    h4.innerText = "Do whatever you want, you're in a bad case.";
    h4.style.color = "red";
    result_element.appendChild(h4);
  }
}

function main() {
  let remaining = getremaining();
  let move = solve(remaining);
  showmove(remaining, move, "#result");
}

main();
