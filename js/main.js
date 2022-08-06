function changeNav(name) {
    const nav = document.getElementById('main-nav');
    const title = document.getElementById('title-heading');
    title.innerText = name;

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
            nav.setAttribute('class', 'babypink');
            break;
    }
}