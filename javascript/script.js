const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secondEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours(); // set current time by predefined function..
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){ // means h goes to 13 then ampm can be pm..
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h; 
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    console.log("hour change");

    setTimeout(()=>{ // for seconds 
        updateClock()
    }, 1000)
}
updateClock();