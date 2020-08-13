function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minute = fullDate.getMinutes();
    var secs = fullDate.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (secs < 10) {
        secs = "0" + sec;
    }
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + minute;
    document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock, 1000);
