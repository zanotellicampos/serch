const searchInput = document.getElementById('searchInput');
const textBox = document.getElementById('textBox');

// Salvar o texto original
const originalParagraphs = Array.from(textBox.querySelectorAll('p')).map(p => p.textContent);

// Função de normalização para ignorar acentos
function normalize(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Evento de input
searchInput.addEventListener('input', () => {
  const term = normalize(searchInput.value.trim());

  // Atualiza cada parágrafo
  textBox.querySelectorAll('p').forEach((p, index) => {
    let original = originalParagraphs[index];
    if (term === "") {
      p.innerHTML = original;
      return;
    }

    // Divide o texto em partes com destaque
    const regex = new RegExp(`(${term})`, 'gi');
    const highlighted = original.replace(regex, match => `<span class="highlight">${match}</span>`);
    p.innerHTML = highlighted;
  });
});