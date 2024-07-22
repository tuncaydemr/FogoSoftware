var counters = document.querySelectorAll(".countdown");
var countersQuantity = counters.length;
var counter = [];

for (i = 0; i < countersQuantity; i++) {
  counter[i] = parseInt(counters[i].innerHTML);
}

  const count = (start, value, id) => {
  let localStart = start;
  setInterval(() => {
      if (localStart < value) {
      localStart++;
      counters[id].innerHTML = localStart;
      }
  }, 5);
  }

for (j = 0; j < countersQuantity; j++) {
  count(0, counter[j], j);
}
