import { gsap } from "gsap";
import tl from "./animation.js/intro.js";
import shake from "./animation.js/animation.js";
import { newAddMessage, newUseMessage } from "./lib/template.js";

const alarmSpace = document.querySelector(".alarmSpace");
const alarmButton = document.querySelector(".header_alarmButton");
const alarmColor = document.querySelector(".information");

const alarmMessage = document.querySelector(".alarmIndex");

const cards = document.querySelector(".card");

const stamps = document.querySelectorAll(".stamp");
const stampAdd = document.querySelector(".stampAdd");

const modal = document.querySelector(".modal");
const qrModal = document.querySelector(".qrModal");

const qrImg = document.querySelector(".qrImg");
const qrModalExitButton = document.querySelector(".qrModalExitButton");

function handleAlram(e) {
  e.preventDefault();
  if (alarmSpace.classList.contains("virtualClass")) {
    alarmSpace.classList.remove("virtualClass");
    gsap.to(".alarmSpace", {
      x: -431,
      duration: 1,
    });
  } else {
    alarmSpace.classList.add("virtualClass");
    gsap.to(".alarmSpace", {
      x: 0,
      duration: 1,
    });
  }
  alarmColor.classList.remove("alarmColor");
}

function handleStampAdd(e) {
  e.preventDefault();
  if (modal.classList.contains("virtualClass")) {
    modal.classList.remove("virtualClass");
    modal.classList.remove("modalRemove");
    qrModal.classList.remove("modalRemove");
  } else {
    modal.classList.add("virtualClass");
    modal.classList.remove("modalRemove");
    qrModal.classList.remove("modalRemove");
  }
}

function handelExit(e) {
  e.preventDefault();
  if (!modal.classList.contains("modalRemove")) {
    modal.classList.add("modalRemove");
    qrModal.classList.add("modalRemove");
  }
}

function handleQrImg() {
  let isAllChecked = true;

  for (let i = 0; i < stamps.length; i++) {
    if (!stamps[i].querySelector(".check")) {
      stamps[i].insertAdjacentHTML("afterbegin", '<span class="check"></span>');
      isAllChecked = false;
      alarmMessage.insertAdjacentHTML("afterbegin", newAddMessage);
      break;
    }
  }
  if (isAllChecked) {
    stamps.forEach((stamp) => {
      stamp.innerHTML = "";
    });
    alarmMessage.insertAdjacentHTML("afterbegin", newUseMessage);
  }
  alarmColor.classList.add("alarmColor");
}

function handleCard() {
  if (cards.classList.contains("virtualClass")) {
    cards.classList.remove("virtualClass");
    gsap.to(".cardButton_group", {
      opacity: 0,
    });
    gsap.set(".cardButton_group", { display: "none", duration: 2 });
    shake.pause();
  } else {
    cards.classList.add("virtualClass");
    gsap.to(".cardButton_group", {
      opacity: 1,
    });
    gsap.set(".cardButton_group", { display: "flex", duration: 2 });
    shake.play();
  }
}

alarmButton.addEventListener("click", handleAlram);
qrImg.addEventListener("click", handleQrImg);
stampAdd.addEventListener("click", handleStampAdd);
qrModalExitButton.addEventListener("click", handelExit);
cards.addEventListener("click", handleCard);
