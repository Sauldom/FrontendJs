const newButton = document.createElement('button');
newButton.textContent = 'nuevo boton';


//dos maneras de incluir en el dom
const target = document.querySelector('.container');
target.appendChild(newButton);


const secondTarget= document.querySelector('.wrapper');
secondTarget.innerHTML = '<button>otro boton </button>';