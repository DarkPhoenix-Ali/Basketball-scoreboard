let scoreHome = 0;
let scoreGuest = 0;
let homeScore = document.getElementsByClassName("homeScore")[0];
let guestScore = document.getElementsByClassName("guestScore")[0];
let incrementBy1Home = document.getElementsByClassName("incrementBy1Home")[0];
let incrementBy2Home = document.getElementsByClassName("incrementBy2Home")[0];
let incrementBy3Home = document.getElementsByClassName("incrementBy3Home")[0];
let incrementBy1Guest = document.getElementsByClassName("incrementBy1Guest")[0];
let incrementBy2Guest = document.getElementsByClassName("incrementBy2Guest")[0];
let incrementBy3Guest = document.getElementsByClassName("incrementBy3Guest")[0];

incrementBy1Home.addEventListener("click", function () {
  scoreHome += 1;
  homeScore.textContent = scoreHome;
});
incrementBy2Home.addEventListener("click", function () {
  scoreHome += 2;
  homeScore.textContent = scoreHome;
});
incrementBy3Home.addEventListener("click", function () {
  scoreHome += 3;
  homeScore.textContent = scoreHome;
});
incrementBy1Guest.addEventListener("click", function () {
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
});
incrementBy2Guest.addEventListener("click", function () {
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
});
incrementBy3Guest.addEventListener("click", function () {
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
});

incrementBy1Home.addEventListener("mousedown", function () {
  incrementBy1Home.style.transition = "transform 50ms";
  incrementBy1Home.style.transform = "scale(1.05)";
});
incrementBy2Home.addEventListener("mousedown", function () {
  incrementBy2Home.style.transition = "transform 50ms";
  incrementBy2Home.style.transform = "scale(1.05)";
});
incrementBy3Home.addEventListener("mousedown", function () {
  incrementBy3Home.style.transition = "transform 50ms";
  incrementBy3Home.style.transform = "scale(1.05)";
});
incrementBy1Guest.addEventListener("mousedown", function () {
  incrementBy1Guest.style.transition = "transform 50ms";
  incrementBy1Guest.style.transform = "scale(1.05)";
});
incrementBy2Guest.addEventListener("mousedown", function () {
  incrementBy2Guest.style.transition = "transform 50ms";
  incrementBy2Guest.style.transform = "scale(1.05)";
});
incrementBy3Guest.addEventListener("mousedown", function () {
  incrementBy3Guest.style.transition = "transform 50ms";
  incrementBy3Guest.style.transform = "scale(1.05)";
});

incrementBy1Home.addEventListener("mouseup", function () {
  incrementBy1Home.style.transition = "transform 50ms";
  incrementBy1Home.style.transform = "scale(1)";
});
incrementBy2Home.addEventListener("mouseup", function () {
  incrementBy2Home.style.transition = "transform 50ms";
  incrementBy2Home.style.transform = "scale(1)";
});
incrementBy3Home.addEventListener("mouseup", function () {
  incrementBy3Home.style.transition = "transform 50ms";
  incrementBy3Home.style.transform = "scale(1)";
});
incrementBy1Guest.addEventListener("mouseup", function () {
  incrementBy1Guest.style.transition = "transform 50ms";
  incrementBy1Guest.style.transform = "scale(1)";
});
incrementBy2Guest.addEventListener("mouseup", function () {
  incrementBy2Guest.style.transition = "transform 50ms";
  incrementBy2Guest.style.transform = "scale(1)";
});
incrementBy3Guest.addEventListener("mouseup", function () {
  incrementBy3Guest.style.transition = "transform 50ms";
  incrementBy3Guest.style.transform = "scale(1)";
});
