var HEAP = [];

function genheap(number_of_lines, place_by_line) {
  let heap = [];

  for (let i = 0; i < number_of_lines; i++) {
    let line = [];
    for (let j = 0; j < place_by_line; j++) {
      line.push(0);
    }
    heap.push(line);
  }

  return heap;
}

function count(arr, value) {
  var c = 0;

  for (e of arr) {
    if (e == value) {
      c += 1;
    }
  }

  return c;
}

function replace(arr, original_value, new_value, count, reverse = false) {
  arr = arr.reverse()
  return arr.map(e => {
    if (e == 1 && count > 0) {
      count -= 1
      return new_value;
    }
    return e;
  }).reverse();
}

function solve(heap) {
  var xored = 0;

  heap.forEach(e => {
    xored ^= count(e, 1);
  });

  for (let i = 0; i < heap.length; i++) {
    var c = count(heap[i], 1)
    let solution = xored ^ c;
    if (solution < c) {
      heap[i] = replace(heap[i], 1, 0, c - solution, true)
      return heap;
    }
  }
  return heap;
}

function showheap(heap, result_selector) {
  var result_element = document.querySelector(result_selector);
  result_element.innerHTML = ""; // Empty the result container
  var table = document.createElement("table");
  table.setAttribute("class", "centered");

  for (let i = 0; i < heap.length; i++) {
    var tr = document.createElement("tr");

    for (let j = 0; j < heap[i].length; j++) {
      var td = document.createElement("td"),
        div = document.createElement("div");

      if (heap[i][j] === 1) {
        div.setAttribute("class", "stick");
      } else {
        div.setAttribute("class", "removed stick");
      }

      div.addEventListener("click", () => {
        HEAP[i][j] = HEAP[i][j] === 1 ? 0 : 1;
        showheap(HEAP, result_selector);
      });

      td.appendChild(div);
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  result_element.appendChild(table);
}

HEAP = genheap(5, 20);
showheap(HEAP, "#result");

document.getElementById("solve").addEventListener("click", () => {
  HEAP = solve(HEAP);
  showheap(HEAP, "#result");
});
