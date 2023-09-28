let display = document.querySelector('.display')
let startbtn = document.querySelector('.startbtn')
let resetbtn = document.querySelector('.resetbtn')
let ms = 0
let s = 0
let mn = 0
let t = (time)=>{
    return new Promise((ok,no)=>{
        setTimeout(() => {
            ok(process)
        }, time);
    })
}
let run = ()=>{
    startbtn.innerHTML = 'STOP'
    startbtn.style.color = 'brown'
    resetbtn.disabled = 1
    resetbtn.style.opacity = '0.5'
}
let pause = ()=>{
    startbtn.innerHTML = 'START'
    startbtn.style.color = 'White'
    resetbtn.style.opacity = '1'
    resetbtn.disabled = 0
}


async function process(){
    while(display.classList.contains('active')){
        
        if(mn===0){
            await t(10)
            ms+=1
        if(ms<10&&s<10&&ms<=99){
            display.innerHTML = `0${s}:0${ms}`
        }
        else if(ms<10&&s>=10&&ms<=99){
            display.innerHTML = `${s}:0${ms}`
        }
        else if(ms>=10&&s<10&&ms<=99){
            display.innerHTML = `0${s}:${ms}`
        }
        else if(ms>=10&&s>=10&&ms<=99){
            display.innerHTML = `${s}:${ms}`
        }
        else if(ms>99&&s<10){
            ms=0
            s++
            display.innerHTML = `0${s}:0${ms}`
        }
        else if(ms>99&&s>=10){
            ms=0
            s++
            if(s>59){
                s=0
                mn++
                display.innerHTML = `0${mn}:0${s}`
            }
            else{
                display.innerHTML = `${s}:0${ms}`
            }
            } 
        }
        else{
            await t(1000)
            s+=1
            if(s<10&&mn<10&&s<60){
                display.innerHTML = `0${mn}:0${s}`
            }
            else if(s<10&&mn>=10&&s<60){
                display.innerHTML = `${mn}:0${s}`
            }
            else if(s>=10&&mn<10&&s<60){
                display.innerHTML = `0${mn}:${s}`
            }
            else if(s>=10&&mn>=10&&s<60){
                display.innerHTML = `${mn}:${s}`
            }
            else if(s>59&&mn<10){
                s=0
                mn++
                display.innerHTML = `0${mn}:0${s}`
            }
            else if(s>59&&mn>=10){
                s=0
                mn++
                display.innerHTML = `${mn}:0${s}`
                }
            }
    }
}
let start = ()=>{
    display.classList.toggle('active')
    if(display.classList.contains('active')){
            run()
            process()
        }
    else{
        pause()
    }
}
let reset  = ()=>{
    display.classList.remove('active')
    display.innerHTML = '00:00'
    ms=0
    s=0
    mn=0
}