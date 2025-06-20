particlesJS("content-particles", {
  particles: {
    number: { value: 60 },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#00ff00",
      opacity: 0.3,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

particlesJS("cyber-header-particles", {
  particles: {
    number: { value: 40 },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#00ff00",
      opacity: 0.3,
      width: 1
    },
    move: { enable: true, speed: 1.2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

function activateTab(tabBtn, tabId) {
  // Remove active state from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Add active state to clicked button
  tabBtn.classList.add('active');

  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.style.display = "none";
  });

  // Show the selected tab content
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}

