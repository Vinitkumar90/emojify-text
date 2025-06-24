const inputBox = document.querySelector("#inputText");
const outputBox = document.querySelector("#outputText");
const copyBtn = document.querySelector("#copyBtn");
const copyStatus = document.querySelector("#copyStatus");

const emojiDict = {
  // Emotions
  happy: "😊",
  sad: "😢",
  love: "❤️",
  angry: "😡",
  tired: "😴",
  laugh: "😂",
  cry: "😭",
  smile: "😁",
  cool: "😎",
  wow: "😮",
  surprised: "😲",
  scared: "😱",
  bored: "🥱",

  // Food & Drink
  hungry: "🍔",
  pizza: "🍕",
  burger: "🍔",
  fries: "🍟",
  coffee: "☕",
  tea: "🍵",
  water: "💧",
  cake: "🍰",
  chocolate: "🍫",
  icecream: "🍦",
  donut: "🍩",

  // Greetings & Common Phrases
  hello: "👋",
  hi: "👋",
  bye: "👋",
  goodnight: "🌙",
  goodmorning: "☀️",
  ok: "👌",
  yes: "👍",
  no: "👎",
  thanks: "🙏",
  sorry: "🙏",

  // Weather / Nature
  sun: "☀️",
  moon: "🌙",
  rain: "🌧️",
  snow: "❄️",
  storm: "🌩️",
  star: "⭐",
  cloud: "☁️",
  fire: "🔥",
  rainbow: "🌈",
  flower: "🌸",

  // Activities / Fun
  dance: "💃",
  music: "🎵",
  party: "🥳",
  movie: "🎬",
  run: "🏃",
  gym: "🏋️",
  travel: "✈️",
  sleep: "🛌",

  // Animals
  dog: "🐶",
  cat: "🐱",
  monkey: "🐵",
  lion: "🦁",
  panda: "🐼",
  fish: "🐟",

  // Random Fun
  robot: "🤖",
  poop: "💩",
  alien: "👽",
  ghost: "👻",
  heart: "❤️",
  money: "💰",
  win: "🏆",
  idea: "💡"
};


inputBox.addEventListener("input",()=>{
    const inputText = inputBox.value;
    const words = inputText.split(" ");

    const translated = words.map((word) => {
        const cleanWord = word.toLowerCase();
        return emojiDict[cleanWord] || word;
    })

    outputBox.value = translated.join(" ");
})

copyBtn.addEventListener("click",()=>{
    const text = outputBox.value;

    if(text.trim() === " "){
        copyStatus.textContent = "Nothing to copy!";
    }

    navigator.clipboard.writeText(text)
    .then(() => {
        copyStatus.textContent = "Copied !";
        setTimeout(() => {
            copyStatus.textContent = " ";
        }, 1000);
    })
    .catch(() => {
        copyStatus.textContent = "Failed to copy";
    })
})