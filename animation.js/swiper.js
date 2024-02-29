import { Swiper } from "swiper";

const swiper = new Swiper(".swiper-container", {
  effect: "cube", // 슬라이드 효과를 'cube'로 설정합니다. 'cube' 효과는 슬라이드가 회전하는 큐브처럼 보이게 만듭니다.
  grabCursor: false, // 이 옵션을 켜면 마우스 커서가 'grab' 스타일로 변합니다. 슬라이드를 마우스로 드래그할 수 있음을 시각적으로 나타냅니다.
  cubeEffect: {
    shadow: true, // 큐브의 각면에 그림자 효과를 추가합니다. 3D 효과를 강조합니다.
    slideShadows: true, // 각 슬라이드에 그림자 효과를 추가합니다. 슬라이드가 회전할 때 그림자가 변하면서 입체감을 더해줍니다.
    shadowOffset: 20, // 그림자의 오프셋(거리)을 설정합니다. 값이 클수록 그림자가 멀리 떨어져 보입니다.
    shadowScale: 1, // 그림자의 크기(scale)을 설정합니다. 1에 가까울수록 그림자가 크고, 0에 가까울수록 그림자가 작아집니다.
  },
});

export default swiper;
