const letters = [
  {
    date: "2026-02-14 09:00 AM",
    text: "My dearest Martha,\n\nI wish you our very first Happy Valentine’s Day. I hope this is just the beginning—that we get to celebrate many more of these days together throughout our lives.\n\nDo you know how lucky I am to have you? Do you know how happy I feel knowing you’re by my side? You are my long-cherished dream, and not everyone gets to live their dream. I truly feel blessed.\n\nI know you were upset that I didn’t wish you at the very first hour of Valentine’s Day, and you have every right to feel that way. I’m truly sorry. The truth is, I’ve been wanting to write you this letter since the very day we became together. I just never found the right moment. Yesterday, being at home, I couldn’t write to you properly, and I sincerely apologize for that. I hope you understand.\n\nI had dreamed of writing you special letters for each day of Valentine’s week and sending them all together. But when you told me you didn’t have personal space at home and that your family might find out about us, I knew I had to find another way.\n\nSo today, I’m writing this—to tell you how deeply I love you.\n\nI dedicate all my favorite romantic songs to you. Every time I listen to them, your face appears in my mind without fail. You mean more to me than words can fully express.\n\nWith all my heart, I declare that I love you—and I promise to keep loving you, always.\n\nYours,\nLove"
  },
  {
    date: "2026-02-13 09:00 AM",
    text: "My dearest Martha,\n\nWe’re getting closer to the big day, but today is for something a little more... electric.\n\nI promised you a few days ago that I’d kiss you a lot 🫣, and I meant every word. On Kiss Day, I’m dreaming of the moment our lips finally meet for the first time since we became \"us\" on February 6th.\n\nI want my kisses to tell you everything I can’t find the words for—how much I adore you, how much I’ve missed you, and how deeply I love you. Consider this letter a \"placeholder\" for the thousands of real kisses I have saved up just for you.\n\nYours,\nLove"
  },
  {
    date: "2026-02-12 09:00 AM",
    text: "My dearest Martha,\n\nI’ve spent so many of these last few months wishing you were standing right in front of me. On Hug Day, that wish feels even stronger.\n\nIf I were there, I wouldn’t just give you a quick hug; I’d hold you so tight that you could feel my heart beating against yours—reminding you that I’m never letting go. A hug from you is the only \"home\" I ever want to know.\n\nUntil I can actually wrap my arms around you, please feel the warmth of this letter and know that I am holding you in my thoughts every single second.\n\nYours,\nLove"
  },
  {
    date: "2026-02-11 09:00 AM",
    text: "My dearest Martha,\n\nToday is Promise Day, but for me, it’s much more than a date on a calendar. It’s a day to tell you exactly the kind of man I intend to be for you. We finally found each other on February 6th, and I want to make sure I never give you a reason to doubt us.\n\nI promise you this, from the bottom of my heart: I will love you forever, and my love for you will never decrease; it will only grow. I will marry you and build a life where you are always my first priority. I will be established and more disciplined, working hard to create the future you deserve. I’ll listen to you with my heart and adore you in every possible way. I will say \"no\" to anyone else because my heart only has room for you. And for us, I’m changing: I will never touch a cigarette again, and I’m leaving all my bad habits behind to be the man you can be proud of.\n\nMost importantly, I promise I will make you happy and I will never, ever leave you. (I also have one more very specific promise... I’m going to kiss you a lot when I finally see you! 🫣)\n\nHolding you to these words forever.\n\nYours,\nLove"
  },
  {
    date: "2026-02-10 09:00 AM",
    text: "My dearest Martha,\n\nSince I can’t be there to give you a hug myself today, I’m sending you all my warmth in this letter. I wish I could be your teddy bear—someone you could just lean on and hold whenever you miss me.\n\nYou are my comfort and my happy place. Until I can finally hold you in my arms again, just know that my heart is always wrapped around yours.\n\nSending you the biggest hug.\n\nYours,\nLove"
  },
  {
    date: "2026-02-09 09:00 AM",
    text: "My dearest Martha,\n\nAfter the big questions I asked you yesterday, I wanted to bring things back to something sweet. Today is Chocolate Day, and honestly, it’s the perfect excuse to tell you how much flavor you’ve added to my life.\n\nI wish I could be there to hand-deliver a box of your favorites. I’d pick the ones that remind me of you—sweet, a little bit addictive, and something I never want to run out of. Life was a bit bitter during those months we were apart, but ever since February 6th, everything has tasted a whole lot better.\n\nYou are the sweetness in my every day. Even if we aren't sharing a box of chocolates side-by-side right now, just knowing you are mine is enough to keep me smiling.\n\nEat something sweet for me today, okay? Because nobody deserves a treat more than you.\n\nI love you more than words (and definitely more than chocolate).\n\nYours,\nLove"
  },
  {
    date: "2026-02-08 09:00 AM",
    text: "My dearest Martha,\n\nIn heaven and earth will you be mine? Will you marry me? I hereby declare that I'll be with you in everything. My life is yours. All of it.\n\nWill you be with me? Will you live the rest of your life with me? I'll love you as much as you dream of being loved—even more than you'd want to be loved.\n\nMeeting you was like destiny. Don't turn this into something we both regret. Will you be mine? I want to be yours.\n\nYours,\nLove"
  },
  {
    date: "2026-02-07 09:00 AM",
    text: "My Dearest Martha,\n\nHow are you? I truly hope you’re doing as well as I am—because honestly, I’ve never been happier.\n\nI’m still smiling because of what happened yesterday. To be able to call you mine after all this time is a dream I never thought would actually come true. But it did. We finally ended up together, right on the doorstep of Valentine’s week, and I want to celebrate every single second of it.\n\nI bought a rose for you today. It’s just one, but please know that in my heart, I’m handing you a bouquet so large I can barely carry it. Every petal represents a moment I missed you over these last few months and a reason why I’m grateful you’re in my life now.\n\nI wish you were here so I could see your smile when you hold it. I’ve missed you more than words can say, but knowing we are \"us\" now makes the distance so much easier to bear.\n\nYours,\nLove"
  }
];

const LETTERS_PER_PAGE = 5;
let currentPage = 1;

// sort newest first
letters.sort((a, b) => new Date(b.date) - new Date(a.date));

const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");

// ---------- SIDEBAR ----------
const months = {};
letters.forEach(l => {
  const month = new Date(l.date).toLocaleString('default', { month: 'long' });
  months[month] = (months[month] || 0) + 1;
});

sidebar.innerHTML = "";
Object.keys(months).forEach(m => {
  const div = document.createElement("div");
  div.className = "month";
  div.innerHTML = `${m} <span>(${months[m]})</span>`;
  div.onclick = () => showMonth(m);
  sidebar.appendChild(div);
});

// ---------- HOME VIEW ----------
function showHome(list = letters, page = 1) {
  currentPage = page;
  content.innerHTML = "";

  const start = (page - 1) * LETTERS_PER_PAGE;
  const end = start + LETTERS_PER_PAGE;
  const pageLetters = list.slice(start, end);

  pageLetters.forEach(l => {
    const card = document.createElement("div");
    card.className = "letter-card";
    card.innerHTML = `
      <div class="date">${formatDate(l.date)}</div>
      <div class="preview">${l.text.slice(0, 160)}...</div>
      <div class="read-more">Read more</div>
    `;
    card.querySelector(".read-more").onclick = () => showFull(l);
    content.appendChild(card);
  });

  addPagination(list.length);
}

// ---------- PAGINATION ----------
function addPagination(totalLetters) {
  const totalPages = Math.ceil(totalLetters / LETTERS_PER_PAGE);
  if (totalPages <= 1) return;

  const nav = document.createElement("div");
  nav.className = "pagination";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("span");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = () => showHome(letters, i);
    nav.appendChild(btn);
  }

  content.appendChild(nav);
}

// ---------- FULL LETTER ----------
function showFull(letter) {
  document.body.classList.add("reading");

  content.innerHTML = `
    <div class="full-letter">
      <div class="back">← Back</div>
      <div class="date">${formatDate(letter.date)}</div>
      <div class="full-text">${letter.text}</div>
    </div>
  `;

  content.querySelector(".back").onclick = () => {
    document.body.classList.remove("reading");
    showHome(letters, currentPage);
  };
}

// ---------- FILTER BY MONTH ----------
function showMonth(month) {
  const filtered = letters.filter(l =>
    new Date(l.date).toLocaleString('default', { month: 'long' }) === month
  );
  showHome(filtered, 1);
}

// ---------- DATE FORMAT ----------
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

// INIT
showHome();
