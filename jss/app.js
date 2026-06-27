// ===== ELEMENTS =====
const beginBtn = document.getElementById("beginBtn");
const pumpkinMusic = document.getElementById("pumpkinMusic");
const letterMusic = document.getElementById("letterMusic");

const landing = document.getElementById("landing");
const hero = document.getElementById("hero");
const moments = document.getElementById("moments");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const ending = document.getElementById("ending");

// Hide everything except landing at start
hero.style.display = "none";
moments.style.display = "none";
letter.style.display = "none";
gallery.style.display = "none";
ending.style.display = "none";

// ===== BEGIN BUTTON =====
beginBtn.addEventListener("click", async () => {

    // fade out landing
    landing.style.transition = "1s ease";
    landing.style.opacity = "0";

    // start music
    pumpkinMusic.volume = 0;
    pumpkinMusic.play();

    // smooth fade-in audio
    let vol = 0;
    const fadeIn = setInterval(() => {
        if (vol < 0.7) {
            vol += 0.05;
            pumpkinMusic.volume = vol;
        } else {
            clearInterval(fadeIn);
        }
    }, 100);

    // wait then show content
    setTimeout(() => {
        landing.style.display = "none";

        hero.style.display = "flex";
        moments.style.display = "flex";
        letter.style.display = "flex";
        gallery.style.display = "flex";
        ending.style.display = "flex";

        // smooth scroll to hero
        hero.scrollIntoView({ behavior: "smooth" });

    }, 1000);

});


// ===== LETTER MUSIC SWITCH (ready for next step) =====
const letterBtn = document.getElementById("letterBtn");

letterBtn.addEventListener("click", () => {

    pumpkinMusic.pause();

    letterMusic.volume = 0;
    letterMusic.play();

    let vol = 0;
    const fadeIn = setInterval(() => {
        if (vol < 0.7) {
            vol += 0.05;
            letterMusic.volume = vol;
        } else {
            clearInterval(fadeIn);
        }
    }, 100);

});
// ===== SCROLL REVEAL =====

const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

allSections.forEach(section => {
    observer.observe(section);
});
