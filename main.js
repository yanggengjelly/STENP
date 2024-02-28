// const btn = document.querySelector("h1");
// const menu = document.querySelector(".menu");

// function handlemenu() {
//   const yes = menu.classList.contains("is-active");

//   if (!yes) {
//     menu.classList.add("is-active");
//   } else {
//     menu.classList.toggle("is-active");
//   }
// }

// btn.addEventListener("click", handlemenu);

const btn = document.querySelector("h1");
const menu = document.querySelector(".menu");

function handlemenu() {
  menu.classList.toggle("is-active");
}

function pw() {
  const pass = prompt("비밀번호를 입력해주세요");
  if (+pass === 1234) {
    handlemenu();
  } else {
    return alert("다시 입력해주세요");
  }
}

pw();

btn.addEventListener("click", handlemenu);
