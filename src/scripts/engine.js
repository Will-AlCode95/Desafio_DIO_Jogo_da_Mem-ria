const emojis = 
[
    '🐼', '🐼',
    '🐻', '🐻',
    '🐨', '🐨',
    '🐸', '🐸',
    '🦁', '🦁',
    '🐵', '🐵',
    '🐶', '🐶',
    '🦝', '🦝',
    '🐯', '🐯',
    '🦈', '🦈',
]
let opennCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);  //sorteia as cartas
    
for (let i = 0; i < emojis.length; i++)   

{
    let box = document.createElement('div');  
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);

}

function handleClick()  //criou essa função pois ela não existe
{
    if(opennCards.length < 2)  //verifica se a quantidade de cartas abertas e menor que 2
        {
        this.classList.add('boxOpen');
        opennCards.push(this);
        }

    if(opennCards.length == 2)  //verifica se as cartas estao abertas
    {
      setTimeout(checkMatch, 500);  
    }        
    console.log(opennCards);
}  

function checkMatch() 
{
    if(opennCards[0].innerHTML === opennCards[1].innerHTML)  //verifica se as cartas sao iguais
    {
      opennCards[0].classList.add('boxMatch');   //adiciona a classe boxMatch
      opennCards[1].classList.add('boxMatch');
    }
    else
    {
      opennCards[0].classList.remove('boxOpen');   //remove a classe boxOpen
      opennCards[1].classList.remove('boxOpen');
    }
    opennCards = []; 
    if(document.querySelectorAll('.boxMatch').length == emojis.length)  //verifica se o jogo terminou
    {
      alert('Parabéns, você venceu o jogo!');
    }
}