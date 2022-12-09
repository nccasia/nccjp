window.addEventListener("resize", () => {
  const maxHeightListTop =
    document.getElementById("item-card-list-top").offsetHeight;
  const maxHeightListBottom = document.getElementById(
    "item-card-list-bottom"
  ).offsetHeight;
  const heightList = maxHeightListTop - maxHeightListBottom;
  const maxHeight = document.getElementById("item-cards").offsetHeight;
  document.getElementById("line").style.height = `${maxHeight / 2 + 40}px`;
  document.getElementById("line").style.marginTop = `${heightList / 2}px`;
});

const maxHeightListTop =
  document.getElementById("item-card-list-top").offsetHeight;
const maxHeightListBottom = document.getElementById(
  "item-card-list-bottom"
).offsetHeight;
const heightList = maxHeightListTop - maxHeightListBottom;
const maxHeight = document.getElementById("item-cards").offsetHeight;
document.getElementById("line").style.height = `${maxHeight / 2 + 40}px`;
document.getElementById("line").style.marginTop = `${heightList / 2}px`;
