let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// let hour = 00; df
let minute = 00;
let second = 00;
let count = 00;
let game_start = false;

// startBtn.addEventListener('click', function() {
timer = true;
stopWatch();
// });

stopBtn.addEventListener('click', function() {
  timer = false;
});

resetBtn.addEventListener('click', function() {
  timer = false;
  // hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById('hr').innerHTML = "00";
  document.getElementById('min').innerHTML = "00";
  document.getElementById('sec').innerHTML = "00";
  document.getElementById('count').innerHTML = "00";
});
// function win(){
//   if (timer) {
    
//   }
// }
function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    // let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout(stopWatch, 10);

  }
}
//var z = "no touch";
function myMoveFunction() {
  /*document.getElementById("demo").innerHTML = z = "moved";*/
  if (MouseEvent) {
    
    // hour = 0;

    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
  }
  /*object.addEventListener("mousemove", myScript);
  wait(5)*/
}
