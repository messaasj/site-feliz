// 1 acessar janela 
//2 pegar html todo
// 3pegar botão
// 4 saber que esta sendo clicado no botao

//5acessar janela
//6pegar html todo
//7 pegar o elements
//8 mover o elements para direita
// 9

const btnRight = document.querySelector('.buttom-arrow.-right');
const elements = document.querySelector('.elements');
let pixels = 10


btnRight.addEventListener('click', function() {
     pixels = pixels + 10
     elements.style =`transform: translateX(${pixels}px);
});