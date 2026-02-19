const letters = [
  {
    date: "2026-02-14 11:42 PM",
    text: "My Dearest Martha,

How are you? I truly hope you’re doing as well as I am—because honestly, I’ve never been happier.

I’m still smiling because of what happened yesterday. To be able to call you mine after all this time is a dream I never thought would actually come true. But it did. We finally ended up together, right on the doorstep of Valentine’s week, and I want to celebrate every single second of it.

I bought a rose for you today. It’s just one, but please know that in my heart, I’m handing you a bouquet so large I can barely carry it. Every petal represents a moment I missed you over these last few months and a reason why I’m grateful you’re in my life now.

I wish you were here so I could see your smile when you hold it. I’ve missed you more than words can say, but knowing we are "us" now makes the distance so much easier to bear.

Yours,
Love 
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
