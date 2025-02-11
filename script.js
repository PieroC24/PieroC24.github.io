const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
const dinoSad = document.getElementById('dino-sad'); 

let fontSize = 2

let messages = [
    'Estas segura preciosa?',
    'Piensalo bien, solo tu y yo',
    'Piensalo muy bien ehh',
    'Piensalo bb',
    'Mira el otro botón puessss :p',
    'Analizalo, se cocinar',
    'Me gustas'
  ]
  
  buttonNo.addEventListener('click', () => {
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`
  
    const indexRandom = Math.floor(Math.random() * messages.length)
    buttonNo.textContent = messages[indexRandom]

    document.querySelector('img[src="Assets/dino_love.webp"]').style.display = 'none';

    dinoSad.style.display = 'block';
  })
  
  buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'

    setInterval(() => {
      confetti({
          particleCount: 180,
          spread: 80,
          origin: { x: 0.5, y: 0.5 }
      });
  }, 2000); 
  })