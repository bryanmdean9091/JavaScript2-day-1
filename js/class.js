body.style.backgroundColor = 'black';
function pink() {
    document.querySelector('button').style.backgroundColor = 'pink';
    document.querySelector('button').style.fontSize = '410px';
    document.querySelector('button').innerText = 'WHOA!';
    setTimeout(reset, 5000)
};
function reset() {
    window.location.reload()
};

function blue() {
    document.querySelector('button').style.backgroundColor = 'blue';
    document.querySelector('button').style.fontSize = '100px';
    document.querySelector('button').innerText = 'Dbl Click';
};
function orange() {
    document.querySelector('button').style.backgroundColor = 'orange';
    document.querySelector('button').style.fontSize = '300px';
    document.querySelector('button').innerText = 'Wait';
    setTimeout(pink, 5000);
};

