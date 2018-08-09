'use strict';
document.addEventListener('DOMContentLoaded', init);

function init() {
    paralax();
    asideboxAndContainerHeight();
    window.addEventListener('resize', asideboxAndContainerHeight);
    window.addEventListener('scroll', asideboxAndContainerHeight);
    btnToAsideBar();
    dynamicTxt();
    dynamicTxtArticle();
    btnsInsideAsideBar();
    heightOfImgAccordingToIExplorerIAmSadAboutMicrosoftStillExists();
}
function heightOfImgAccordingToIExplorerIAmSadAboutMicrosoftStillExists(){
    let IMG = document.querySelector('img');
}
function asideboxAndContainerHeight(){
    let cont = document.querySelector('.container');
    let asid = document.querySelector('.asidebar');
    let article = document.querySelector('#dynamictxt').offsetTop + document.querySelector('#dynamictxt').offsetHeight+15;
    let arr = [cont, asid];
    arr.forEach(function(item, idx){
        let currentH = item.offsetHeight;
        let otherH = idx===1 ? arr[0].offsetHeight : arr[1].offsetHeight;
        let minH = currentH>otherH ? currentH : otherH;
        let finalMinH = minH>=article?minH:article;
        let preventMinH = finalMinH>=window.innerHeight?finalMinH:window.innerHeight;
        if (preventMinH !== currentH){
            item.style.minHeight = preventMinH + 'px';
        };
    });
}
function btnsInsideAsideBar() {
    let btns = document.querySelectorAll('.btnhead');
    let articles = document.querySelectorAll('.article');
    for (let i = 0; i < 2; i++) {
        let iter = i;
        btns[iter].addEventListener('click', function (e) {
            articles[iter].classList.toggle('isActive');
            if (iter === 0) {
                articles[1].classList.remove('isActive')
            } else {
                articles[0].classList.remove('isActive')
            }
            setTimeout(asideboxAndContainerHeight,401);
        })
    }
}

function paralax() {
    let bg = document.querySelector('.bground');
    let sp = document.querySelector('.container');
    let initialLeftMargin = bg.offsetLeft;
    window.addEventListener('resize', function () {
        bg.style.left = '-2.5vw';
        initialLeftMargin = bg.offsetLeft;
        sp.style.rotateY = 'none';
    });
    setTimeout(function(){
    window.addEventListener('mousemove', function (e) {
        //bg
        let windowWidth = window.innerWidth;
        let clientPositionFromLeftEdge = e.clientX;
        let clientPositionInPercentage = clientPositionFromLeftEdge / (windowWidth / 100);
        let newLeftMargin = initialLeftMargin + (clientPositionInPercentage * (initialLeftMargin / -100));
        bg.style.left = newLeftMargin + 'px';
        let cpp = clientPositionInPercentage;
        let x;
        if (cpp>39&&cpp<61){
            sp.style.backgroundColor = 'rgba(4,0,24,0.9)';
        } else if (cpp > 60) {
            x = (100 - cpp) * 2;
            x = x < 20 ? 20 : x;
            sp.style.backgroundColor = 'rgba(4,0,24,'+x/100+')';
            sp.style.transition = 'none';
        }  else if (cpp < 40) { 
            x = cpp * 2;
            x = x<20?20:x;
            sp.style.backgroundColor= 'rgba(4, 0, 24,'+x/100+')';
            sp.style.transition = 'none';
        } 
        infoAboutParalax(clientPositionFromLeftEdge, windowWidth, clientPositionInPercentage, newLeftMargin);
    });
    }, 5000);
}

function infoAboutParalax(clientPositionFromLeftEdge, windowWidth, clientPositionInPercentage, newLeftMargin){
    let idX = document.querySelector('#x');
    idX.innerText = clientPositionFromLeftEdge;
    let winWid = document.querySelector('#scaleY');
    winWid.innerText=windowWidth;
    let scaleX = document.querySelector('#scaleX');
    scaleX.innerText = clientPositionInPercentage
    let scaleXb = document.querySelector('#scaleXb');
    scaleXb.innerText = clientPositionInPercentage;
    let newLeft = document.querySelector('#newleft');
    newLeft.innerText = newLeftMargin;
}
function btnToAsideBar() {
    let btn = document.querySelector('.button');
    let sidebar = document.querySelector('.asidebar');
    let fonticon = document.querySelector('.fonticon');
    btn.addEventListener('click', function () {
        btn.classList.toggle('isClicked');
        sidebar.classList.toggle('isHidden');
        fonticon.classList.toggle('rotation');
    });
}

function dynamicTxt() {
    let author = document.querySelector('#motto');
    let myname = [
        'T', 'r', 'y', 'i', 'n', 'g', ' t', 'o', ' l', 'e', 'a', 'r', 'n', '<br />', 'h', 'o', 'w', ' i', 't'
    ];
    let surname = [
        ' w', 'o', 'r', 'k', 's'
    ];
    let mynameiterator = 0;
    let surnameiterator = 0;
    let fullStop = false;

    function setTextToParagraph(string, i, el) {
        el.innerHTML = el.innerHTML + string[i];
        i++;
        if (i < string.length) {
            setTimeout(function () {
                setTextToParagraph(string, i, el)
            }, 100);
        } else if (i === string.length && fullStop === false) {
            setTimeout(function () {
                fullStop = true;
                let span = document.createElement('span');
                author.appendChild(span);
                setTextToParagraph(surname, surnameiterator, span);
            }, 100);
        }
    }
    setTextToParagraph(myname, mynameiterator, author);
}

function dynamicTxtArticle() {
    let button = document.querySelector('#domcontentload');
    button.addEventListener('click', dynamizeArticle);
}

function dynamizeArticle() {
    document.querySelector('#domcontentload').removeEventListener('click', dynamizeArticle);
    document.querySelector('#inn').classList.add('mainText');
    setTimeout(iteratorStep, 400);
    //iterator
    let i = 0;
    let array = ['m', 'y', 't', 'e', 'x', 't'];

    function iteratorStep() {
        let belt = document.querySelector('#a');
        let iter = belt.querySelector('#iterator');
        belt.classList.add('actualStep');
        iter.innerText = i;
        iter.classList.add('blink');
        setTimeout(arrayStep, 600);
    }
    //array step
    function arrayStep() {
        document.querySelector('#a').classList.remove('actualStep');
        document.querySelector('#a #iterator').classList.remove('blink');
        let belt = document.querySelector('#c');
        let char = belt.querySelector('#char');
        belt.classList.add('actualStep');
        char.innerText = array[i];
        char.classList.add('blink');
        setTimeout(innerTextStep, 600);
    }
    //innerTextStep
    function innerTextStep() {
        document.querySelector('#c').classList.remove('actualStep');
        document.querySelector('#c #char').classList.remove('blink');
        let belt = document.querySelector('#d');
        let inn = document.querySelector('#inn');
        belt.classList.add('actualStep');
        inn.innerText += array[i];
        setTimeout(iplusplusStep, 300);
    }
    //call i++
    function iplusplusStep() {
        document.querySelector('#d').classList.remove('actualStep');
        document.querySelector('#d #inn').classList.remove('blink');
        let belt = document.querySelector('#e');
        belt.classList.add('actualStep');
        belt.classList.add('blink');
        setTimeout(iteratorPlus, 300);
    }
    //do i++
    function iteratorPlus() {
        document.querySelector('#e').classList.remove('actualStep');
        document.querySelector('#e').classList.remove('blink');
        let belt = document.querySelector('#a');
        let iter = belt.querySelector('#iterator');
        belt.classList.add('actualStep');
        i++;
        iter.innerText = i;
        iter.classList.add('blink');
        setTimeout(recursiveStep, 600);
    }
    //recursive
    function recursiveStep() {
        document.querySelector('#a').classList.remove('actualStep');
        document.querySelector('#a').classList.remove('blink');
        let belt = document.querySelector('#f');
        belt.classList.add('actualStep');
        let timer = document.querySelector('#dynamictxt i');
        timer.classList.add('timerRotation');
        setTimeout(callingNext, 1000);
    }
    //call function
    function callingNext() {
        document.querySelector('#call').classList.add('blink');
        setTimeout(clearAll, 300);
    }

    function clearAll() {
        document.querySelector('#f').classList.remove('actualStep');
        document.querySelector('#f #call').classList.remove('blink');
        document.querySelector('#f i').classList.remove('timerRotation');
        if (i < 6) {
            iteratorStep();
        } else {
            document.querySelector('#inn').classList.remove('mainText');
            document.querySelector('#domcontentload').addEventListener('click', dynamizeArticle);
        }
    }
}