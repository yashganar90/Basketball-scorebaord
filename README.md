# 🏀 Basketball Scoreboard

A simple basketball scoreboard web application built using HTML, CSS, and JavaScript.

This project allows users to increment the scores for both Home and Guest teams and reset the scoreboard when needed.

---

## 🚀 Features

- Add 1, 2, or 3 points to the Home team
- Add 1, 2, or 3 points to the Guest team
- Reset both scores to 0
- Real-time score updates using DOM manipulation

---

## 🧠 How It Works

The application uses:

- `document.getElementById()` to access HTML elements
- Variables to store current scores
- Functions to update scores dynamically
- `textContent` to reflect score changes on the screen

Each button triggers a JavaScript function that:

1. Updates the corresponding score variable  
2. Updates the displayed score in the UI  

The reset function sets both scores back to 0 and updates the display.

---

## 📂 Project Structure

```text
basketball_scoreboard
│
├── index.html
├── index.css
└── index.js
```

---

## 💻 JavaScript Logic Overview

- `home_score` and `guest_score` store the current scores.
- Increment functions increase scores by 1, 2, or 3.
- `resetScores()` resets both values and updates the UI.

Example logic:

```javascript
let guest_score = 0;
let guest_score_point = document.getElementById("guest-score");

function guest_increment_1() {
  guest_score += 1;
  guest_score_point.textContent = guest_score;
}
```

---

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)

---

## 🎯 Learning Goals

This project helped practice:

- DOM manipulation
- Event handling
- Variables and functions
- Updating UI dynamically with JavaScript

---

## 📌 Future Improvements

- Highlight the leading team
- Add timer functionality
- Refactor repeated increment functions into a reusable function
- Improve UI styling

---

## 👤 Author

Yash Ganar
