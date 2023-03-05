const speeches = [
    {
      speech: "꿈을 꾸긴 했는데 매번 기억이 안 난다. 계속해서 무언가를 누군가를 찾고 있다."
    },
    {
      speech: "꿈에서 깨어나도 절대 잊지 않도록 서로에게 이름을 써주자."
    },
    {
      speech: "물이든, 쌀이든, 술이든 사람의 몸속으로 들어간 게 영혼과 매듭지어지는 것 또한 무스비."
    },
    {
      speech: "그날, 별이 무수히 쏟아지던 날, 그것은 마치 꿈속 풍경처럼 그저 한없이 아름다운 광경이었다."
    },
    {
      speech: "이 말을 하고 싶었어. 네가 이 세상 어디에 있건 꼭 다시 만나러 갈 거라고!"
    }
  ];

  const speech = document.querySelector("#speech span");
  const speechRandom = speeches[Math.floor(Math.random()*speeches.length)];

  speech.innerText = speechRandom.speech;