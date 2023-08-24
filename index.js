let tabContainer = document.getElementById("tabContainer");
let tabs = tabContainer.getElementsByClassName("tab");
let sunIcon = document.getElementById("sun");
let moonIcon = document.getElementById("moon");

document.body.classList.add("theme-light");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    let current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    tabs[i].classList.add("active");
  });
}

let mode = localStorage.getItem("mode");
console.log(mode);

if (mode === null || mode === "theme-light") {
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
  moonIcon.classList.add("d-none")
  sunIcon.classList.remove("d-none")

} else {
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");
  sunIcon.classList.add("d-none")
  moonIcon.classList.remove("d-none")
  if (window.location.href.includes("index.html")) {
    let calender = document.getElementById("calender");
    calender.classList.toggle("darkModeCalender");
  }

}

function themeToggle() {
  sunIcon.classList.toggle("d-none");
  moonIcon.classList.toggle("d-none");

  if (document.body.className.includes("theme-light")) {
    localStorage.setItem("mode", "theme-dark");
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  } else {
    localStorage.setItem("mode", "theme-light");
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }

  if (window.location.href.includes("index.html")) {
    let calender = document.getElementById("calender");
    calender.classList.toggle("darkModeCalender");
  }
}
