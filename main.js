btns = document.querySelectorAll('.btn');
finish = false;
tst = true;
wow = document.querySelector('.win');
btnn = document.querySelector('.btnn');
scoreX = 0;
scoreO = 0 ;
win = 'x';
for (let index = 0; index < btns.length; index++) {
    btns[index] = '' ; 
 };


 document.querySelector('.start').onclick = ()=> {
    document.querySelector('.bgn').style.display ='none';
    document.querySelector('.names').style.display ='flex';
 }
document.querySelector('.x').classList.add('act');
btns.forEach(btn => {
    btn.onclick = ()=> {
        if (!finish) {
            if (btn.innerHTML == "") {
                if (tst) {
                    document.querySelector('.o').classList.add('active');
                    document.querySelector('.x').classList.remove('act');
                    btn.innerHTML = "x";
                    btn.style.color = '#FF2442';
                    btn.style.textShadow= '5px  5px 10px  #FF2442' ;
                    tst = false;
                    ts()
                } else {
                    document.querySelector('.x').classList.add('act');
                    document.querySelector('.o').classList.remove('active');
                    btn.innerHTML = "o";
                    btn.style.color = '#3DB2FF';
                    btn.style.textShadow= '5px  5px 10px #3DB2FF' ;
                    tst = true;
                    ts()
                } 
            }           
    } else {
        
    }
    }
});

function ts() {
    tt = true ;
    tr = false;
    for (let index = 0; index < btns.length; index++) {
       tt = btns[index].innerText != '' && tt; 
    };
if (( btns[0].innerText == btns[1].innerText && btns[0].innerText == btns[2].innerText && btns[0].innerText != '') ||
( btns[0].innerText == btns[3].innerText && btns[0].innerText == btns[6].innerText && btns[0].innerText != '') ||
( btns[0].innerText == btns[4].innerText && btns[0].innerText == btns[8].innerText && btns[0].innerText != '') ||
( btns[3].innerText == btns[4].innerText && btns[3].innerText == btns[5].innerText && btns[3].innerText != '') ||
( btns[6].innerText == btns[7].innerText && btns[6].innerText == btns[8].innerText && btns[6].innerText != '') ||
( btns[6].innerText == btns[4].innerText && btns[6].innerText == btns[2].innerText && btns[6].innerText != '') ||
( btns[1].innerText == btns[4].innerText && btns[1].innerText == btns[7].innerText && btns[1].innerText != '') ||
( btns[2].innerText == btns[5].innerText && btns[2].innerText == btns[8].innerText && btns[2].innerText != '') ||
tt ){
    finish = true ;
    document.querySelector('.bt').style.display="flex";
    if (( btns[0].innerText == btns[1].innerText && btns[0].innerText == btns[2].innerText && btns[0].innerText != 'x') ||
    ( btns[0].innerText == btns[3].innerText && btns[0].innerText == btns[6].innerText && btns[0].innerText != 'x') ||
    ( btns[0].innerText == btns[4].innerText && btns[0].innerText == btns[8].innerText && btns[0].innerText != 'x') ||
    ( btns[3].innerText == btns[4].innerText && btns[3].innerText == btns[5].innerText && btns[3].innerText != 'x') ||
    ( btns[6].innerText == btns[7].innerText && btns[6].innerText == btns[8].innerText && btns[6].innerText != 'x') ||
    ( btns[6].innerText == btns[4].innerText && btns[6].innerText == btns[2].innerText && btns[6].innerText != 'x') ||
    ( btns[1].innerText == btns[4].innerText && btns[1].innerText == btns[7].innerText && btns[1].innerText != 'x') ||
    ( btns[2].innerText == btns[5].innerText && btns[2].innerText == btns[8].innerText && btns[2].innerText != 'x')) {
        win = 'o';
    }else if (!tt) {
        win = 'x';
    }

     if (btns[0].innerText == btns[1].innerText && btns[0].innerText == btns[2].innerText && btns[0].innerText != '') {
         wow.style.transform = "rotate(90deg) translateX(-150px)";
         tr = true ;
     } else if (btns[0].innerText == btns[3].innerText && btns[0].innerText == btns[6].innerText  && btns[0].innerText != '') {
        wow.style.transform = " translateX(-170px)";
        tr = true ;
    } else if (btns[0].innerText == btns[4].innerText && btns[0].innerText == btns[8].innerText  && btns[0].innerText != '') {
        wow.style.transform = " rotate(-45deg)";
        tr = true ;
    }else if (btns[3].innerText == btns[4].innerText && btns[3].innerText == btns[5].innerText  && btns[3].innerText != '') {
        wow.style.transform = " rotate(90deg)";
        tr = true ;
    }else if (btns[6].innerText == btns[7].innerText && btns[6].innerText == btns[8].innerText  && btns[6].innerText != '') {
        wow.style.transform = " rotate(90deg) translateX(180px)";
        tr = true ;
    }else if (btns[6].innerText == btns[4].innerText && btns[6].innerText == btns[2].innerText  && btns[6].innerText != '') {
        wow.style.transform = " rotate(45deg)";
        tr = true ;
    }else if (btns[2].innerText == btns[5].innerText && btns[2].innerText == btns[8].innerText  && btns[2].innerText != '') {
        wow.style.transform = " translateX(170px)";
        tr = true ;
    }
    if (!tt || tr) {
        wow.style.display = "flex";
    }
    document.querySelector('.o').classList.remove('active');
    document.querySelector('.x').classList.remove('act');
} 
}

document.querySelector('.bt').onclick = ()=>{
    if (tt) {
        if (win == 'x') {
            win = 'o';
        }else {
            win = 'x';
        }
    }
    
    if (win == 'x') {
        document.querySelector('.x').classList.add('act');
        if (!tt) {
            scoreX++;
        }
        tst = true;
        document.querySelector('.scoreX').innerHTML =''+ scoreX;
    } else {
        document.querySelector('.o').classList.add('active');
        if (!tt) {
            scoreO++;
        }
        tst = false;
        document.querySelector('.scoreO').innerHTML = ''+scoreO;
    }
    btns.forEach(btn => {
        btn.innerHTML = '';
    });
    document.querySelector('.bt').style.display ="none";
    wow.style.display ='none';
    finish= false;
    wow.style.transform = " none";
}

btnn.onclick=()=> {
if ( document.querySelector('.player1').value != ''  &&
document.querySelector('.player2').value != '' ) {

        document.querySelector('.names').style.display ='none';
        document.querySelector('.game').style.display ='flex';
        nam1 = document.querySelector('.player1').value  ;
        nam2 = document.querySelector('.player2').value  ;
        document.querySelector('.nameX').innerText  = nam1;
        document.querySelector('.nameO').innerText  = nam2;

}
}

