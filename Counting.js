function handleSubmit() {
  event.preventDefault();
  let totalNumber = document.getElementById("totalNumber").value;

  let stopNumber = document.getElementById("stopNumber").value;

  let oddOrEven = document.getElementById("dropdown").value;

  let output = document.getElementsByClassName("output");

  var count = [];
  if (oddOrEven === "even") {
    for (let i = 1; i <= totalNumber; i++) {
      if (stopNumber && i == stopNumber) break;
      if (i % 2 == 0) {
        count.push(i);
      }
    }
  } else {
    for (let i = 1; i <= totalNumber; i++) {
      if (stopNumber && i == stopNumber) break;
      if (i % 2 !== 0) {
        count.push(i);
      }
    }
  }
  output[0].innerHTML = count.length;
}

// looping through an array and break at certain point
function loopOverArray() {
  let randomArray = [3, 2, 5, 1, 4];
  let sum = 0;
  for (let i = 0; i <= randomArray.length; i++) {
    // sum += randomArray[i];
    console.log("sum:-- ", (sum += randomArray[i]));
    if (sum >= 10) break;
  }
}
// loopOverArray();

// count timer skip number
function countTimer() {
  for (let i = 10; i >= 1; i--) {
    if (i == 5) continue;
    if (i == 2) break;
    console.log(i);
  }
}
countTimer();

// counting between two numbers 

function countNumbers(start, end) {
  let count = 0;
  if (start > end) {
    for (let i = start; i >= end; i--) {
      console.log("i-", i);
      count++
    }
  } else {
    for (let i = start; i <= end; i++) {
      console.log("i-", i);
      count++
    }
  }
  console.log("count",count)
  return count;
}

console.log("counter--",countNumbers(5,8))
