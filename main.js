import {
  getNode,
  getNodes,
  insertFirst,
  insertLast,
  removeClass,
  addClass,
} from "./lib/lib.js";
import gsap from "gsap";
import tl from "./animation/intro.js";
import cafesData from "./data/data.js";
import {
  cardTemplate,
  qrTemplate,
  check,
  addMessage,
  useMessage,
} from "./lib/template.js"; //

tl.play();

const alarmButton = getNode(".header_alarmButton");
const alarmColor = getNode(".information");
const alarmSpace = getNode(".alarmSpace");

// ! 알람 공간 on/off
function handleAlram(e) {
  e.preventDefault();
  if (alarmSpace.classList.contains("virtualClass")) {
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
alarmButton.addEventListener("click", handleAlram);

// ! 카드렌더링
const cardIndex = getNode(".cardIndex");

cafesData.forEach((cafe) => {
  const card = cardTemplate(cafe);
  insertLast(cardIndex, card);
});

const cards = getNodes(".card"); // 카드추가 후에 cards 변수 선언
let modal = null; // 전역 변수로 모달을 선언합니다.
const alarmMessage = getNode(".alarmIndex");

// ! 적립/사용 / 카드삭제 버튼 등장 / 애니메이션 효과 적립/사용 모달
// ! 적립/사용 / 카드삭제 버튼 등장 / 애니메이션 효과 적립/사용 모달
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const buttonGroup = event.currentTarget.nextElementSibling;
    const cardElement = event.currentTarget;

    buttonGroup.classList.toggle("view");

    // 애니메이션 시작
    if (buttonGroup.classList.contains("view")) {
      const shake = gsap.to(cardElement, {
        duration: 0.08,
        x: 10,
        repeat: -1,
        yoyo: true,
        clearProps: "x",
        paused: true,
      });
      shake.play();
    } else {
      gsap.from(cardElement, {
        duration: 0.2,
        x: 0,
      });
      gsap.killTweensOf(cardElement);
    }

    // 스탬프 추가 버튼 클릭 시
    const stampAddButton = buttonGroup.querySelector(".stampAdd");
    if (stampAddButton) {
      stampAddButton.addEventListener("click", () => {
        // 이전에 생성된 모달이 있으면 제거
        if (modal) {
          modal.remove();
        }

        modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = qrTemplate;
        document.body.appendChild(modal);

        // 모달 닫기 버튼 클릭 이벤트
        const qrModalExitButton = modal.querySelector(".qrModalExitButton");
        qrModalExitButton.addEventListener("click", () => {
          modal.remove();
          modal = null;
        });

        // QR 코드 이미지 클릭 시
        const qrImg = modal.querySelector(".qrImg");
        if (qrImg) {
          qrImg.addEventListener("click", () => {
            const stamps = card.querySelectorAll(".stamp");
            let stampCount = 0;

            stamps.forEach((stamp) => {
              if (stamp.querySelector(".check")) {
                const cafe = cafesData.find(
                  (cafe) => cafe.id === parseInt(card.dataset.cafeId)
                );
                insertFirst(alarmMessage, addMessage(cafe));
                stampCount++;
              }
            });

            // 스탬프 10개 모두 채워졌을 때
            if (stampCount === 10) {
              const cafe = cafesData.find(
                (cafe) => cafe.id === parseInt(card.dataset.cafeId)
              );
              insertFirst(alarmMessage, useMessage(cafe));
            } else {
              // 스탬프 추가
              for (let i = 0; i < stamps.length; i++) {
                if (!stamps[i].querySelector(".check")) {
                  stamps[i].innerHTML = check;
                  break;
                }
              }
            }
          });
        }
      });
    }
  });
});

// ! 카페 데이터 카드 삭제
const delButtons = getNodes(".stampDel");

// 각 삭제 버튼에 대해 이벤트 핸들러를 등록합니다.
delButtons.forEach((button) => {
  button.addEventListener("click", handleDeleteButtonClick);
});

// "쿠폰 삭제" 버튼 클릭 시 실행될 이벤트 핸들러 함수
function handleDeleteButtonClick(event) {
  const cardButtonGroup = event.currentTarget.closest(".cardButton_group");
  const card = cardButtonGroup.previousElementSibling; // .card 요소 찾기

  if (card) {
    const cafeId = parseInt(card.dataset.cafeId); // 카드의 data-cafe-id 속성을 가져옵니다.
    console.log("Cafe ID:", cafeId); // 카페 ID 확인

    if (!isNaN(cafeId)) {
      const realDelete = confirm("정말로 쿠폰을 삭제하시겠습니까?");

      if (realDelete) {
        // cafesData 배열에서 해당 카페 제거
        const updatedCafeData = cafesData.filter((cafe) => cafe.id !== cafeId);

        // .cardButton_group 요소 삭제
        cardButtonGroup.remove();

        // 카드를 화면에서 제거합니다.
        card.remove();
      }
    }
  }
}
