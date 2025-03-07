const balloonsContainer = document.querySelector('.balloons-container');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const colors = ['#ffcc00', '#ff6699', '#66ccff', '#99ff66'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 1.5 + 0.5; 
    const rotation = Math.random() * 20 - 10; 

    balloon.innerHTML = `
        <svg viewBox="0 0 50 100" width="100%" height="100%">
            <ellipse cx="25" cy="40" rx="20" ry="30" fill="${randomColor}"/>
            <line x1="25" y1="70" x2="25" y2="100" stroke="#555" stroke-width="2"/>
        </svg>
    `;

    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 10 + 's';
    balloon.style.opacity = Math.random();
    balloon.style.transform = `scale(${size}) rotate(${rotation}deg)`;
    balloon.style.animation = `floatUp ${Math.random() * 5 + 5}s linear infinite`;

    balloonsContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

setInterval(createBalloon, 500);



const targetDate = new Date('november 25,2013 10:30:00').getTime();

function updateCountdown() {
    
    const now = new Date().getTime();

  
    const timeDifference = now -targetDate ;

    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  

  
    document.getElementById('dayst').textContent = String(days).padStart(2, '0');
    document.getElementById('hourst').textContent = String(hours).padStart(2, '0');
    document.getElementById('mint').textContent = String(minutes).padStart(2, '0');
    
}


setInterval(updateCountdown, 1000);


updateCountdown();
let wrapper = document.getElementById('wrapper')
let glass = document.getElementById('glass')
let cancle=document.getElementById('cancle')
let back=document.getElementById('back')
let next=document.getElementById('next')
let l1=document.getElementById('l1')
document.querySelector('#wrapper').onclick = () =>{    
    glass.classList.add('glass');
    wrapper.classList.add('yes');
    cancle.style.display = "block";

    wrapper.classList.remove('not');

    
    console.log("hello");
}
document.querySelector('#cancle').onclick=()=>{
    wrapper.classList.toggle('yes');
    wrapper.classList.toggle('not');
    glass.classList.toggle('glass');
    cancle.style.display = "none";
    back.style.display = "none";
    next.style.display = "none";
    l1.classList.remove('view')
}
document.querySelector('#l1').onclick=()=>{
    l1.classList.add('view');
    back.style.display = "block";
    next.style.display = "block";


}
document.querySelector('#next').onclick=()=>{
    let selectedItem = document.querySelector('.view');
    let nextElement = selectedItem.nextElementSibling;
    selectedItem.classList.remove('view')
    nextElement.classList.add('view')
}

const backgroundContainer = document.querySelector('.background-effects');


function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    backgroundContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}


function createFaintHeart() {
    const faintHeart = document.createElement('div');
    faintHeart.classList.add('faint-heart');

    faintHeart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="rgba(255, 120, 130, 0.5)"/>
        </svg>
    `;

    faintHeart.style.left = Math.random() * 100 + 'vw';
    faintHeart.style.animationDuration = Math.random() * 10 + 5 + 's';
    backgroundContainer.appendChild(faintHeart);

    setTimeout(() => {
        faintHeart.remove();
    }, 10000);
}


function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
    backgroundContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}


function createWaves() {
    const wave = document.createElement('div');
    wave.classList.add('waves');
    backgroundContainer.appendChild(wave);
}


setInterval(createParticle, 500);  
setInterval(createFaintHeart, 1500); 
setInterval(createSparkle, 800);  
createWaves();  
