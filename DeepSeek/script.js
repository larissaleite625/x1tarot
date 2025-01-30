const cards = [
    { name: "O Louco", image: "louco.jpg", meaning: "Novos começos, espontaneidade, aventura." },
    { name: "O Mago", image: "mago.jpg", meaning: "Vontade, habilidade, concentração." },
    { name: "A Sacerdotisa", image: "sacerdotisa.jpg", meaning: "Intuição, mistério, sabedoria oculta." },
    { name: "A Imperatriz", image: "imperatriz.jpg", meaning: "Fertilidade, abundância, criatividade." },
    { name: "O Imperador", image: "imperador.jpg", meaning: "Autoridade, estrutura, controle." },
    { name: "O Hierofante", image: "hierofante.jpg", meaning: "Tradição, espiritualidade, orientação." },
    { name: "Os Enamorados", image: "enamorados.jpg", meaning: "Amor, harmonia, relacionamentos." },
    { name: "O Carro", image: "carro.jpg", meaning: "Determinação, vitória, progresso." },
    { name: "A Força", image: "forca.jpg", meaning: "Coragem, força interior, compaixão." },
    { name: "O Eremita", image: "eremita.jpg", meaning: "Reflexão, introspecção, sabedoria." },
    { name: "A Roda da Fortuna", image: "roda_da_fortuna.jpg", meaning: "Mudança, sorte, ciclos da vida." },
    { name: "A Justiça", image: "justica.jpg", meaning: "Equilíbrio, justiça, verdade." },
    { name: "O Enforcado", image: "enforcado.jpg", meaning: "Sacrifício, pausa, nova perspectiva." },
    { name: "A Morte", image: "morte.jpg", meaning: "Transformação, fim de um ciclo, renovação." },
    { name: "A Temperança", image: "temperanca.jpg", meaning: "Equilíbrio, moderação, harmonia." },
    { name: "O Diabo", image: "diabo.jpg", meaning: "Tentação, materialismo, escravidão emocional." },
    { name: "A Torre", image: "torre.jpg", meaning: "Mudança brusca, colapso, revelação." },
    { name: "A Estrela", image: "estrela.jpg", meaning: "Esperança, inspiração, fé." },
    { name: "A Lua", image: "lua.jpg", meaning: "Intuição, ilusão, subconsciente." },
    { name: "O Sol", image: "sol.jpg", meaning: "Alegria, sucesso, vitalidade." },
    { name: "O Julgamento", image: "julgamento.jpg", meaning: "Renascimento, avaliação, despertar." },
    { name: "O Mundo", image: "mundo.jpg", meaning: "Conclusão, realização, plenitude." },
  ];
  
  const drawCardButton = document.getElementById("draw-card");
  const shuffleAnimation = document.getElementById("shuffle-animation");
  const cardDisplay = document.getElementById("card-display");
  const cardImage = document.getElementById("card-image");
  const cardName = document.getElementById("card-name");
  const cardMeaning = document.getElementById("card-meaning");
  const historyList = document.getElementById("history-list");
  const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
  
  let history = [];
  
  drawCardButton.addEventListener("click", () => {
    // Mostra a animação de embaralhamento
    shuffleAnimation.classList.remove("hidden");
    shuffleAnimation.classList.add("visible");
  
    // Esconde a carta atual
    cardDisplay.classList.add("hidden");
  
    // Sorteia uma nova carta após 1,5 segundos
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const selectedCard = cards[randomIndex];
  
      // Atualiza a exibição da carta
      cardImage.src = selectedCard.image;
      cardName.textContent = selectedCard.name;
      cardMeaning.textContent = selectedCard.meaning;
  
      // Adiciona a carta ao histórico
      history.push(selectedCard.name);
      updateHistory();
  
      // Mostra a carta e esconde a animação
      cardDisplay.classList.remove("hidden");
      shuffleAnimation.classList.remove("visible");
    }, 1500);
  });
  
  function updateHistory() {
    historyList.innerHTML = "";
    history.forEach((card, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${card}`;
      historyList.appendChild(li);
    });
  }
  
  // Modo Escuro
  toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });