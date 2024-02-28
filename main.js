import { gsap } from "gsap";

const mainText = new SplitText(".mainIntro", { type: "words,chars" });
const mainChars = mainText.chars;

const subText = new SplitText(".mainIntro-sub", { type: "words,chars" });
const subChars = subText.chars;

const app = document.querySelector(".app");

const alarmButton = document.querySelector(".alarmButton");

const alarmSection = document.querySelector(".alarmSection");

const tl = gsap.timeline();
tl.from(mainChars, {
  x: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.04,
});
tl.from(subChars, {
  y: -300,
  duration: 1.6,
  delay: 0.6,
  opacity: 0,
  stagger: 0.01,
  ease: "bounce.out",
});
tl.to(".mainIntro", {
  top: -100,
  duration: 1.6,
  delay: 1,
  opacity: 0,
  ease: "Power3.easeIn",
});
tl.from(".header", {
  y: -100,
  duration: 1,
  opacity: 0,
});

function handleAlarm(e) {
  e.preventDefault();
  if (alarmSection.classList.contains("alramVirtualClass")) {
    alarmSection.classList.remove("alramVirtualClass");
    gsap.to(alarmSection, { duration: 1.4, x: -430 });
    app.style.backgroundColor = "#fff";
  } else {
    alarmSection.classList.add("alramVirtualClass");
    gsap.to(alarmSection, { duration: 1, x: 0 });
    app.style.backgroundColor = "#999";
  }
}

alarmButton.addEventListener("click", handleAlarm);

// 알람 목록중 하나 누르면 제거 or 결제 버튼 뜨게 하기

// 제거 누르면 알람 목록에서 읽음 표시

// 알람의 처음 자식이 있을때 이즈액티브로 빨간 알람뜨게하기

// 알람의 처음 자식이 없을때 이즈액티브 제거로 빨간 알람 없애기

// 알람 있으면 헤더부분 나올때 알람 이모지 흔들리게

// 알람이 없으면 흔들리지 않게

// !-------------------------------------------------

// 결제 버튼 누르면 카드 목록으로 넘어가기
