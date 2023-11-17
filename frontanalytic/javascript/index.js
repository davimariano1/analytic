document.addEventListener("DOMContentLoaded", function () {
  // Função para exibir o botão do WhatsApp com animação
  function showWhatsAppButton() {
    const whatsappButton = document.getElementById("whatsapp-button");
    whatsappButton.style.display = "block";

    let isButtonBig = true;
    setInterval(function () {
      whatsappButton.style.transform = isButtonBig ? "scale(1.1)" : "scale(1)";
      isButtonBig = !isButtonBig;
    }, 1000);
  }

  // Função para adicionar a classe "no-animation" ao título
  function addAnimationToTitle() {
    const title = document.querySelector(".main-content-title");
    setTimeout(function () {
      title.classList.add("no-animation");
    }, 1000);
  }


  // Chama as funções para execução
  showWhatsAppButton();
  addAnimationToTitle();
});


document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".main-content-title");
  const text = title.textContent;
  const letters = text.split("");

  title.textContent = ""; // Limpa o texto original

  // Percorre cada letra e envolve em uma tag <span>
  for (let letter of letters) {
    const span = document.createElement("span");
    span.textContent = letter;
    title.appendChild(span);
  }

  // Função para mostrar letras gradualmente
  function showLetters() {
    const letterSpans = document.querySelectorAll(".main-content-title span");
    let index = 0;

    function displayLetter() {
      if (index < letterSpans.length) {
        letterSpans[index].style.opacity = 1;
        index++;
        setTimeout(displayLetter, 100); // Tempo entre cada letra (ajuste conforme desejado)
      }
    }

    displayLetter();
    
  }
  

  // Chama a função para mostrar as letras gradualmente
  showLetters();

  
});




