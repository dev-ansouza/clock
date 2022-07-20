const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const body_clock = document.getElementById('body_clock');
const dateToday = new Date();
const clock = setInterval(function time () {
    const dateToday = new Date();
    dateToday.toLocaleDateString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone});
    
    let hours_right_now = dateToday.getHours();
    let minutes_right_now = dateToday.getMinutes();
    let seconds_right_now = dateToday.getSeconds();
    
    if(hours_right_now < 10) hours.textContent = "0" + hours_right_now; else hours.textContent = hours_right_now;
    if(minutes_right_now < 10) minutes.textContent = "0" + minutes_right_now; else minutes.textContent = minutes_right_now;
    if(seconds_right_now < 10) seconds.textContent = "0" + seconds_right_now; else seconds.textContent = seconds_right_now;
})

if(dateToday.getHours() > 18 || dateToday.getHours() < 6){
    body_clock.style["backgroundImage"] = "url(\"/clock/assets/images/night.jpg\")";
}