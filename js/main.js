const nav = document.getElementById('main-nav');
const fact = document.getElementById("fact");
const changingCirc = document.getElementById('circle');
const instructions = document.getElementById('instructions');
let seconds2 = document.getElementById('circTimer');
let interval = null, breatheInterval = null;
let factList = ["Mercury is the fastest planet in our solar system. It zips around our Sun at an average of 172,000 kilometers per hour (107,000 miles per hour)— about 65,000 kph (40,000 mph) faster than Earth. A year on Mercury is equal to 88 Earth days.",
"Greensboro Lunch Counter - In 1960, four African American college students sat down at the lunch counter at Woolworth’s in Greensboro, North Carolina, and asked to be served, whichwas a huge stance against systemic racial oppression at the time. They inspired many to do the same.",
"Spider webs have been used for wound dressings since the first century A.D... The custom remained popular through Shakespeare's day: 'I shall desire you of more acquaintance, good master cobweb,' said the character Bottom in A Midsummer Night's Dream. 'If I cut my finger, I shall make bold of you.'",
"Snails and slugs eat with a jaw and a flexible band of thousands of microscopic teeth, called a radula. The radula scrapes up, or rasps, food particles and the jaw cuts off larger pieces of food, like a leaf, to be rasped by the radula.",
"The octothorpe. It’s the official name for the # symbol, but what does it mean? It’s actually a made-up word, invented in the same laboratories where the telephone came from.",
"Western civilizations believed in the existence of unicorns for thousands of years—it was a symbol of purity, innocence, and power in Celtic mythology. It's even Scotland's national animal!",
"An average size tree will make approximately 300,000 pencils.",
"Neutron stars are the densest and tiniest stars in the known universe and although they only have a radius of about 10 km (6 mi), they may have a mass of a few times that of the Sun. They can rotate at up to 60 times per second... and have been known to spin as fast as 600-712 times per second because of their physics.",
"Made of three quarters hydrogen and helium for most of its remaining mass, the Sun accounts for 99.86% of the mass in our solar system with a mass of around 330,000 times that of Earth."];
let taskList = ["Get a bottle of water", "Clean your desk", "Get a snack", "Complete something on your to do list", "Fold some laundry", "Wash your hands", "Take a shower"];
let factOrTask = 0, count = 0, seconds = 0, breatheSeconds = 0;
let breatheTracker = "in";

let currTile, otherTile;

function changeNav(name) {
    const title = document.getElementById('title-heading');
    title.innerText = name;

    hideAll();
    document.getElementById(name).style.display = 'block';

    stopBreathe();

    switch (name) {
        case ('home'):
            nav.setAttribute('class', 'babypink');
            break;
        case ('breathe'):
            loadBreathe();
            nav.setAttribute('class', 'terracotta');
            break;
        case ('puzzle'):
            loadPuzzle(5, 5);
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

function setF(){
    factOrTask = 0;
}

function setT(){
    factOrTask = 1;
}

function displayFact(){
    if (!factOrTask) {
        fact.innerHTML = factList[count];
        count++;
        if (count == factList.length) { count = 0; }
    } else {
        fact.innerHTML = taskList[count];
        count++;
        if (count == taskList.length){ count = 0; }
    }
        
}

function changePlaylist() {
    const inputLink = document.getElementById('spotify-link');
    const spotifyPlayer = document.getElementById('spotify-player');

    spotifyPlayer.setAttribute('src', `https://open.spotify.com/embed/playlist/${inputLink.value}?utm_source=generator&theme=0`);
    window.onload;
}

function loadPuzzle(rows, columns) {
    document.getElementById('pieces').innerHTML = '';

    let pieces = [];
    for(let i = 1; i <= rows*columns; i++) {
        pieces.push(i.toString());
    }

    pieces.reverse();
    for(let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    if(rows == 3) {
        for(let i = 0; i < pieces.length; i++) {
            let tile = document.createElement('img');
            tile.src = `img/puzzle/ez/${pieces[i]}.png`;

            tile.style.width = '131px';
            tile.style.height = '131px';

            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
            tile.addEventListener('dragend', dragEnd);


            document.getElementById('pieces').append(tile);
        }
    } else {
        for(let i = 0; i < pieces.length; i++) {
            let tile = document.createElement('img');
            tile.src = `img/puzzle/reg/${pieces[i]}.png`;

            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
            tile.addEventListener('dragend', dragEnd);


            document.getElementById('pieces').append(tile);
        }
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if(currTile.src.includes('blank')) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
}

function loadBreathe() {
    breatheSeconds = 0;
    if(breatheInterval) {
        return;
    }
    instructions.innerText = "Breathe In.";
    breatheInterval = setInterval(breatheTimer, 1000);
}

function breatheTimer() {
    breatheSeconds++;
    
    changingCirc.innerText = breatheSeconds;

    switch(breatheTracker) {
        case 'in':
            if(breatheSeconds == 4) {
                breatheTracker = 'hold';
                instructions.innerText = "Hold.";
                breatheSeconds = 0;
            }
            break;
        case 'hold':
            if(breatheSeconds == 7) {
                breatheTracker = 'out';
                instructions.innerText = "Breathe Out.";
                breatheSeconds = 0;
            }
            break;
        case 'out':
            if(breatheSeconds == 8) {
                breatheTracker = 'in';
                instructions.innerText = "Breathe In.";
                breatheSeconds = 0;
            }
            break;
    }
}

function stopBreathe() {
    clearInterval(breatheInterval);
    breatheInterval = null;
}

var isHomePage = true;

function showLearn(){
    if(isHomePage){
      document.getElementById("desc").innerHTML = "Breathe: Follow the 4-7-8 breathing pattern on the screen to relax. <br><br>Puzzle: Drag and drop the puzzle pieces around to create the full image.<br><br>Generator: Choose to either generate fun facts or small tasks for you to do by clicking one of the yellow buttons and then clicking the generate button. <br><br>Music: Follow the instructions to play a playlist from the embedded player. This works best if you're signed in. <br><br>Study: Click to go into study mode, where you will be free of distractions. A timer helps you see how long you have been on the page. When you need a break, come back to the home page.";
      document.getElementById("learnBtn").innerHTML = "Go back home";
      isHomePage = false;
    } else {
      document.getElementById("desc").innerHTML = "Learning is hard. Late nights before test nights are even worse. When your eyes are bleary and the glow of the computer screen is the only thing you can see, you won’t be studying at your full potential.<br><br>Studylull brings you the solution. The site features relaxing activities such as breathing exercises, interactive puzzles, and user uploaded Spotify playlists to promote fun and restful study breaks. To occupy your time, you can also generate facts or small tasks to get yourself moving. The study feature blocks out the activies and gives you a focused, distraction-free environment to study with a stopwatch and quick access to the break features.<br><br>Whether it’s for better exam studying, increased motivation, and heightened efficiency, Studylull is here to help.";
      document.getElementById("learnBtn").innerHTML = "Learn how it works →";
      isHomePage = true;
    }
}