document.addEventListener('DOMContentLoaded', () => {
  const captureButtons = document.querySelectorAll('.capture-button');

  captureButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          const postContainer = button.previousElementSibling; // Pega o post-container anterior ao botão
          html2canvas(postContainer).then(canvas => {
              const img = canvas.toDataURL('image/png');
              const link = document.createElement('a');
              link.href = img;
              link.download = `destaque-${index + 1}.png`;
              link.click();
          });
      });
  });
});