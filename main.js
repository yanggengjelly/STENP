import {
  getNode,
  getNodes,
  addClass,
  removeClass,
  insertFirst,
  containsClass,
} from "./lib/lib.js";
import tl from "./animation/intro.js";
import shake from "./animation/animation.js";
import { newAddMessage, newUseMessage, check } from "./lib/template.js";

tl.play();

const cards = getNode(".card");
const qrImg = getNode(".qrImg");
const modal = getNode(".modal");
const stamps = getNodes(".stamp");
const qrModal = getNode(".qrModal");
const stampAdd = getNode(".stampAdd");
const alarmSpace = getNode(".alarmSpace");
const alarmColor = getNode(".information");
const alarmMessage = getNode(".alarmIndex");
const alarmButton = getNode(".header_alarmButton");
const qrModalExitButton = getNode(".qrModalExitButton");

function handleAlram(e) {
  e.preventDefault();
  if (containsClass((alarmSpace, "virtualClass"))) {
    removeClass(alarmSpace, "virtualClass");
    gsap.to(".alarmSpace", {
      x: -431,
      duration: 1,
    });
  } else {
    addClass(alarmSpace, "virtualClass");
    gsap.to(".alarmSpace", {
      x: 0,
      duration: 1,
    });
  }
  alarmColor.classList.remove("alarmColor");
}

function handleStampAdd(e) {
  e.preventDefault();
  if (containsClass(modal, "virtualClass")) {
    removeClass(modal, "virtualClass");
    removeClass(modal, "modalRemove");
    removeClass(qrModal, "modalRemove");
  } else {
    addClass(modal, "virtualClass");
    removeClass(madal, "modalRemove");
    removeClass(qrModal, "modalRemove");
  }
}

function handelExit(e) {
  e.preventDefault();
  if (!containsClass(modal, "modalRemove")) {
    addClass(modal, "modalRemove");
    addClass(qrModal, "modalRemove");
  }
}

function handleQrImg() {
  let isAllChecked = true;

  for (let i = 0; i < stamps.length; i++) {
    if (!getNode(stamps[i], ".check")) {
      insertFirst(stamps[i], check);
      isAllChecked = false;
      insertFirst(alarmMessage, newAddMessage);
      break;
    }
  }
  if (isAllChecked) {
    stamps.forEach((stamp) => {
      stamp.innerHTML = "";
    });
    insertFirst(alarmMessage, newUseMessage);
  }
  addClass(alarmColor, "alarmColor");
}

function handleCard() {
  if (containsClass(cards, "virtualClass")) {
    removeClass(cards, "virtualClass");
    gsap.to(".cardButton_group", {
      opacity: 0,
    });
    gsap.set(".cardButton_group", { display: "none", duration: 2 });
    shake.pause();
  } else {
    addClass(cards, "virtualClass");
    gsap.to(".cardButton_group", {
      opacity: 1,
    });
    gsap.set(".cardButton_group", { display: "flex", duration: 2 });
    shake.play();
  }
}

qrImg.addEventListener("click", handleQrImg);
cards.addEventListener("click", handleCard);
stampAdd.addEventListener("click", handleStampAdd);
alarmButton.addEventListener("click", handleAlram);
qrModalExitButton.addEventListener("click", handelExit);
