import { gsap } from "gsap";
import tl from "./animation.js/intro.js";

const alarmButton = document.querySelector(".header_alarmButton");
const alarmSpace = document.querySelector(".alarmSpace");

function alarmColor() {
  alarmButton.insertAdjacentHTML(
    "beforeend",
    '<div class="alarmColor"><span class="ir">알람메세지</span></div>'
  );
  return;
}

function handleAlram(e) {
  e.preventDefault();
  if (alarmSpace.classList.contains("virtualClass")) {
    alarmSpace.classList.remove("virtualClass");
    gsap.to(".alarmSpace", {
      x: -345,
      duration: 1,
    });
  } else {
    alarmSpace.classList.add("virtualClass");
    gsap.to(".alarmSpace", {
      x: 0,
      duration: 1,
    });
    // alarmButton.lastChild.remove();
  }
}

alarmButton.addEventListener("click", handleAlram);

// 1. 애니메이션이 다 끝나면 알람이미지 흔들리기
// 2. 알람버튼 누르면 알람 메세지 나오기
// 3. 다시 눌러서 알람을 확인하면 알람이미지 흔들리지 않기

// 4. Add버튼 누르면 카드 모달창이 뜨고 카드 정보를 입력하고 Add를 누르면 카드목록에 추가
// 카드 목록 데이터 배열로 저장후 .cardIndex에 렌더링

// 5. 카드누르면(카드 떨림) 적립/사용 버튼과 , 삭제 버튼
//(삭제버튼 누르면 삭제하시겠습니까 와 비밀번호 입력해서 삭제)
//(적립/사용 버튼 나오면 큐알코드 제공)

// 6. 적립누르면 10개중에 1개 쌓임
// 7. 10개 다 쌓이면 카드 색상변화 카드를 누르면 적립/사용 , 삭제 버튼 나오기

// 6. 카드 목록은 데이터 배열 형식으로 정리해서 저장
