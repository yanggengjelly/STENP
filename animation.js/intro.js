import { gsap } from "gsap";

const mainText = new SplitText(".mainIntro", { type: "words,chars" });
const mainChars = mainText.chars;

const subText = new SplitText(".mainIntro-sub", { type: "words,chars" });
const subChars = subText.chars;

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

export default tl;
