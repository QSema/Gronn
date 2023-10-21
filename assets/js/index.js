const modeBtn = document.querySelector(".btn");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enable") {
  enableDarkMode();
}

const changeMode = () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode == "enable") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

modeBtn.addEventListener("click", changeMode);


let openBtn = document.querySelector(".button");
let menu = document.querySelector(".hero");
let openBtn2 = document.querySelector(".button2");

const functionForMenu = () => {
  menu.style.transform = "translateX(0)";
};

openBtn.addEventListener("click", functionForMenu);

const functionForMenu2 = () => {
    menu.style.transform = "translateX(-100%)";
  };
  
openBtn2.addEventListener("click", functionForMenu2);



