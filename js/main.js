const nav = document.getElementById('main-nav');
let seconds = 0;
let interval = null;

function changeNav(name) {
    const title = document.getElementById('title-heading');
    title.innerText = name;

    hideAll();
    document.getElementById(name).style.display = 'block';

    switch (name) {
        case ('home'):
            nav.setAttribute('class', 'babypink');
            break;
        case ('breathe'):
            nav.setAttribute('class', 'terracotta');
            break;
        case ('puzzle'):
            nav.setAttribute('class', 'independence');
            break;
        case ('generator'):
            nav.setAttribute('class', 'greensheen');
            break;
        case ('music'):
            nav.setAttribute('class', 'deepchampagne');
            break;
        case ('study'):
            nav.style.display = 'none';
            start();
            break;
    }
}

function hideAll() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('breathe').style.display = 'none';
    document.getElementById('puzzle').style.display = 'none';
    document.getElementById('generator').style.display = 'none';
    document.getElementById('music').style.display = 'none';
    document.getElementById('study').style.display = 'none';
}

function goToBreak() {
    nav.style.display = 'flex';
    changeNav('home');
    reset();
}

function timer() {
    const timeDisplay = document.getElementById('timer');
    
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if(secs < 10) {secs = '0' + secs;}
    if(mins < 10) {mins = '0' + mins;}
    if(hrs < 10) {hrs = '0' + hrs;}

    timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
    if(interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    const timeDisplay = document.getElementById('timer');
    stop();
    seconds = 0;
    timeDisplay.innerText = '00:00:00';
}

var factList = ["Mercury is the fastest planet in our solar system. It zips around our Sun at an average of 172,000 kilometers per hour (107,000 miles per hour)— about 65,000 kph (40,000 mph) faster than Earth. A year on Mercury is equal to 88 Earth days.",
"Greensboro Lunch Counter - In 1960, four African American college students sat down at the lunch counter at Woolworth’s in Greensboro, North Carolina, and asked to be served, whichwas a huge stance against systemic racial oppression at the time. They inspired many to do the same.",
"Spider webs have been used for wound dressings since the first century A.D... The custom remained popular through Shakespeare's day: 'I shall desire you of more acquaintance, good master cobweb,' said the character Bottom in A Midsummer Night's Dream. 'If I cut my finger, I shall make bold of you.'",
"Snails and slugs eat with a jaw and a flexible band of thousands of microscopic teeth, called a radula. The radula scrapes up, or rasps, food particles and the jaw cuts off larger pieces of food, like a leaf, to be rasped by the radula.",
"The octothorpe. It’s the official name for the # symbol, but what does it mean? It’s actually a made-up word, invented in the same laboratories where the telephone came from.",
"Western civilizations believed in the existence of unicorns for thousands of years—it was a symbol of purity, innocence, and power in Celtic mythology. It's even Scotland's national animal!",
"An average size tree will make approximately 300,000 pencils.",
"Neutron stars are the densest and tiniest stars in the known universe and although they only have a radius of about 10 km (6 mi), they may have a mass of a few times that of the Sun. They can rotate at up to 60 times per second... and have been known to spin as fast as 600-712 times per second because of their physics.",
"Made of three quarters hydrogen and helium for most of its remaining mass, the Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth."];

var gen = document.getElementById("gen");
var fact = document.getElementById("fact");
var count = 0;

gen.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  console.log(count);
  if (count == factList.length){
    count = 0;
    console.log("fjdajfdalsdljsa");
  }
}