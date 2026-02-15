const letters = [
  {
    date: "2026-02-14 11:42 PM",
    text: "This was written on a quiet night. I was thinking about how love feels when it’s patient, warm, and honest..."
  },
  {
    date: "2026-02-10 01:12 AM",
    text: "Some nights I imagine you reading this. I hope these words feel like a hand gently holding yours..."
  }
];

// ----- UTILITIES -----
letters.sort((a, b) => new Date(b.date) - new Date(a.date));

const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");

// ----- SIDEBAR -----
const months = {};

letters.forEach(l => {
  const month = new Date(l.date).toLocaleString('default', { month: 'long' });
  months[month] = (months[month] || 0) + 1;
});

Object.keys(months).forEach(m => {
  const div = document.createElement("div");
  div.className = "month";
  div.innerHTML = `${m} <span>(${months[m]})</span>`;
  div.onclick = () => showMonth(m);
  sidebar.appendChild(div);
});

// ----- HOME VIEW -----
function showHome(list = letters.slice(0, 5)) {
  content.innerHTML = "";
  list.forEach(l => {
    const card = document.createElement("div");
    card.className = "letter-card";
    card.innerHTML = `
      <div class="date">${l.date}</div>
      <div class="preview">${l.text.slice(0, 150)}...</div>
      <div class="read-more">Read more</div>
    `;
    card.querySelector(".read-more").onclick = () => showFull(l);
    content.appendChild(card);
  });
}

// ----- FULL LETTER -----
function showFull(letter) {
  content.innerHTML = `
    <div class="full-letter">
      <div class="back">← Back</div>
      <div class="date">${letter.date}</div>
      <div>${letter.text}</div>
    </div>
  `;
  content.querySelector(".back").onclick = () => showHome();
}

// ----- FILTER BY MONTH -----
function showMonth(month) {
  const filtered = letters.filter(l =>
    new Date(l.date).toLocaleString('default', { month: 'long' }) === month
  );
  showHome(filtered);
}

// INIT
showHome();
