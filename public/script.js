document.getElementById('capture-button').addEventListener('click', function () {
  // Captura a div
  html2canvas(document.querySelector("#post-container")).then(canvas => {
      // Converte o canvas para uma imagem
      let img = canvas.toDataURL("image/png");

      // Cria um link para download da imagem
      let link = document.createElement('a');
      link.href = img;
      link.download = 'instagram-story.png';
      link.click();
  });
});