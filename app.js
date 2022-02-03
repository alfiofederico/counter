const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const available = document.getElementById("available");

/* const year = document.getElementById("year");
const loading = document.getElementById("loading"); */

const currentYear = new Date().getFullYear();

const releaseTime = new Date(`February 25 ${currentYear} 11:30:00`);
let interval;

/* year.innerText = 'July 17th 2020' */ function updateCountdown() {
  const currentTime = new Date();
  if (currentTime.getTime() >= releaseTime.getTime()) {
    available.innerText = "Now Available!";
    available.style.color = "red";
    return clearInterval(interval);
  }

  const diff = releaseTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  /* if(days.innerHTML === '00' && hours.innerHTML === '00' && minutes.innerHTML === '00' && seconds.innerHTML === '00' ) {
    clearInterval(updateCountdown);
  }
  */
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);
