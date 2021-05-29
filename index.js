const dayCounter = document.querySelector('.day-counter')
const hourCounter = document.querySelector('.hour-counter')
const minuteCounter = document.querySelector('.minute-counter')
const secondCounter = document.querySelector('.second-counter')


const birthday = new Date('06/11/2021')
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

const countdown = () => {
    const today = new Date();
    const timeSpan = birthday - today;
    
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a great birthday!"
        clearInterval(timerId)
        return
    }
    
    if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday"
        clearInterval(timerId)
        return
    }
    
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
    
    dayCounter.textContent = days
    hourCounter.textContent = hours
    minuteCounter.innerText = minutes
    secondCounter.innerHTML = seconds
}

setInterval(countdown, second);

window.onload = function() {
    document.getElementById("my_audio").play();
}
