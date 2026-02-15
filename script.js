const letters = [
  {
  date: "June 16, 2026 — 1:12 AM",
  text: "Write whatever you feel here.\nNew lines work naturally.\nShe’ll see this instantly."
},

  {
    date: "June 10, 2026 — 11:42 PM",
    text: "This is the first letter.\nI hope this place feels like a secret just for us."
  }
];

const container = document.getElementById("letters");

letters.reverse().forEach(letter => {
  const div = document.createElement("div");
  div.className = "letter";

  div.innerHTML = `
    <div class="date">${letter.date}</div>
    <div class="text">${letter.text}</div>
  `;

  container.appendChild(div);
});
