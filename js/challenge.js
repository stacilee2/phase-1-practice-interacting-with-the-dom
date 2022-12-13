const timer = document.querySelector("#counter")
let time = 0

const countUp = setInterval (() => {
    time++;
    timer.innerHTML = `${time}`;
}, 1000);

const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")

//minus.addEventListener('click', function(event)) {
    //if (countUp == -1) {
        //minus.innerHTML = "minus";
        //const countUp = setInterval (() => {
           // time++;
          //  timer.innerHTML = `${time}`;
       // }, 1000);
   // }
//}

