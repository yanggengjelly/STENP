export const newAddMessage = (cafe) => `
  <li class="alarmMessage">
    <p>
      <span class="cafeName">${cafe.cafeName}</span> 에서 스탬프
      <span class="stamptCounter">1</span>개가 적립 되었습니다.
    </p>
  </li>
`;

export const newUseMessage = (cafe) => `
  <li class="alarmMessage">
    <p>
      <span class="cafeName">${cafe.cafeName}</span> 에서 쿠폰을
      <span class="stamptCounter">사용</span>하셨습니다.
    </p>
  </li>
`;

export const check = `
<span class="check"></span>
`;

export const cardTemplate = (cafe) => `
<div class="card" data-cafe-id="${cafe.id}"> <!-- 카페 ID를 data-cafe-id 속성으로 추가 -->
  <h3 class="cardCafeName">${cafe.cafeName}</h3>
  <p class="cafeDescription">
    ${cafe.address}
  </p>
  <div class="couponStamp">
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
    <span class="stamp"></span>
  </div>
</div>
<div class="cardButton_group">
  <button type="button" class="cardButton stampAdd">
    적립/사용
  </button>
  <button type="button" class="cardButton stampDel">
    쿠폰 삭제
  </button>
</div>`;

export const qrTemplate = `

<div class="qrModal">
	<div>
		<img class="qrImg" src="./assets/QR.png" alt="" />
	</div>
	<div>
		<button class="qrModalExitButton">
			<img src="./assets/close.svg" alt="" />
		</button>
	</div>
</div>
</div>`;
