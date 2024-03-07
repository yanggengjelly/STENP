import {
  containsClass,
  getNode,
  getNodes,
  insertLast,
  toggleClass,
} from "./lib/lib.js";
import gsap from "gsap";
import tl from "./animation/intro.js";
import cafesData from "./data/data.js";
import { cardTemplate, qrTemplate } from "./lib/template.js";

tl.play();

// ! 카드렌더링
const cardIndex = getNode(".cardIndex");

cafesData.forEach((cafe) => {
  const card = cardTemplate(cafe);
  insertLast(cardIndex, card);
});

const cards = getNodes(".card"); // 카드추가 후에 cards 변수 선언
let modal = null; // 전역 변수로 모달을 선언합니다.

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const buttonGroup = event.currentTarget.nextElementSibling;
    const cardElement = event.currentTarget; // 클릭된 카드 요소를 가져옵니다.

    buttonGroup.classList.toggle("view"); // hidden 클래스를 토글하여 보이거나 숨깁니다.

    // 버튼 그룹이 보일 때 애니메이션 시작
    if (buttonGroup.classList.contains("view")) {
      const shake = gsap.to(cardElement, {
        // 클릭된 카드에 대해서만 shake 애니메이션을 정의합니다.
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
        // 클릭된 카드에 대해서만 원래 위치로 되돌아가는 애니메이션을 정의합니다.
        duration: 0.2,
        x: 0,
      });
      gsap.killTweensOf(cardElement); // 클릭된 카드에 대한 애니메이션을 중지합니다.
    }

    // stampAdd 버튼이 클릭되었을 때 모달이 나타나도록 합니다.
    const stampAddButton = buttonGroup.querySelector(".stampAdd");
    stampAddButton.addEventListener("click", () => {
      // 이전에 생성된 모달이 있으면 제거합니다.
      if (modal) {
        modal.remove();
      }

      modal = document.createElement("div");
      modal.classList.add("modal"); // 모달에 클래스 추가
      modal.innerHTML = qrTemplate;
      document.body.appendChild(modal);

      // 모달이 생성된 후 qrModalExitButton에 대한 클릭 이벤트 리스너를 추가합니다.
      const qrModalExitButton = modal.querySelector(".qrModalExitButton");
      qrModalExitButton.addEventListener("click", () => {
        modal.remove(); // 모달을 제거합니다.
        modal = null; // 모달 변수를 null로 초기화합니다.
      });
    });
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
      // cafesData 배열에서 해당 카페 제거
      const updatedCafeData = cafesData.filter((cafe) => cafe.id !== cafeId);

      // .cardButton_group 요소 삭제
      cardButtonGroup.remove();

      // 카드를 화면에서 제거합니다.
      card.remove();
    }
  }
}
