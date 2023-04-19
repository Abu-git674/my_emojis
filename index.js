const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unShiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis(containerID, myEmojisArray) {
  let container = containerID
  container.innerHTML = "";
  for (let i = 0; i < myEmojisArray.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojisArray[i];
    container.append(emoji);
  }
}

renderEmojis(emojiContainer, myEmojis);

pushBtn.addEventListener("click", function () {
  modifyEmojis("push");
});

unShiftBtn.addEventListener("click", function () {
  modifyEmojis("unshift");
});

popBtn.addEventListener("click", function () {
  modifyEmojis("pop");
});

shiftBtn.addEventListener("click", function () {
  modifyEmojis("shift");
});

function modifyEmojis(action) {
  if (emojiInput.value) {
    if (action === "push") {
      myEmojis.push(emojiInput.value);
    } else if (action === "unshift") {
      myEmojis.unshift(emojiInput.value);
    }
    emojiInput.value = "";
  }
  if (action === "pop") {
    myEmojis.pop();
  } else if (action === "shift") {
    myEmojis.shift();
  }

 renderEmojis(emojiContainer, myEmojis);
}
