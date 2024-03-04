// const mainText = new SplitText(".mainIntro", { type: "chars, Lines, words" });
// const mainChars = mainText.chars;

// const subText = new SplitText(".mainIntro-sub", {
//   type: "chars, Lines, words",
// });
// const subChars = subText.chars;

const tl = gsap.timeline();
tl.from(".mainIntro", {
  x: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.04,
});
tl.from(".mainIntro-sub", {
  y: -300,
  duration: 1.6,
  opacity: 0,
  stagger: 0.01,
  ease: "bounce.out",
});
tl.to(".mainIntro", {
  top: -100,
  duration: 1.6,
  opacity: 0,
  ease: "Power3.easeIn",
});
tl.from(
  ".header",
  {
    y: -100,
    duration: 1,
    opacity: 0,
  },
  "samTime"
).from(
  ".cardIndex",
  {
    duration: 1,
    opacity: 0,
  },
  "samTime"
);
tl.from(".circle-1", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-10", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-9", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-8", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-7", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-6", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-5", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-4", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-3", {
  y: -1000,
  ease: "bounce.out",
});
tl.from(".circle-2", {
  y: -1000,
  ease: "bounce.out",
});

export default tl;
