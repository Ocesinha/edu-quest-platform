const div = document.querySelector('.teste')


let url_discipline = window.location.pathname.slice(9, 12)
// depois pesquisar cm posso proteger isso !!!!!!!!!!!!!!!!!!!!!!!!!
async function buscarMateria(nome) {
  try {
    const res = await fetch('/api/materia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome }) 
    });

    const data = await res.json();
    if(data.length < 1){
        div.innerHTML = '<h1> SEM QUESTÕES </h1>'
    }
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

buscarMateria(url_discipline);
