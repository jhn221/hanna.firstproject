const clock = document.querySelector("h2#clock");
const todayDate = document.querySelector("h3#date");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const today = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");

    todayDate.innerText = "오늘은 " + `${year}.${month}.${today}` +" 입니다.";
    clock.innerText = `${hours}:${Minutes}:${Seconds}`;
  }
 getClock();
 setInterval(getClock,1000);
