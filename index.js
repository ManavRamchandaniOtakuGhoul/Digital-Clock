setInterval(function () {
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();

  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hDot = document.querySelector(".h-dot");
  let mDot = document.querySelector(".m-dot");
  let sDot = document.querySelector(".s-dot");

  hh.style.strokeDashoffset = 440 - (440 * h) / 12; // 12 hour
  mm.style.strokeDashoffset = 440 - (440 * m) / 60; // 60min
  ss.style.strokeDashoffset = 440 - (440 * s) / 60; // 60sec

  hDot.style.transform = `rotate(${h * 30}deg)`; //360deg / 12 = 30deg
  mDot.style.transform = `rotate(${m * 6}deg)`; //360deg / 60 = 6deg
  sDot.style.transform = `rotate(${s * 6}deg)`; //360deg / 60 = 6deg

  // Convert 24hour clock to 12hour clock

  if (h > 12) {
    h = h - 12;
  }

  //add zero before any single digit no.

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  ampm.innerHTML = am;
});
