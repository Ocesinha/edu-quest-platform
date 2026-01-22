const div = document.querySelector('.teste');
const disciplines_question = document.querySelector('.disciplines_question');

let url_discipline = window.location.pathname.slice(9, 12);

async function buscarMateria(nome) {
  try {
    const res = await fetch('/api/materia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome })
    });

    const data = await res.json();

    if (data.length < 1) {
      div.innerHTML = '<h1> SEM QUESTÕES </h1>';
      return;
    }

    data.forEach(e => {
      disciplines_question.innerHTML += `
        <div class="question-card" data-correct="${e.correct_alternative}">
          <div class="question-card-header">
            <span class="question-category">${e.discipline}</span>
            <span class="question-difficulty easy">${e.difficult}</span>
          </div>
          <p class="question-text">${e.content}</p>
          <div class="question-options">
            ${e.alternatives.map((alt, idx) => `
              <button class="option" data-index="${idx}">
                <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="option-text">${alt}</span>
              </button>
            `).join('')}
          </div>
          <div class="question-footer">
            <span class="question-subject">${e.title}</span>
            <button class="btn-answer">Responder</button>
          </div>
        </div>
      `;
    });

  } catch (err) {
    console.error(err);
  }
}

buscarMateria(url_discipline);

disciplines_question.addEventListener('click', (e) => {
  const questionCard = e.target.closest('.question-card');
  if (!questionCard) return;

  if (e.target.closest('.option')) {
    const button = e.target.closest('.option');

    questionCard.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('selected');
    });

    button.classList.add('selected');
    return;
  }

  if (e.target.classList.contains('btn-answer')) {
    const selectedButton = questionCard.querySelector('.option.selected');
    if (!selectedButton) {
      alert('Selecione uma alternativa antes de responder!');
      return;
    }

    const correctIndex = parseInt(questionCard.dataset.correct);
    const selectedIndex = parseInt(selectedButton.dataset.index);

  
    questionCard.querySelectorAll('.option').forEach(opt => {
      opt.classList.remove('correct', 'wrong');
    });

    if (selectedIndex === correctIndex) {
      selectedButton.classList.add('correct');
      
    } else {
      selectedButton.classList.add('wrong');
      questionCard.querySelector(`.option[data-index="${correctIndex}"]`).classList.add('correct');
    }
  }
});

