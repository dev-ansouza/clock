//Definition of day
const dateToday = new Date();
dateToday.toLocaleDateString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone});

//Definition of constants
const body_clock = document.getElementById('body_clock');
const today = document.getElementById("today");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//Definition of constants to week day and months of year
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

//Change text of date
today.textContent = weekday[dateToday.getDay()] + ', ' + dateToday.getDate() + ' ' + months[dateToday.getMonth()] + ' ' + dateToday.getFullYear();

//Change clock time
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

//Change backgroud-image denpending of hours
if(dateToday.getHours() > 18 || dateToday.getHours() < 6){
    body_clock.style["backgroundImage"] = "url(\"/clock/assets/images/night.jpg\")";
}