function solve(heap) {
  var xored = 0;

  heap.forEach(e => {
    xored ^= e;
  });

  for (let i = 0; i < heap.length; i++) {
    let others_xor = xored ^ heap[i];
    if (others_xor < heap[i]) {
      return [i, others_xor];
    }
  }

  return [];
}

function getheap() {
  var lines = Number(prompt("Number of lines ?"));
  var heap = [];

  for (let i = 1; i <= lines; i++) {
    var nb = prompt("Remaining in line n°" + i + "?");
    heap.push(nb);
  }

  return heap;
}

function showmove(heap, move, result_selector) {
  var result_element = document.querySelector(result_selector);
  var table = document.createElement("table");
  table.setAttribute("class", "centered")

  for (let i = 0; i < heap.length; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < heap[i]; j++) {
      var td = document.createElement("td"),
        div = document.createElement("div");

      if (move.length > 0 && move[0] == i && j >= move[1]) {
        div.setAttribute("class", "empty dot");
      } else {
        div.setAttribute("class", "dot");
      }

      td.appendChild(div);
      tr.appendChild(td);
    }
  }

  result_element.appendChild(table);

  if (move.length == 0) {
    var h4 = document.createElement("h4");
    h4.innerText = "Do whatever you want, you're in a bad case.";
    h4.style.color = "red";
    result_element.appendChild(h4);
  }
}

function main() {
  let heap = getheap();
  let move = solve(heap);
  showmove(heap, move, "#result");
}

main();
