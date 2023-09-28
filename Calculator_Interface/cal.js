let arr = []

function can(){
    document.getElementById("num").innerHTML = 0
    document.getElementById("sym").innerHTML = ""
    arr = []  
    res = 0
    pend = 0
    verify = 0
    p=0
    s=0
    d=0
    m=0
    document.getElementById("minus").style.opacity = "1"
    document.getElementById("multiply").style.opacity = "1"
    document.getElementById("divide").style.opacity = "1"
    document.getElementById("plus").style.opacity = "1"
    document.getElementById("pbtn").disabled = false
    document.getElementById("sbtn").disabled = false
    document.getElementById("mbtn").disabled = false
    document.getElementById("dbtn").disabled = false
    document.getElementById("backbtn").style.opacity = "1"  
    document.getElementById("backbtn").disabled = false
      
}
function buffer(){
    document.getElementById("num").innerHTML = 0
    arr = []  
}
function nine(){
        arr.push(9)
        document.getElementById("num").innerHTML = arr.join("")
}
function eight(){
    arr.push(8)
    document.getElementById("num").innerHTML = arr.join("")
}
function seven(){
    arr.push(7)
    document.getElementById("num").innerHTML = arr.join("")
}
function six(){
    arr.push(6)
    document.getElementById("num").innerHTML = arr.join("")
}
function five(){
    arr.push(5)
    document.getElementById("num").innerHTML = arr.join("")
}
function four(){
    arr.push(4)
    document.getElementById("num").innerHTML = arr.join("")
}
function three(){
    arr.push(3)
    document.getElementById("num").innerHTML = arr.join("")
}
function two(){
    arr.push(2)
    document.getElementById("num").innerHTML = arr.join("")
}
function one(){
    arr.push(1)
    document.getElementById("num").innerHTML = arr.join("")
}
function zero(){
    arr.push(0)
    document.getElementById("num").innerHTML = arr.join("")
}
function dot(){
    arr.push(".")
    document.getElementById("num").innerHTML = arr.join("")
}
function keep(){
    if(verify==1){
        buffer() 
    }
    else{
        pend = parseFloat(arr.join(""))
        buffer()
    }
}
let pend
let res,verify
let p,s,m,d
function plus(){
    p=1
    keep()
    document.getElementById("num").innerHTML = 0
    document.getElementById("sym").innerHTML = pend.toString() + " + "
    document.getElementById("plus").style.opacity = "0.5"
    document.getElementById("pbtn").disabled = true

    document.getElementById("backbtn").style.opacity = "1"        
    document.getElementById("backbtn").disabled = false
}  
function sub(){
    s=1
    keep()
    document.getElementById("num").innerHTML = 0
    document.getElementById("sym").innerHTML = pend.toString() + " - "
    document.getElementById("minus").style.opacity = "0.5"
    document.getElementById("sbtn").disabled = true

    document.getElementById("backbtn").style.opacity = "1"        
    document.getElementById("backbtn").disabled = false
}
function mul(){
    m=1
    keep()
    document.getElementById("num").innerHTML = 0
    document.getElementById("sym").innerHTML = pend.toString() + " x "
    document.getElementById("multiply").style.opacity = "0.5"
    document.getElementById("mbtn").disabled = true

    document.getElementById("backbtn").style.opacity = "1"        
    document.getElementById("backbtn").disabled = false

}  
function div(){
    d=1
    keep()
    document.getElementById("num").innerHTML = 0
    document.getElementById("sym").innerHTML = pend.toString() + " / "
    document.getElementById("divide").style.opacity = "0.5"
    document.getElementById("dbtn").disabled = true

    document.getElementById("backbtn").style.opacity = "1"        
    document.getElementById("backbtn").disabled = false

} 
function back(){
    arr.pop()
    document.getElementById("num").innerHTML = arr.join("")
}

function eql(){
    if(p==1){
        document.getElementById("sym").innerHTML = pend.toString()+(" + ")+arr.join("")+" = "
        res = pend + parseFloat(arr.join(""))
        document.getElementById("num").innerHTML = res
        pend = res
        verify=1
        document.getElementById("minus").style.opacity = "0.5"
        document.getElementById("multiply").style.opacity = "0.5"
        document.getElementById("divide").style.opacity = "0.5"
        document.getElementById("plus").style.opacity = "1"
        document.getElementById("dbtn").disabled = true
        document.getElementById("sbtn").disabled = true
        document.getElementById("mbtn").disabled = true
        document.getElementById("pbtn").disabled = false
        
        document.getElementById("backbtn").style.opacity = "0.5"        
        document.getElementById("backbtn").disabled = true
    }
    if(s==1){
        document.getElementById("sym").innerHTML = pend.toString()+(" - ")+arr.join("")+" = "
        res = pend - parseFloat(arr.join(""))
        document.getElementById("num").innerHTML = res
        pend = res
        verify=1
        document.getElementById("multiply").style.opacity = "0.5"
        document.getElementById("divide").style.opacity = "0.5"
        document.getElementById("plus").style.opacity = "0.5"
        document.getElementById("minus").style.opacity = "1"
        document.getElementById("dbtn").disabled = true
        document.getElementById("mbtn").disabled = true
        document.getElementById("pbtn").disabled = true
        document.getElementById("sbtn").disabled = false

        document.getElementById("backbtn").style.opacity = "0.5"        
        document.getElementById("backbtn").disabled = true
    }
    if(m==1){
        document.getElementById("sym").innerHTML = pend.toString()+(" x ")+arr.join("")+" = "
        res = pend * parseFloat(arr.join(""))
        document.getElementById("num").innerHTML = res
        pend = res
        verify=1
        document.getElementById("minus").style.opacity = "0.5"
        document.getElementById("divide").style.opacity = "0.5"
        document.getElementById("plus").style.opacity = "0.5"
        document.getElementById("multiply").style.opacity = "1"
        document.getElementById("dbtn").disabled = true
        document.getElementById("pbtn").disabled = true
        document.getElementById("sbtn").disabled = true     
        document.getElementById("mbtn").disabled = false

        document.getElementById("backbtn").style.opacity = "0.5"        
        document.getElementById("backbtn").disabled = true
   

    }
    if(d==1){
        document.getElementById("sym").innerHTML = pend.toString()+(" / ")+arr.join("")+" = "
        res = pend / parseFloat(arr.join(""))
        if(pend % parseFloat(arr.join(""))==0){
            document.getElementById("num").innerHTML = res
        }
        else{
            document.getElementById("num").innerHTML = res.toFixed(2)
        }
        pend = res.toFixed(2)
        verify=1
        document.getElementById("minus").style.opacity = "0.5"
        document.getElementById("multiply").style.opacity = "0.5"
        document.getElementById("plus").style.opacity = "0.5"
        document.getElementById("divide").style.opacity = "1"
        document.getElementById("pbtn").disabled = true
        document.getElementById("sbtn").disabled = true
        document.getElementById("mbtn").disabled = true
        document.getElementById("dbtn").disabled = false

        document.getElementById("backbtn").style.opacity = "0.5"        
        document.getElementById("backbtn").disabled = true

    }
}