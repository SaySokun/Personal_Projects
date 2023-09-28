let next = document.querySelector('.arrowNext')
let prev = document.querySelector('.arrowBack')
let show = document.querySelector('.show')
let seq = 0
let pre = 0
let move = 0

prev.style.opacity = '0'
let sequal = ()=>{
    if(seq<=2){
        seq+=1
        move += -780
        prev.style.opacity='1'
        show.style.transform = `translateX(${move}px)`
    }
    if(seq==3){
        next.style.opacity='0'
    }
}
let prequal = ()=>{
    if(seq>0){
        seq-=1
        move += 780
        next.style.opacity='1'
        show.style.transform = `translateX(${move}px)`
    } 
    if(seq==0){
        prev.style.opacity='0'
    }  
}

// let th1 = document.querySelector('.th1')
// let th2 = document.querySelector('.th2')
// let th3 = document.querySelector('.th3')
// let nd1 = document.querySelector('.nd1')
// let nd2 = document.querySelector('.nd2')
// let st = document.querySelector('.st')

// let rightArr = () => {
    
// }
let forward = 0
let backward = 0
let tran = 0
let podC = document.querySelector('.protect')
let pForwardbtn = document.querySelector('.podNext')
let pBackwardbtn = document.querySelector('.podBack')
pBackwardbtn.style.opacity='0'
let pF = ()=>{
    if(forward<=2){
        forward+=1
        tran += -1230
        pBackwardbtn.style.opacity='1'
        podC.style.transform = `translateX(${tran}px)`
    }
    if(forward==3){
        pForwardbtn.style.opacity='0'
    }
}
let pB = ()=>{
    if(forward>0){
        forward-=1
        tran += 1230
        pForwardbtn.style.opacity='1'
        podC.style.transform = `translateX(${tran}px)`
    }
    if(forward==0){
        pBackwardbtn.style.opacity='0'
    }
}

