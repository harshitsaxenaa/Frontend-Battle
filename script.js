// Loader and Fade In
document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progressFill");
  const loader = document.getElementById("loaderContainer");
  const text = document.getElementById("loadingText");

  let width = 0;

  function fillProgressBar() {
    width += Math.floor(Math.random() * 8) + 2;
    fill.style.width = `${width}%`;
    text.innerText = `Loading your awesome experience... ${width}%`;

    if (width >= 100) {
      fill.style.width = "100%";
      text.innerText = `Loaded. Welcome! 🚀`;

      setTimeout(() => {
        loader.classList.add("hidden");
        document.body.classList.add("loaded");
        document.body.style.animation = "zoomFade 0.8s ease";
      }, 800);
    } else {
      setTimeout(fillProgressBar, Math.floor(Math.random() * 100) + 80);
    }
  }
  if (document.body.classList.contains("loaded")) {
  document.getElementById("loaderContainer")?.remove();
  return;
}


  fillProgressBar();
});

// Zoom Fade
const style = document.createElement("style");
style.innerHTML = `@keyframes zoomFade { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`;
document.head.appendChild(style);



// Hamburger Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Carousel Interactivity
const texts = [
  "💬 Our intelligent chatbot not only assists, but understands your journey — guiding you through complex actions intuitively.",
  "⚙️ Predictive engine that suggests your next move — before you even think about it. Smart, proactive, and adaptive.",
  "📊 Real-time insights and trends shown through visually rich, interactive analytics – experience data like never before."
];

function changeText(index) {
  document.getElementById("carouselText").innerText = texts[index];
}

// Tabs Rotation
let tabIndex = 1;
const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("tabContent");
const tabContents = [
  {
    title: "AI Chat",
    desc: "🤖 Interact with our AI chatbot, trained to guide users, answer questions, and provide support 24/7 — just like a human, but faster!"
  },
  {
    title: "Live Stats",
    desc: "📈 Access a dashboard of live statistics updated via WebSockets, showcasing real-time user activity, page views, and system health."
  },
  {
    title: "Fun Facts",
    desc: "🎉 Explore a library of animated fun facts, surprises, and quirky insights – all presented with interactive UI effects!"
  }
];


function rotateTabs() {
  tabs.forEach((tab, i) => {
    tab.classList.remove("active");
    tab.style.animation = "none"; // not needed here anymore
    tab.offsetHeight; // force reflow to reset pseudo-element
  });

  const activeTab = tabs[tabIndex];
  activeTab.classList.add("active");

  // Force reflow for ::before animation to restart
  activeTab.classList.remove("active");
  void activeTab.offsetWidth; // this line ensures animation restart
  activeTab.classList.add("active");

  const { title, desc } = tabContents[tabIndex];
  content.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
  tabIndex = (tabIndex + 1) % 3;
}

setInterval(rotateTabs, 8000);

// Tab Click Support
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabIndex = i;
    rotateTabs();
  });
});

particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@2.0.0/demo/particles.json', () => {
  console.log('Particles loaded');

  // Enable repulse effect on mouse move
  document.addEventListener("mousemove", function (e) {
    window.pJSDom[0].pJS.interactivity.mouse.pos_x = e.clientX;
    window.pJSDom[0].pJS.interactivity.mouse.pos_y = e.clientY;
    window.pJSDom[0].pJS.interactivity.status = "mousemove";
  });

  document.addEventListener("mouseleave", function () {
    window.pJSDom[0].pJS.interactivity.mouse.pos_x = null;
    window.pJSDom[0].pJS.interactivity.mouse.pos_y = null;
    window.pJSDom[0].pJS.interactivity.status = "mouseleave";
  });
});
// Ripple Trail
document.addEventListener("mousemove", (e) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

