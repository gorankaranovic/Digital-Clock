const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.querySelector(".am");



function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    if (h>12) {
        h=h-12;
        ampm.innerHTML = "PM";
    }

    if (h<10){
        h = "0" + h;
    }
    if (m<10){
        m = "0" + m;
    }
    if (s<10){
        s = "0" + s;
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    setTimeout(updateClock, 1000)

    
}
updateClock();

