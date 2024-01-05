setInterval(() => {
  let time = new Date();
  let seconds = document.getElementById("arrowOfSeconds");
  let minutes = document.getElementById("arrowOfMinutes");
  let hours = document.getElementById("arrowOfHours");
  let nounHour = time.getHours() * 30 + time.getMinutes() * 0.5;

  seconds.style.transform = `rotate(${time.getSeconds() * 6}deg)`;
  minutes.style.transform = `rotate(${time.getMinutes() * 6}deg)`;
  hours.style.transform = `rotate(${nounHour}deg)`;
}, 1000);

setInterval(() => {
  createStar();
}, 2000);

function createStar() {
  let star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}
