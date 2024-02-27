const video = document.querySelector(".video");
video.play();
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});
window.onload = function() {
  input.focus();
}
const input = document.querySelector(".userInput");
const resultContainer = document.querySelector(".conversation");
const volumeBox = document.querySelector(".volumeBox");
const volumeIcon = document.querySelector("#icon");
const volumeType = document.querySelector(".volumeType");
let muted = true;
volumeBox.addEventListener("click", () => {
  if (muted) {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
    volumeType.innerHTML = "sound unmuted";
    muted = false;
    console.log(muted)
  }
  else {
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
    volumeType.innerHTML = "sound muted";
    muted = true;
    console.log(muted)

  }
})
document.querySelector(".clear").addEventListener("click", () => {
  resultContainer.innerHTML = "";
})
window.addEventListener("keypress", (element) => {
  if (element.key === "Enter") {
    let inputPara = document.createElement("p");
    inputPara.classList.add("input");
    inputPara.textContent = input.value;
    resultContainer.appendChild(inputPara)
    output();
    resultContainer.scrollTop = resultContainer.scrollHeight;
    input.value = "";
  }
});

function output() {
  let outputPara = document.createElement("p");
  outputPara.classList.add("output");
  resultContainer.appendChild(outputPara);
  let inpValue = input.value.toLowerCase();
  console.log(input.value.toLowerCase());


  if (inpValue.includes("hello")) {
    outputPara.textContent = "Hello Sir";
  }
  else if (inpValue.includes("how are you")) {
    outputPara.textContent = "I am good sir, tell me how are you and how can i help you.";
  }
  else if (inpValue.includes("open google")) {
    outputPara.textContent = "Opening Google....";
    window.open("https://www.google.com");
  }
  else if (inpValue.includes("saurav")) {
    outputPara.textContent = `Saurav searching....`;
    window.open("http://localhost:7700/J%20A%20R%20V%20I%20S%202/Details/index.html");
  }
  else if (inpValue.includes("open youtube")) {
    outputPara.textContent = "Opening Youtube....";
    window.open("https://www.youtube.com/" /* , k_blan*/ );
  }
  else if (inpValue.includes("open this file in browser") || inpValue.includes("file in browser") || inpValue.includes("open in browser")) {
    outputPara.textContent = "Opening this file on browser....";
    window.open("http://localhost:7700/J%20A%20R%20V%20I%20S%202/index.html");
  }
  else if (inpValue.includes("clear chat") || inpValue.includes("delete chat")) {
    outputPara.textContent = "ok sir clearing chat...";
    setTimeout(() => {
      resultContainer.innerHTML = "";
    }, 1000)
  }
  else if (inpValue.includes("open chatgpt") || inpValue.includes("chatgpt") || inpValue.includes("open chatgpt")) {
    outputPara.textContent = "Opening ChatGpt....";
    window.open("https://chat.openai.com/");
  }

  else if (inpValue.includes("search on youtube")) {
    outputPara.textContent = "searching on Youtube....";
    inpValue = inpValue.replace("search on youtube", "");
    window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(inpValue));
  }
  else if (inpValue.includes("search on google") || inpValue.includes("on google")) {
    outputPara.textContent = "searching on Google....";
    inpValue = inpValue.replace("search on google", "");
    inpValue = inpValue.replace("search", "");
    window.open("https://www.google.com/search?q=" + encodeURIComponent(inpValue));
  }
  else if (inpValue.includes("solve") || inpValue.includes("answer")) {
    outputPara.textContent = "ok"
    window.open("https://www.google.com/search?q=" + encodeURIComponent(inpValue))
  }
  else {
    outputPara.style.color = " #FF5656";
    outputPara.textContent = `Sorry sir i can't reach at '${inpValue}'`;
  }

}