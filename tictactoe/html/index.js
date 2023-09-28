let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let a3 = document.querySelector("#a3")
let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let c3 = document.querySelector("#c3")

let turn = document.querySelector("#page")
let xtxt = document.querySelector(".xtxt")
let otxt = document.querySelector(".otxt")

let item = document.querySelector('.item')

//Start From here select omark = a1.qeru ... and so on 
let omarka1 = a1.querySelector('#circle')
let xmarka1 = a1.querySelector('#cross')
let omarka2 = a2.querySelector('#circle')
let xmarka2 = a2.querySelector('#cross')
let omarka3 = a3.querySelector('#circle')
let xmarka3 = a3.querySelector('#cross')

let omarkb1 = b1.querySelector('#circle')
let xmarkb1 = b1.querySelector('#cross')
let omarkb2 = b2.querySelector('#circle')
let xmarkb2 = b2.querySelector('#cross')
let omarkb3 = b3.querySelector('#circle')
let xmarkb3 = b3.querySelector('#cross')

let omarkc1 = c1.querySelector('#circle')
let xmarkc1 = c1.querySelector('#cross')
let omarkc2 = c2.querySelector('#circle')
let xmarkc2 = c2.querySelector('#cross')
let omarkc3 = c3.querySelector('#circle')
let xmarkc3 = c3.querySelector('#cross')

let markA1 = (n)=>{
    if(n==0){
        xmarka1.style.display = 'none'
        omarka1.style.display = 'block'
    }
    if(n==1){
        omarka1.style.display = 'none' 
        xmarka1.style.display = 'block'
    }
}
let markA2 = (n)=>{
    if(n==0){
        xmarka2.style.display = 'none'
        omarka2.style.display = 'block'
    }
    if(n==1){
        omarka2.style.display = 'none' 
        xmarka2.style.display = 'block'
    }
}
let markA3 = (n)=>{
    if(n==0){
        xmarka3.style.display = 'none'
        omarka3.style.display = 'block'
    }
    if(n==1){
        omarka3.style.display = 'none' 
        xmarka3.style.display = 'block'
    }
}
let markB1 = (n)=>{
    if(n==0){
        xmarkb1.style.display = 'none'
        omarkb1.style.display = 'block'
    }
    if(n==1){
        omarkb1.style.display = 'none' 
        xmarkb1.style.display = 'block'
    }
}
let markB2 = (n)=>{
    if(n==0){
        xmarkb2.style.display = 'none'
        omarkb2.style.display = 'block'
    }
    if(n==1){
        omarkb2.style.display = 'none' 
        xmarkb2.style.display = 'block'
    }
}
let markB3 = (n)=>{
    if(n==0){
        xmarkb3.style.display = 'none'
        omarkb3.style.display = 'block'
    }
    if(n==1){
        omarkb3.style.display = 'none' 
        xmarkb3.style.display = 'block'
    }
}
let markC1 = (n)=>{
    if(n==0){
        xmarkc1.style.display = 'none'
        omarkc1.style.display = 'block'
    }
    if(n==1){
        omarkc1.style.display = 'none' 
        xmarkc1.style.display = 'block'
    }
}
let markC2 = (n)=>{
    if(n==0){
        xmarkc2.style.display = 'none'
        omarkc2.style.display = 'block'
    }
    if(n==1){
        omarkc2.style.display = 'none' 
        xmarkc2.style.display = 'block'
    }
}
let markC3 = (n)=>{
    if(n==0){
        xmarkc3.style.display = 'none'
        omarkc3.style.display = 'block'
    }
    if(n==1){
        omarkc3.style.display = 'none' 
        xmarkc3.style.display = 'block'
    }
}


//loop attempt
// let omark = []
// let xmark = []
// for(let i =1;i<=3;i++){
//     if(omark.length<=3){
//         omark.push(a[i].querySelector('#circle'))
//     }
//     else if(omark.length<=6){
//         i=1
//         omark.push(b[i].querySelector('#circle'))
//     }
//     else if(omark.length<=9){
//         i=1
//         omark.push(c[i].querySelector('#circle'))
//     }
// }

let linePos = 0
function collect (){

    let o1 = a1.classList.contains('O')
    let o2 = a2.classList.contains('O')
    let o3 = a3.classList.contains('O')
    let o4 = b1.classList.contains('O')
    let o5 = b2.classList.contains('O')
    let o6 = b3.classList.contains('O')
    let o7 = c1.classList.contains('O')
    let o8 = c2.classList.contains('O')
    let o9 = c3.classList.contains('O')

    let x1 = a1.classList.contains('X')
    let x2 = a2.classList.contains('X')
    let x3 = a3.classList.contains('X')
    let x4 = b1.classList.contains('X')
    let x5 = b2.classList.contains('X')
    let x6 = b3.classList.contains('X')
    let x7 = c1.classList.contains('X')
    let x8 = c2.classList.contains('X')
    let x9 = c3.classList.contains('X')

    
    if(o1==true&&o1==o2&&o2==o3){linePos= 1; return 'o'}
    if(o4==true&&o4==o5&&o5==o6){linePos= 2; return 'o'}
    if(o7==true&&o7==o8&&o8==o9){linePos= 3; return 'o'}

    if(o1==true&&o1==o4&&o4==o7){linePos= 4; return 'o'}
    if(o2==true&&o2==o5&&o5==o8){linePos= 5; return 'o'}
    if(o3==true&&o3==o6&&o6==o9){linePos= 6; return 'o'}

    if(o1==true&&o1==o5&&o5==o9){linePos= 7;return 'o'}
    if(o3==true&&o3==o5&&o5==o7){linePos= 8; return 'o'}

    if(x1==true&&x1==x2&&x2==x3){linePos= 1; return 'x'}
    if(x4==true&&x4==x5&&x5==x6){linePos= 2; return 'x'}
    if(x7==true&&x7==x8&&x8==x9){linePos= 3; return 'x'}

    if(x1==true&&x1==x4&&x4==x7){linePos= 4; return 'x'}
    if(x2==true&&x2==x5&&x5==x8){linePos= 5; return 'x'}
    if(x3==true&&x3==x6&&x6==x9){linePos= 6; return 'x'}

    if(x1==true&&x1==x5&&x5==x9){linePos= 7; return 'x'}
    if(x3==true&&x3==x5&&x5==x7){linePos= 8; return 'x'}

}
let n = 0
//Clear Function
let clear = (n)=>{
            xmarka1.style.display = 'none'
            omarka1.style.display = 'none'
            omarka1.style.display = 'none' 
            xmarka1.style.display = 'none'
            xmarka2.style.display = 'none'
            omarka2.style.display = 'none'
            omarka2.style.display = 'none' 
            xmarka2.style.display = 'none'
            xmarka3.style.display = 'none'
            omarka3.style.display = 'none'
            omarka3.style.display = 'none' 
            xmarka3.style.display = 'none'
            xmarkb1.style.display = 'none'
            omarkb1.style.display = 'none'
            omarkb1.style.display = 'none' 
            xmarkb1.style.display = 'none'
            xmarkb2.style.display = 'none'
            omarkb2.style.display = 'none'
            omarkb2.style.display = 'none' 
            xmarkb2.style.display = 'none'
            xmarkb3.style.display = 'none'
            omarkb3.style.display = 'none'
            omarkb3.style.display = 'none' 
            xmarkb3.style.display = 'none'
            xmarkc1.style.display = 'none'
            omarkc1.style.display = 'none'
            omarkc1.style.display = 'none' 
            xmarkc1.style.display = 'none'
            xmarkc2.style.display = 'none'
            omarkc2.style.display = 'none'
            omarkc2.style.display = 'none' 
            xmarkc2.style.display = 'none'
            xmarkc3.style.display = 'none'
            omarkc3.style.display = 'none'        
            omarkc3.style.display = 'none' 
            xmarkc3.style.display = 'none'
    a1.classList.remove('O')
    a2.classList.remove('O')
    a3.classList.remove('O')
    b1.classList.remove('O')
    b2.classList.remove('O')
    b3.classList.remove('O')
    c1.classList.remove('O')
    c2.classList.remove('O')
    c3.classList.remove('O')

    a1.classList.remove('X')
    a2.classList.remove('X')
    a3.classList.remove('X')
    b1.classList.remove('X')
    b2.classList.remove('X')
    b3.classList.remove('X')
    c1.classList.remove('X')
    c2.classList.remove('X')
    c3.classList.remove('X')
    space = 1
    if(n==0){n=1}
    else if(n==1){n=0}
}

//Declare Which one start first (0=O)(1=X)


let page = document.querySelector('.page')
let choice = document.querySelector('.choice')
let obtn = document.querySelector('.circleSign')
let osign = obtn.querySelector('#circle')
let xbtn = document.querySelector('.crossSign')
let xsign = xbtn.querySelector('#cross')
let okbtn = choice.querySelector('#ok')
okbtn.disabled = true
let obtnA = ()=>{
    okbtn.disabled = false
    okbtn.style.opacity = '1'
    xbtn.classList.remove('crossSignA')
    obtn.classList.add('circleSignA')
    xsign.style.color = 'white'
    osign.style.color = 'orange'
}
let xbtnA = ()=>{
    okbtn.disabled = false
    okbtn.style.opacity = '1'
    obtn.classList.remove('circleSignA')
    xbtn.classList.add('crossSignA')
    osign.style.color = 'white'
    xsign.style.color = 'orange'
}

let chose = ()=>{
    let opt1 = obtn.classList.contains('circleSignA')
    page.style.filter = 'brightness(1)'
    setTimeout(() => {
        choice.style.display = 'none'
    }, 200);
    choice.classList.toggle('choice_close')
    if(opt1==true){
    n=0;
    toY()
    turn.classList.remove('xturn');
    turn.classList.add('oturn')}
    else {
        n=1
        toX();
        // setTimeout(() => {
            // choice.style.display = 'none'
        // }, 400);
        turn.classList.remove('oturn');
        turn.classList.add('xturn')}
}




let toX = () =>{
    otxt.style.opacity='0';
    otxt.style.translate='-400px'
    xtxt.style.opacity='1';
    xtxt.style.translate='0px';
}
let toY = () =>{
    xtxt.style.opacity='0';
    xtxt.style.translate='400px';
    otxt.style.opacity='1';
    otxt.style.translate='0'
}

//Point system
let pOp = document.querySelector('.pOp')
let pXp = document.querySelector('.pXp')
let pDp = document.querySelector('.pDp')
let space = 1
let ptsO = 0
let ptsX = 0
let ptsD = 0

//Declare Winner

let winMenu = document.querySelector('.winner-menu')
let winner = document.querySelector('.winner')
let declare = document.querySelector('.declare')
let againbtn = document.querySelector('.again')
let donebtn = document.querySelector('.done')


//Strike Line Animation
let lineh = document.querySelector('.lineh1')
let lineh2 = document.querySelector('.lineh2')
let lineh3 = document.querySelector('.lineh3')
let linev = document.querySelector('.linev')
let linev2 = document.querySelector('.linev2')
let linev3 = document.querySelector('.linev3')
let lined = document.querySelector('.lined')
let lined2 = document.querySelector('.lined2')

let addline =()=>{
    if(linePos==1){lineh.style.display='block'}
    if(linePos==2){lineh2.style.display='block'}
    if(linePos==3){lineh3.style.display='block'}
    if(linePos==4){linev.style.display='block'}
    if(linePos==5){linev2.style.display='block'}
    if(linePos==6){linev3.style.display='block'}
    if(linePos==7){lined.style.display='block'}
    if(linePos==8){lined2.style.display='block'}
}
let deline = ()=>{
    lineh.style.display='none'
    lineh2.style.display='none'
    lineh3.style.display='none'
    linev.style.display='none'
    linev2.style.display='none'
    linev3.style.display='none'
    lined.style.display='none'
    lined2.style.display='none'   
}

let restart = ()=>{
    clear()
    deline()
    ptsO = 0
    ptsX = 0
    ptsD = 0
    pOp.innerHTML=ptsO
    pXp.innerHTML=ptsO
    pDp.innerHTML=ptsO
    setTimeout(() => {
        winMenu.style.display = 'none'
    }, 200);
    winMenu.classList.add('choice_close')
    setTimeout(()=>{
        choice.style.display = 'block'
    },300)
    choice.classList.remove('choice_close')
    page.style.filter = 'brightness(0.5)'
}
let again = () =>{
    setTimeout(() => {     
        winMenu.style.display = 'none'
    }, 200);
    deline()
    winMenu.classList.add('choice_close')
    page.style.filter = 'brightness(1)'
    clear(n);
            if(n==0){
                turn.classList.remove('xturn');
                turn.classList.add('oturn')
                toY()
            }
            else if(n==1){
                turn.classList.remove('oturn');
                turn.classList.add('xturn')
                toX()
            }
}
let done = () => {
    setTimeout(() => {
        winMenu.style.display = 'none'
    }, 200);
    winMenu.classList.add('choice_close')
    page.style.filter = 'brightness(1)'

}
let checker = (n)=>{
    let res  = collect()
    if(n==1){
        turn.classList.remove('oturn');
        turn.classList.add('xturn')
        toX()
    }
    if(n==0){
        turn.classList.remove('xturn');
        turn.classList.add('oturn')
        toY()
    }
    if(res=='o'){
        ptsO+=1
        pOp.innerHTML=ptsO
        winMenu.classList.remove('choice_close')
        setTimeout(() => {
            page.style.filter = 'brightness(0.5)'
            winMenu.style.display = 'block'
            declare.innerHTML='Winner !'
            winner.innerHTML='Player O'            
        }, 620);
        addline()
    }
    else if(res=='x'){
        ptsX+=1
        pXp.innerHTML=ptsX
        winMenu.classList.remove('choice_close')
        setTimeout(() => {
            page.style.filter = 'brightness(0.5)'
            winMenu.style.display = 'block'
            declare.innerHTML='Winner !'
            winner.innerHTML='Player X'  
        }, 620);
        addline()
    }
    else if(space==9){
        ptsD += 1
        pDp.innerHTML=ptsD
        page.style.filter = 'brightness(0.5)'
        winMenu.classList.remove('choice_close')
        setTimeout(() => {
            winMenu.style.display = 'block'
            declare.innerHTML='Result !'
            winner.innerHTML='DRAW'
        }, 300);
    }
    space+=1
}

let a1a = () =>{
   if(n==0){
    markA1(n);
    
    a1.classList.add("O"); n=1;
    checker(n)}
   else if(n==1){
    markA1(n);
    a1.classList.add("X"); n=0
    checker(n)}
}
let a2a = () =>{
   if(n==0){
    markA2(n)
    a2.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markA2(n)
    a2.classList.add("X"); n=0
    checker(n)}
}
let a3a = () =>{
   if(n==0){
    markA3(n)
    a3.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markA3(n)
    a3.classList.add("X"); n=0
    checker(n)}
}
let b1a = () =>{
   if(n==0){
    markB1(n)
    b1.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markB1(n)
    b1.classList.add("X"); n=0
    checker(n)}
}
let b2a = () =>{
   if(n==0){
    markB2(n)
    b2.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markB2(n)
    b2.classList.add("X"); n=0
    checker(n)}
}
let b3a = () =>{
   if(n==0){
    markB3(n)
    b3.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markB3(n)
    b3.classList.add("X"); n=0
    checker(n)}
}
let c1a = () =>{
   if(n==0){
    markC1(n)
    c1.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markC1(n)
    c1.classList.add("X"); n=0
    checker(n)}
}
let c2a = () =>{
   if(n==0){
    markC2(n)
    c2.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markC2(n)
    c2.classList.add("X"); n=0
    checker(n)}
}
let c3a = () =>{
   if(n==0){
    markC3(n)
    c3.classList.add("O"); n=1
    checker(n)}
   else if(n==1){
    markC3(n)
    c3.classList.add("X"); n=0
    checker(n)}
}

a1.addEventListener('click',()=>a1a())
a2.addEventListener('click',()=>a2a())
a3.addEventListener('click',()=>a3a())
b1.addEventListener('click',()=>b1a())
b2.addEventListener('click',()=>b2a())
b3.addEventListener('click',()=>b3a())
c1.addEventListener('click',()=>c1a())
c2.addEventListener('click',()=>c2a())
c3.addEventListener('click',()=>c3a())

obtn.addEventListener('click',()=>obtnA())
xbtn.addEventListener('click',()=>xbtnA())


