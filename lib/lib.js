export function getNode(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
  }
  if (context.nodeType !== 9) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

export function getNodes(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNodes 함수의 인수는 문자 타입 이어야 합니다.");
  }

  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelectorAll(node);
}

export function containsClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string")
    throw new TypeError(
      "containsClass 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  return node.classList.contains(className);
}

export function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string")
    throw new TypeError(
      "addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  node.classList.add(className);
}

export function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }

  if (typeof className !== "string")
    throw new TypeError(
      "removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );

  node.classList.remove(className);
}
export function insertFirst(node, text) {
  if (typeof node === "string") node = getNode(node);

  node.insertAdjacentHTML("afterbegin", text);
}
