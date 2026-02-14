let button = document.getElementById("buttons");
let guest_score_point = document.getElementById("guest-score");
let home_score_point = document.getElementById("home-score");
let home_score = 0;
let guest_score = 0;
let reset = document.getElementById("reset");

function guest_increment_1() {
  guest_score += 1;
  guest_score_point.textContent = guest_score;
}
function guest_increment_2() {
  guest_score += 2;
  guest_score_point.textContent = guest_score;
}
function guest_increment_3() {
  guest_score += 3;
  guest_score_point.textContent = guest_score;
}
function home_increment_1() {
  home_score += 1;
  home_score_point.textContent = home_score;
}
function home_increment_2() {
  home_score += 2;
  home_score_point.textContent = home_score;
}
function home_increment_3() {
  home_score += 3;
  home_score_point.textContent = home_score;
}
function resetScores() {
  home_score = 0;
  guest_score = 0;
  guest_score_point.textContent = guest_score;
  home_score_point.textContent = home_score;
}
