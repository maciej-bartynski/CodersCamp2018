'use strict';
document.addEventListener('DOMContentLoaded', init);

function init() {
    paralax();
    btnToAsideBar();
}

function paralax() {
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let vw = window.innerWidth;
        let vh = window.innerHeight;
        let dividerX = vw / 10;
        let dividerY = vh / 10;
        let pointPosX = Math.floor(x / dividerX);
        let pointPosY = Math.floor(y / dividerY);
        let bg = document.querySelector('.bground');
        bg.style.left = pointPosX - 10 + 'px';
        bg.style.top = pointPosY - 10 + 'px';
        infoAboutParalax(x, y, dividerX, dividerY, pointPosX, pointPosY);
    });
}

function infoAboutParalax(a, b, c, d, e, f) {
    let idX = document.querySelector('#x');
    let idY = document.querySelector('#y');
    let scaleX = document.querySelector('#scaleX');
    let scaleY = document.querySelector('#scaleY');
    let newLeft = document.querySelector('#newleft');
    let newTop = document.querySelector('#newtop');
    idX.innerText = a;
    idY.innerText = b;
    scaleX.innerText = c;
    scaleY.innerText = d;
    newLeft.innerText = e - 10 + 'px';
    newTop.innerText = f - 10 + 'px';
}

function btnToAsideBar(){
    let btn = document.querySelector('.button');
    let sidebar = document.querySelector('.sidebox');
    let fonticon = document.querySelector('.fonticon');
    btn.addEventListener('click', function(){
        btn.classList.toggle('isClicked');
        sidebar.classList.toggle('isHidden');
        fonticon.classList.toggle('rotation');
    });
}