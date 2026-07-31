const slidesData = [
  {
    text:  `Chào Thẻo iu của anh❤️Nếu em đang ở đây thì cảm ơn em đã dành chút thời gian cho món quà nhỏ này.Anh chỉ muốn cùng em nhìn lại những kỷ niệm đẹp mà chúng ta đã từng có.`,
    gif: "https://i.pinimg.com/originals/b6/b1/d6/b6b1d64609f266d8f236752d8551f26f.gif",
    alt: "Kỷ niệm yêu thương",
  },
  {
    text: `Anh vẫn nhớ từng lần em bay từ Hà Nội vào Sài Gòn.Mỗi lần được gặp em, cả thành phố như vui hơn.Cảm ơn em vì đã luôn cố gắng để khoảng cách không còn quá xa.`,
    gif: "https://i.pinimg.com/originals/3f/4e/d3/3f4ed3cb1539cb42dc93b78020a3ef55.gif",
    alt: "Hà Nội đến Sài Gòn",
  },
  {
    text: `Có lẽ anh chưa phải là người hoàn hảo.Có những lúc anh quá bận, có những điều anh làm chưa đủ tốt.Nhưng có một điều anh chưa từng thay đổi...Đó là anh luôn trân trọng em.`,
    gif: "https://i.pinimg.com/originals/b7/c6/4a/b7c64aca651271c52087f58276bd1de1.gif",
  },
  {
    text: `Anh nhớ những buổi mình cùng đi ăn.Nhớ những lần nắm tay nhau dạo phố.Nhớ những tấm ảnh mình cười thật tươi Những điều bình dị ấy lại là điều anh nhớ nhất.`,
    gif: "https://i.pinimg.com/originals/7e/f6/9c/7ef69cd0a6b0b78526c8ce983b3296fc.gif",
  },
  {
    text:`Dù giữa chúng ta đã có những hiểu lầm...Anh vẫn tin rằng hai người từng thật lòng yêu nhau thì luôn xứng đáng có một cuộc trò chuyện thật bình yên.` ,
    gif: "https://i.pinimg.com/originals/4e/89/d3/4e89d3e4ec4b1f59b1664e880a875c65.gif",
  },
  {text:`Anh không mong em đọc những dòng này rồi phải suy nghĩ nhiều.Anh chỉ mong khi nhớ về chúng ta...Em sẽ mỉm cười nhiều hơn là buồn. `,
    gif: "https://i.pinimg.com/originals/fd/60/15/fd6015dd3f31d0223374f993f66e85d3.gif",
  },
  {
    text: "iu em nhiều moaz moaz 😗😗😗😗",
    gif: "https://i.pinimg.com/originals/56/80/90/5680904ede54bea21d02450affebfc4f.gif",
  },
];

const localImages = Array.from(
  { length: 15 },
  (_, i) => `./style/img/anh%20(${i + 1}).jpg`,
);

let currentSlide = 0;
let finaleShown = false;
let currentTextInterval = null;
let advanceTimeout = null;
const totalSlides = slidesData.length;
const starsContainer = document.getElementById("stars");
const introScreen = document.getElementById("intro-screen");
const bgMusic = document.getElementById("bg-music");
const progressDots = document.getElementById("progress-dots");
const slidesContainer = document.getElementById("slides");
const fallingContainer = document.getElementById("falling-container");
let slides;

function createSlides() {
  slidesData.forEach((data, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.id = `slide${index + 1}`;

    const message = document.createElement("div");
    message.classList.add("message");
    message.id = `message${index + 1}`;

    const hackerText = document.createElement("div");
    hackerText.classList.add("hacker-text");
    message.appendChild(hackerText);

    const img = document.createElement("img");
    img.src = data.gif;
    img.alt = data.alt || "Ảnh kỷ niệm";

    slide.appendChild(message);
    slide.appendChild(img);

    if (index === totalSlides - 1) {
      const overlay = document.createElement("div");
      overlay.classList.add("final-text-overlay");
      const lines = [
        "Nhớ vợ",
        "Anh nhớ em",
        "Vợ ơi",
        "Cố lên nhé",
        "Anh chờ em về",
        "Mình mãi là anh em",
      ];

      lines.forEach((text, lineIndex) => {
        const line = document.createElement("div");
        line.classList.add("shooting-line");
        line.textContent = text;
        line.style.setProperty("--line-delay", `${lineIndex * 0.8}s`);
        line.style.setProperty("--line-top", `${18 + lineIndex * 12}%`);
        overlay.appendChild(line);
      });

      slide.appendChild(overlay);
    }

    slidesContainer.appendChild(slide);
  });

  slides = document.querySelectorAll(".slide");
}

function init() {
  createSlides();
  createProgressDots();
  preloadImages();
  setEventListeners();
  createIntroHeartEffect();
  program();
}

function createProgressDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    if (i === 0) dot.classList.add("active");
    progressDots.appendChild(dot);
  }
}

function preloadImages() {
  const images = document.querySelectorAll(".slide img");
  images.forEach((img) => {
    const image = new Image();
    image.src = img.src;
  });
}

function program(delay = 200) {
  (function () {
    const _b = (s) => decodeURIComponent(escape(atob(s)));
    const _d = [
      "QuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4IgRHIuR2lmdGVy",
      "VGlrdG9rOiBodHRwczovL3d3dy50aWt0b2suY29tL0Bkci5naWZ0ZXIzMDY=",
      "R2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vRHJHaWZ0ZXI=",
    ];

    setTimeout(() => {
      _d.forEach((x) => console.log(_b(x)));
    }, delay);
  })();
}

function textRevealEffect(element, finalText, speed = 30, onComplete) {
  let index = 0;
  element.textContent = "";
  element.classList.remove("complete");
  if (currentTextInterval) {
    clearInterval(currentTextInterval);
    currentTextInterval = null;
  }

  currentTextInterval = setInterval(() => {
    element.textContent = finalText.slice(0, index + 1);
    index += 1;
    if (index >= finalText.length) {
      clearInterval(currentTextInterval);
      currentTextInterval = null;
      element.classList.add("complete", "visible");
      if (onComplete) onComplete();
    }
  }, speed);
  element.classList.add("visible");
}

function getMobileSettings() {
  const isMobile = window.innerWidth <= 768;

  return {
    itemCount: isMobile ? 10 : 18,
    starCount: isMobile ? 60 : 90,
    minSize: isMobile ? 34 : 52,
    maxSize: isMobile ? 68 : 110,
    fallDurationMin: isMobile ? 9 : 7,
    fallDurationMax: isMobile ? 13 : 10,
    starDurationMin: isMobile ? 7 : 5,
    starDurationMax: isMobile ? 12 : 10,
  };
}

function gatherFallingItemsIntoHeart() {
  const items = Array.from(document.querySelectorAll('.falling-item'));
  if (items.length === 0) {
    return;
  }

  const pieces = items.length;
  items.forEach((item, index) => {
    const t = (Math.PI * 2 * index) / pieces;
    const x = 50 + 20 * Math.pow(Math.sin(t), 3);
    const y = 38 - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    item.style.transition = 'left 1.4s ease, top 1.4s ease, opacity 1.4s ease, transform 1.4s ease';
    item.style.left = `${x}%`;
    item.style.top = `${y}%`;
    item.style.opacity = '0.25';
    item.style.transform = 'scale(0.45)';
  });

  setTimeout(() => {
    items.forEach((item) => item.remove());
  }, 2200);
}

function startFallingEffect() {
  showFinalHeart();

  const fallingSources = [
    ...localImages.map((src) => ({ src, isImage: true })),
    ...slidesData.map((data) => ({ src: data.gif, isImage: false })),
  ];
  const { itemCount, minSize, maxSize, fallDurationMin, fallDurationMax } = getMobileSettings();

  for (let i = 0; i < itemCount; i++) {
    const { src, isImage } =
      fallingSources[Math.floor(Math.random() * fallingSources.length)];

    const item = document.createElement("img");
    item.classList.add("falling-item");
    if (isImage) item.classList.add("falling-item--image");
    item.src = src;
    item.alt = "";

    const size = Math.random() * (maxSize - minSize) + minSize;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.left = `${Math.random() * 92 + 4}%`;
    item.style.top = `${Math.random() * -40 - 10}%`;
    item.style.setProperty("--rotation", `${Math.random() * 60 - 30}deg`);
    item.style.opacity = "0";

    const fallDuration = Math.random() * (fallDurationMax - fallDurationMin) + fallDurationMin;
    const delay = Math.random() * (window.innerWidth <= 768 ? 1.2 : 2);

    if (isImage) {
      const borderDuration = Math.random() * 2 + 2;
      item.style.animationDuration = `${fallDuration}s, ${borderDuration}s`;
      item.style.animationDelay = `${delay}s, 0s`;
    } else {
      item.style.animationDuration = `${fallDuration}s`;
      item.style.animationDelay = `${delay}s`;
    }

    fallingContainer.appendChild(item);
    item.style.opacity = "1";
  }

  const gatherDelay = window.innerWidth <= 768 ? 7000 : 9000;
  setTimeout(() => {
    gatherFallingItemsIntoHeart();
  }, gatherDelay);
}

function showFinalHeart() {
  const finalHeart = document.getElementById("final-heart");
  if (!finalHeart) return;

  finalHeart.classList.add("visible");
  setTimeout(() => {
    finalHeart.classList.remove("visible");
  }, 12000);
}

function setFinalSlideEffect(visible) {
  const overlay = document.querySelector(".final-text-overlay");
  if (!overlay) return;
  overlay.classList.toggle("visible", visible);
}

function createStars() {
  const { starCount, starDurationMin, starDurationMax } = getMobileSettings();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * -100}px`;
    const duration = Math.random() * (starDurationMax - starDurationMin) + starDurationMin;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}

function createIntroHeartEffect() {
  const effectContainer = document.getElementById("heart-effect");
  if (!effectContainer) return;
  effectContainer.innerHTML = "";

  const pieces = 110;
  const scale = 1.8;

  for (let i = 0; i < pieces; i++) {
    const t = (Math.PI * 2 * i) / pieces;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const piece = document.createElement("div");
    piece.className = "heart-piece";
    piece.style.left = `${50 + x * scale}%`;
    piece.style.top = `${38 - y * scale}%`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    piece.style.animationDuration = `${2.8 + Math.random() * 1.2}s`;
    effectContainer.appendChild(piece);
  }
}

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  if (currentTextInterval) clearInterval(currentTextInterval);
  if (advanceTimeout) clearTimeout(advanceTimeout);

  currentSlide = index;
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  document.querySelectorAll(".dot").forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  document.querySelectorAll(".hacker-text").forEach((text) => {
    text.classList.remove("complete", "visible");
  });

  const messageElement = document.querySelector(
    `#message${index + 1} .hacker-text`,
  );
  const isLastSlide = index === totalSlides - 1;
  setFinalSlideEffect(isLastSlide);

  textRevealEffect(messageElement, slidesData[index].text, 28, () => {
    advanceTimeout = setTimeout(() => {
      if (isLastSlide) {
        if (!finaleShown) {
          finaleShown = true;
          slides[index].classList.remove("active");
          advanceTimeout = setTimeout(startFallingEffect, 1000);
        }
      } else {
        nextSlide();
      }
    }, 2000);
  });
}

function nextSlide() {
  showSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  showSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function startPresentation() {
  introScreen.style.opacity = "0";
  introScreen.style.pointerEvents = "none";
  setTimeout(() => {
    introScreen.style.display = "none";
  }, 400);

  createStars();
  showSlide(0);

  bgMusic.currentTime = 20;
  bgMusic.play().catch((e) => console.log("Tự động phát bị chặn:", e));
}

function setEventListeners() {
  introScreen.addEventListener("click", () => {
    startPresentation();
  });

  document.addEventListener("keydown", (e) => {
    if (introScreen.style.display === "none") {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
  });

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"), 10);
      showSlide(index);
    });
  });

  window.addEventListener("load", adjustImages);
  window.addEventListener("resize", adjustImages);
}

function adjustImages() {
  const images = document.querySelectorAll(".slide img");
  const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.5, 300);

  images.forEach((img) => {
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
  });
}

class Tool {
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static randomColorHSL(hue, saturation, lightness) {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}

class Angle {
  constructor(a) {
    this.a = a;
    this.rad = (this.a * Math.PI) / 180;
  }

  incDec(num) {
    this.a += num;
    this.rad = (this.a * Math.PI) / 180;
  }
}

const overlay = document.createElement("div");
overlay.className = "zoom-overlay";

const zoomImg = document.createElement("img");
zoomImg.className = "zoom-image";

overlay.appendChild(zoomImg);
document.body.appendChild(overlay);

function enableImageZoom(){

    document.addEventListener("pointerdown",(e)=>{

        if(!e.target.classList.contains("falling-item")) return;

        zoomImg.src = e.target.src;
        overlay.classList.add("active");

        e.target.style.animationPlayState="paused";
    });

    function closeZoom(){

        overlay.classList.remove("active");

        document.querySelectorAll(".falling-item").forEach(img=>{
            img.style.animationPlayState="running";
        });

    }

    document.addEventListener("pointerup",closeZoom);
    document.addEventListener("pointercancel",closeZoom);

}

enableImageZoom();

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
