import { gsap } from "gsap";

const shake = gsap.to(".card", {
  duration: 0.4,
  y: -12,
  repeat: -1,
  yoyo: true,
  clearProps: "y",
  paused: true,
});

export default shake;
