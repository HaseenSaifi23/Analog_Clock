let hr = document.querySelector(".hours");
let min = document.querySelector(".minuts");
let sec = document.querySelector(".second");
setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let hours_rotation = 30 * h + m / 2;
  let minuts_rotation = 6 * m;
  let second_rotation = 6 * s;

  hr.style.transform = `rotate(${hours_rotation}deg)`;
  min.style.transform = `rotate(${minuts_rotation}deg)`;
  sec.style.transform = `rotate(${second_rotation}deg)`;
}, 1000);





