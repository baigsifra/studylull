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