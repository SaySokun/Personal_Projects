let bgimg = document.querySelector('.bgimg')
let char = document.querySelector('.char')
let t15 = document.querySelector('.t15')
let t30 = document.querySelector('.t30')
let t60 = document.querySelector('.t60')
let t120 = document.querySelector('.t120')
let count = document.querySelector('.count')
let menu = document.querySelector('.menuWrap')
let dasharea = document.querySelector('.dasharea')
let bokerthy = document.querySelector('.bokerthy')
let Gty = document.querySelector('.Gty')
let menuT = document.querySelector('.menuT')
let dashT = document.querySelector('.dashT')
let menuG = document.querySelector('.menuG')
let midWrap = document.querySelector('.midwrap')
let dashG = document.querySelector('.dashG')
let left = document.querySelector('.left_arrow')
let right = document.querySelector('.right_arrow')
let box = document.querySelector('.box')
let point = document.querySelector('.point')
let modeMenu = document.querySelector('.modeWrap')

// Pauce Menu
let pauceMenu = document.querySelector('.pauceWrap')
let resume = document.querySelector('.res')
let restart = document.querySelector('.restart')
let state = document.querySelector('.state')
let pauce = document.querySelector('.pauceArea')

//State Menu
let staRestart = document.querySelector('.staRestart')
let staResume = document.querySelector('.staResume')
let staBack = document.querySelector('.staBack')
let stateMenu = document.querySelector('.stateWrap')

let time_used = document.querySelector('.time_used')
let total_point = document.querySelector('.total_point')
let avg_speed = document.querySelector('.avg_speed')
let total_time = document.querySelector('.total_time')
let mainmenu = document.querySelector('.mainmenu')
let staNav = document.querySelector('.sn')

//Mode Menu
let mode1 = document.querySelector('.mode1')
let mode2 = document.querySelector('.mode2')


let gameEnd = 0
let ver = 1
let run = 0
let timeSelect=0
let pts = 0 
let timecheck = 0
let mode = 0

// Async
let timer = (ms)=>{
    return new Promise((resolve,reject)=>{
        if(gameEnd!=1){setTimeout(() => {
            resolve(down)
        }, ms);}
        else{
            reject()
        }
    })
}
let timep=0

async function down(time){
    try{
        timecheck = nonstop()
        if(timecheck===0){
        while(time>=0&&run===1){
            await timer(1000)
            timep = time;
            count.innerHTML=`${timep}s`
            time--
        }
        if(time<0){ 
            gameEnd=1
            gameover()
        }
       }
       else{
        while(time>=0&&run===1){
            await timer(1000)
            timep = time;
            count.innerHTML=`${timep}s`
            time++
        }
       }
    }   
    catch{
        showstate()
    }
    }


let reclass = ()=>{
    box.classList.remove('T-spin')
    box.classList.remove('T-shake')
    box.classList.remove('T-zoom')
    box.classList.remove('T-mix')
    box.classList.remove('T-side')
    box.classList.remove('T-hue')
    box.classList.remove('T-str')
    box.classList.remove('T-str2')
}
let retime_select = ()=>{
    t15.classList.remove('time-select')
    t30.classList.remove('time-select')
    t60.classList.remove('time-select')
    t120.classList.remove('time-select')
}
let dashpopup = ()=>{
    dasharea.style.display = 'flex'
    dasharea.style.scale = '0.8'
    dasharea.style.opacity = '1'
    bgimg.style.filter='brightness(1)'
    point.innerHTML=pts
    if(p!=1){
        count.innerHTML=timeSelect+'s'
    }
    else{
        count.innerHTML=timep+1+'s'
    }
}


let ani = (value)=>{
    
    if(value===0){
        reclass()
        box.classList.add('T-spin')
        
    }
    else if(value===1){
        reclass()
        box.classList.add('T-shake')
       
    }  
    else if(value===2){
        reclass()
        box.classList.add('T-zoom')  
    }
    else if(value===3){
        reclass()
        box.classList.add('T-mix') 
    }
    else if(value===4){
        reclass()
        box.classList.add('T-side') 
    }
    else if(value===5){
        reclass()
        box.classList.add('T-hue') 
    }
    else if(value===6){
        reclass()
        box.classList.add('T-str') 
    }
    else if(value===7){
        reclass()
        box.classList.add('T-str2') 
    }
}

mode1.addEventListener('click', ()=>{
    mode1.classList.add('selected')
    mode2.classList.remove('selected')
    mode = 1
    removeall()
    setTimeout(() => {
        menu.style.display='flex'
    }, 350);
    menu.style.scale='1'
    t15.innerHTML='15s'
    t30.innerHTML='30s'
    t60.innerHTML='60s'
    t120.innerHTML='120s'
})
mode2.addEventListener('click', ()=>{
    mode1.classList.remove('selected')
    mode2.classList.add('selected')
    mode = 2
    removeall() 
    setTimeout(() => {
        menu.style.display='flex'
    }, 350);
    menu.style.scale='1' 
    t15.innerHTML='x10'
    t30.innerHTML='x20'
    t60.innerHTML='x30'
    t120.innerHTML='x60'
})

let move = ()=>{
    ani(Math.floor(Math.random()*8))
    
    bokerthy.style.filter = `hue-rotate(${Math.random()*361}deg)`
    Gty.style.filter = `hue-rotate(${Math.random()*361}deg)`
    box.style.top = `${Math.floor(Math.random()*90)}vh`
    box.style.left = `${Math.floor(Math.random()*90)}vw`
    box.style.bottom = `${Math.floor(Math.random()*90)}vh`
    box.style.right = `${Math.floor(Math.random()*90)}vw`
    pts++
    point.innerHTML=pts
}
let p = 0
let Pauce = ()=>{
    run = 0
    p=1
    pauceMenu.style.display = 'flex' 
    setTimeout(() => {
        pauceMenu.style.opacity = '1'  
    }, 1); 
}
let Restart = ()=>{
    p = 0
    run = 0
    timep = 0
    pts = 0
    gameEnd = 0
    reclass()
    // mainmenu.style.display = 'none'
    // staNav.style.display = 'flex'
    box.style.top = '10px'
    box.style.left = '10px'
    pauceMenu.style.display = 'none'
    dasharea
    setTimeout(() => {
        modeMenu.style.scale = '1'
    }, 10);
    modeMenu.style.display = 'flex'
    dasharea.style.display = 'none'
    dasharea.style.scale = '0'
    dasharea.style.opacity = '0'
    bgimg.style.filter='brightness(0.5)'
    
}

let gameovertxt = document.querySelector('.overtxt')
let gameover = ()=>{
    mainmenu.classList.add('flex')
    pauceMenu.style.display='none'
    stateMenu.style.display='flex'
    staNav.style.display = 'none'
    mainmenu.style.display = 'flex'
    setTimeout(() => {       
        stateMenu.style.scale='1'
    }, 1);
    gameovertxt.innerHTML = 'GameOver'
    time_used.innerHTML = timeSelect-timep+'s'
    total_point.innerHTML = 'x'+pts
    avg_speed.innerHTML = (pts/(timeSelect-timep)).toFixed(1)+' catch/s'
    total_time.innerHTML = timeSelect+'s'    
}

let change = ()=>{
    if(bokerthy.classList.contains('imgActive')){
        char.innerHTML='TheTree'
        bokerthy.classList.remove('imgActive')
        dashT.classList.remove('imgActive')
        menuT.classList.remove('imgActive')
        menuT.classList.remove('imgActive')

        menuG.classList.add('imgActive')
        Gty.classList.add('imgActive')
        dashG.classList.add('imgActive')
        midWrap.style.transform = 'translateY(-4rem)'
        
    }
    else if(Gty.classList.contains('imgActive')){
        char.innerHTML='Bokerthy'
        Gty.classList.remove('imgActive')
        dashG.classList.remove('imgActive')
        menuG.classList.remove('imgActive')

        menuT.classList.add('imgActive')
        bokerthy.classList.add('imgActive')
        menuT.classList.add('imgActive')
        dashT.classList.add('imgActive')
        midWrap.style.transform = 'translateY(0rem)'
    }
}
let removeall = ()=>{
    menu.style.scale = '0'
    stateMenu.style.scale = '0'
    modeMenu.style.scale = '0'
    pauceMenu.style.opacity = '0' 
    dasharea.style.opacity = '0'
    bgimg.style.filter = 'brightness(0.5)'
    setTimeout(()=>{
        menu.style.display='none'
        stateMenu.style.display='none'
        pauceMenu.style.display='none'
        dasharea.style.display = 'none'
        modeMenu.style.display='none'
    },301)
}

let showstate = ()=>{
        gameovertxt.innerHTML = '- State -'
        pauceMenu.style.display='none'
        stateMenu.style.display='flex'
        setTimeout(() => {       
            stateMenu.style.scale='1'
        }, 1);
        time_used.innerHTML = timeSelect-timep+'s'
        total_point.innerHTML = 'x'+pts
        avg_speed.innerHTML = (pts/(timeSelect-timep)).toFixed(1)+' catch/s'
        total_time.innerHTML = timeSelect+'s'
}

let start = (Time)=>{
    run = 1
    setTimeout(() => {
        menu.style.display = 'none'
        pauceMenu.style.display = 'none'
    }, 300);
    menu.style.scale = '0'
    pauceMenu.style.opacity = '0'
    dashpopup()
    down(Time)
}



left.addEventListener('click',()=>{
    change()
})
right.addEventListener('click', ()=>{
    change()
})

box.addEventListener("click",()=>{move()})
box.addEventListener("mouseover",()=>{move()})

let t1 = 0, t2=0, t3=0, t4=0
let nonstop = ()=>{
    if(t15.classList.contains('time-select')==true){t1 = 1}
    else{t1 = 0}

    if(t30.classList.contains('time-select')==true){t2 = 1}
    else{t2 = 0}

    if(t60.classList.contains('time-select')==true){t3 = 1}
    else{t3 = 0}

    if(t120.classList.contains('time-select')==true){t4 = 1}
    else{t4 = 0}

    if(t1===0&&t2===0&&t3===0&&t4===0){
        return 1
    }
    else {
        return 0
    }

}

t15.addEventListener('click',()=>{
    retime_select()
    t15.classList.toggle('time-select')
    timeSelect=15
})
t30.addEventListener('click',()=>{
    retime_select()
    t30.classList.toggle('time-select')
    timeSelect=30
})
t60.addEventListener('click',()=>{
    retime_select()
    t60.classList.toggle('time-select')
    timeSelect=60
})
t120.addEventListener('click',()=>{
    retime_select()
    t120.classList.toggle('time-select')
    timeSelect=120
})

pauce.addEventListener('click', ()=>{
    Pauce()
})
resume.addEventListener('click', ()=>{
    start(timep)
})
restart.addEventListener('click', ()=>{
    Restart()
})
state.addEventListener('click', ()=>{
    showstate()
})


staRestart.addEventListener('click',()=>{
    setTimeout(() => {
        stateMenu.style.display = 'none'
    }, 200);
    stateMenu.style.scale = '0'
    Restart()
})
staResume.addEventListener('click',()=>{
    setTimeout(() => {
        stateMenu.style.display = 'none'
    }, 200);
    stateMenu.style.scale = '0'
    start(timep)
})
staBack.addEventListener('click',()=>{
    setTimeout(() => {
        stateMenu.style.display = 'none'
    }, 200);
    stateMenu.style.scale = '0'
    Pauce()
})
mainmenu.addEventListener('click',()=>{
    mainmenu.style.display = 'none'
    staNav.style.display = 'flex'
    stateMenu.style.display = 'none'
    Restart()
})