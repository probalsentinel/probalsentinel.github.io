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

fetch('certifications.json')
    .then(response => response.json())
    .then(data => {
      const grid = document.getElementById("certGrid");
      data.forEach(cert => {
        const card = document.createElement("a");
        card.className = "cert-card";
        card.href = cert.link;
        card.target = "_blank";
        card.innerHTML = `
          <img src="${cert.image}" alt="${cert.title}">
          <p>${cert.title}<br><small>${cert.issuer}, ${cert.date}</small></p>
        `;
        grid.appendChild(card);
      });
    })
    .catch(error => console.error("Failed to load certifications:", error));

// MATRIX ANIMATION
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

// set canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const binary = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binary[Math.floor(Math.random() * binary.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// HIDE WELCOME AFTER 5s
window.onload = () => {
  setTimeout(() => {
    document.getElementById("welcome-screen").style.display = "none";
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
    setTimeout(() => mainContent.style.opacity = 1, 100);
  }, 5000);
};

  document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to CyberWorld.";
    const typingTarget = document.getElementById("typing-text");
    const cursor = document.getElementById("cursor");
    const mainContent = document.getElementById("main-content");
    const welcomeScreen = document.getElementById("welcome-screen");

    let index = 0;

    function typeChar() {
      if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(typeChar, 70);
      } else {
        cursor.style.display = "none";

        // Show main content smoothly after typing finishes
        setTimeout(() => {
          welcomeScreen.style.display = "none";

          // ✅ First make it visible
          mainContent.style.display = "block";

          // ✅ Then trigger fade-in
          requestAnimationFrame(() => {
            mainContent.style.opacity = 1;
          });
        }, 600); // short delay to separate fade from typing
      }
    }

    typeChar(); // Start typing immediately
  });

  // Smooth Scroll
 document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const allLinks = document.querySelectorAll(".nav-link, .mobile-link");
  const sections = document.querySelectorAll("section , header#home , div#portfolio");
  const mobileMenu = document.getElementById("mobile-nav");

  function setActiveLink(targetId) {
    allLinks.forEach(link => link.classList.remove("active"));
    allLinks.forEach(link => {
      if (link.getAttribute("href") === `#${targetId}`) {
        link.classList.add("active");
      }
    });
  }

  // Smooth scroll and highlight on click
  allLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Optional: slight delay for accurate sync
        setTimeout(() => {
          setActiveLink(targetId);
        }, 400);
      }

      if (mobileMenu) mobileMenu.style.display = "none";
    });
  });

  // ✅ Use IntersectionObserver for scroll-based tab highlight
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");

        if (entry.isIntersecting) {
          setActiveLink(id);
        }
      });
    },
    {
      threshold: 0.6, // Trigger when 60% of section is visible
    }
  );

  sections.forEach(section => observer.observe(section));

  // Mobile menu toggle
  window.toggleMobileMenu = function () {
    if (mobileMenu) {
      mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
    }
  };
});
  
fetch('skills.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('skillsGrid');
    data.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <p>${skill.name}</p>
      `;
      grid.appendChild(card);
    });
  });
