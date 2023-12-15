if(window.innerWidth>=1000){
let opt1 = document.querySelector(".opt1");
let opt2 = document.querySelector(".opt2");
let opt3 = document.querySelector(".opt3");
let monitor = document.querySelector(".monitor");
let display1 = document.querySelector(".display1");
let display2 = document.querySelector(".display2");
let display3 = document.querySelector(".display3");
let startbtn = document.querySelector(".startbtn");
let pausebtn = document.querySelector(".pausebtn");
let restartbtn = document.querySelector(".restartbtn");
let proTxt = document.querySelector(".provinceTxt");
let needle = document.querySelector(".needle");
let statRestartbtn = document.querySelector(".statRestartbtn");
let statDonebtn = document.querySelector(".statDonebtn");
let needlepng  = document.querySelector(".needlepng");
let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");
let bg3 = document.querySelector(".bg3");
let BackGround = document.querySelector(".BackGround");
let dis1Wrap = document.querySelector(".dis1Wrap");
let finishedPopup = document.querySelector(".finishedPopup");
let leftArrow = document.querySelector(".arrowLeft");
let rightArrow = document.querySelector(".arrowRight");
// Assign all the Province ID
let rotanak = document.querySelector("#KHM1795");
let mondol = document.querySelector("#KHM1794");
let kratie = document.querySelector("#KHM1793");
let svay = document.querySelector("#KHM1801");
let prey = document.querySelector("#KHM1790");
let kandal = document.querySelector("#KHM1786");
let takev = document.querySelector("#KHM1802");
let kampot = document.querySelector("#KHM1797");
let oudor = document.querySelector("#KHM1782");
let preah = document.querySelector("#KHM1791");
let siem = document.querySelector("#KHM1781");
let banteay = document.querySelector("#KHM1777");
let koh = document.querySelector("#KHM1779");
let pusat = document.querySelector("#KHM1780");
let bat = document.querySelector("#KHM1778");
let pailin = document.querySelector("#KHM1783");
let steng = document.querySelector("#KHM1792");
let siha = document.querySelector("#KHM1800");
let kep = document.querySelector("#KHM1798");
let chnang = document.querySelector("#KHM1785");
let thum = document.querySelector("#KHM1788");
let spe = document.querySelector("#KHM1787");
let phnom = document.querySelector("#KHM1789");
let cham = document.querySelector("#KHM1784");
let tboung = document.querySelector("#KHM1803");

let rotanakPic = document.querySelector(".rotanakPic");
let mondolPic = document.querySelector(".mondolPic");
let kratiePic = document.querySelector(".kratiePic");
let svayPic = document.querySelector(".svayPic");
let preyPic = document.querySelector(".preyPic");
let kandalPic = document.querySelector(".kandalPic");
let takevPic = document.querySelector(".takevPic");
let kampotPic = document.querySelector(".kampotPic");
let oudorPic = document.querySelector(".oudorPic");
let preahPic = document.querySelector(".preahPic");
let siemPic = document.querySelector(".siemPic");
let banteayPic = document.querySelector(".banteayPic");
let kohPic = document.querySelector(".kohPic");
let pusatPic = document.querySelector(".pusatPic");
let batPic = document.querySelector(".batPic");
let pailinPic = document.querySelector(".pailinPic");
let stengPic = document.querySelector(".stengPic");
let sihaPic = document.querySelector(".sihaPic");
let kepPic = document.querySelector(".kepPic");
let chnangPic = document.querySelector(".chnangPic");
let thumPic = document.querySelector(".thumPic");
let spePic = document.querySelector(".spePic");
let phnomPic = document.querySelector(".phnomPic");
let chamPic = document.querySelector(".chamPic");
let tboungPic = document.querySelector(".tboungPic");


//Pointing System
let gTracker = document.querySelector(".gTracker")
let yTracker = document.querySelector(".yTracker")
let rTracker = document.querySelector(".rTracker")
let gBar = document.querySelector(".greenBar");
let yBar = document.querySelector(".yellowBar");
let rBar = document.querySelector(".redBar");

let theMap = document.querySelector(".theMap")
//ProPic
let proPic = document.querySelector(".proPic")
let bigCompass = document.querySelector(".bigCompass")
const sym = document.querySelectorAll(".sym")




for(let i=0;i<sym.length;i++){
  sym[i].addEventListener("click",()=>{
    sym[i].classList.toggle("symZoom")
  })
}

let removeActive = ()=>{
    opt1.classList.remove("optActive");
    opt2.classList.remove("optActive");
    opt3.classList.remove("optActive");
}
let removeDisplay = ()=>{
   bigCompass.style.display = "none"
   proPic.style.display = "none"
   theMap.classList.remove("theMapHard")
   proTxt.classList.remove("MProTxtH")


}
let showDisplay = ()=>{
    if(opt1.classList.contains("optActive")){
      bigCompass.style.display = "block"
    }
    else if(opt2.classList.contains("optActive")){
      proPic.style.display = "block"
    }
    else if(opt3.classList.contains("optActive")){
      bigCompass.style.display = "block"
      theMap.classList.add("theMapHard")
    }
}

let totalNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let currentNum = [];
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


//Background Changer
let cValue = 0;
leftArrow.addEventListener("click",()=>{
    // if(cValue<1550){
    //     cValue = cValue + xValue;
    //     BackGround.style.transform = `translateX(${cValue}px)`;
    // }
    if(cValue>-1){
        cValue--
    }
    if(cValue===0){
        bg1.style.display = "none"
        bg2.style.display = "block"
        bg3.style.display = "none"
        rightArrow.style.opacity = "1";
        leftArrow.style.opacity = "1";
    }
    if(cValue===-1){
        leftArrow.style.opacity = "0.2";
        bg1.style.display = "block"
        bg2.style.display = "none"
        bg3.style.display = "none"
    }
})
rightArrow.addEventListener("click",()=>{
    // if(cValue>-1550){
    //     cValue = cValue - xValue;
    //     BackGround.style.transform = `translateX(${cValue}px)`;
    // }
    if(cValue<1){
        cValue++
    }
    if(cValue===0){
        bg1.style.display = "none"
        bg2.style.display = "block"
        bg3.style.display = "none"
        rightArrow.style.opacity = "1";
        leftArrow.style.opacity = "1";
    }
    if(cValue===1){
        rightArrow.style.opacity = "0.2";
        bg1.style.display = "none"
        bg2.style.display = "none"
        bg3.style.display = "block"
    }
})



opt1.addEventListener("click", ()=>{
    restart2();
    if(opt1.classList.contains("optActive")){
       removeDisplay();
       opt1.classList.remove("optActive");
    }
    else{
        removeActive();
        removeDisplay();
        opt1.classList.add("optActive");
        display1.style.display = "flex";
        showDisplay();
    }
})
opt2.addEventListener("click", ()=>{
    restart2();
    if(opt2.classList.contains("optActive")){
        removeDisplay();
        
        opt2.classList.remove("optActive");
    }
     else{
         removeActive();
         removeDisplay();
         opt2.classList.add("optActive");
         showDisplay();
     }
})
opt3.addEventListener("click", ()=>{
    restart2();
    if(opt3.classList.contains("optActive")){
        removeDisplay();
        opt3.classList.remove("optActive");
     }
     else{
        removeActive();
        removeDisplay();
        opt3.classList.add("optActive");
        proTxt.classList.add("MProTxtH")
        showDisplay();
     }
})


let greenPoint = 0
let yellowPoint = 0
let redPoint = 0
let updateTxt = ()=>{
  if(opt1.classList.contains("optActive")||opt3.classList.contains("optActive")){
      tmp = currentNum[index];
        switch(tmp){
            case 1: proTxt.innerHTML="រតនគីរី";break;
            case 2: proTxt.innerHTML="មណ្ឌលគីរី"; break;
            case 3: proTxt.innerHTML="ក្រចេះ"; break;
            case 4: proTxt.innerHTML="ស្វាយរៀង"; break;
            case 5: proTxt.innerHTML="ព្រៃវែង"; break;
            case 6: proTxt.innerHTML="កណ្តាល"; break;
            case 7: proTxt.innerHTML="តាកែវ"; break;
            case 8: proTxt.innerHTML="កំពត"; break;
            case 9: proTxt.innerHTML="ឧត្តរមានជ័យ"; break;
            case 10: proTxt.innerHTML="ព្រះវិហារ"; break;
            case 11: proTxt.innerHTML="សៀមរាប"; break;
            case 12: proTxt.innerHTML="បន្ទាយមានជ័យ"; break;
            case 13: proTxt.innerHTML="កោះកុង"; break;
            case 14: proTxt.innerHTML="ពោធិ៍សាត់"; break;
            case 15: proTxt.innerHTML="បាត់ដំបង"; break;
            case 16: proTxt.innerHTML="ប៉ៃលិន"; break;
            case 17: proTxt.innerHTML="ស្ទឹងត្រែង"; break;
            case 18: proTxt.innerHTML="ព្រះសីហនុ"; break;
            case 19: proTxt.innerHTML="កែប"; break;
            case 20: proTxt.innerHTML="កំពង់ឆ្នាំង"; break;
            case 21: proTxt.innerHTML="កំពង់ធំ"; break;
            case 22: proTxt.innerHTML="កំពង់ស្ពី"; break;
            case 23: proTxt.innerHTML="ភ្នំពេញ"; break;
            case 24: proTxt.innerHTML="កំពង់ចាម"; break;
            case 25: proTxt.innerHTML="ត្បូងឃ្មុំ"; break;
            default: break;
        }
        index++;
      }
  else if (opt2.classList.contains("optActive")){
      tmp = currentNum[index];
      removePic();
      proTxt.innerHTML="Province of Cambodia"
      switch(tmp){
        case 1: rotanakPic.style.display = "block"; break;
        case 2: mondolPic.style.display = "block"; break;
        case 3: kratiePic.style.display = "block"; break;
        case 4: svayPic.style.display = "block"; break;
        case 5: preyPic.style.display = "block"; break;
        case 6: kandalPic.style.display = "block"; break;
        case 7: takevPic.style.display = "block"; break;
        case 8: kampotPic.style.display = "block"; break;
        case 9: oudorPic.style.display = "block"; break;
        case 10: preahPic.style.display = "block"; break;
        case 11: siemPic.style.display = "block"; break;
        case 12: banteayPic.style.display = "block"; break;
        case 13: kohPic.style.display = "block"; break;
        case 14: pusatPic.style.display = "block"; break;
        case 15: batPic.style.display = "block"; break;
        case 16: pailinPic.style.display = "block"; break;
        case 17: stengPic.style.display = "block"; break;
        case 18: sihaPic.style.display = "block"; break;
        case 19: kepPic.style.display = "block"; break;
        case 20: chnangPic.style.display = "block"; break;
        case 21: thumPic.style.display = "block"; break;
        case 22: spePic.style.display = "block"; break;
        case 23: phnomPic.style.display = "block"; break;
        case 24: chamPic.style.display = "block"; break;
        case 25: tboungPic.style.display = "block"; break;
          default: break;
      }    
      index++;
    }
        if(index>25){
            index = 0;
            proTxt.innerHTML = "End"
            needlepng.classList.remove("needlespin")
            timePause();
            popupOn();
            removePic();
        }
    console.log(tmp);
    gTracker.innerHTML=greenPoint;
    yTracker.innerHTML=yellowPoint;
    rTracker.innerHTML=redPoint;

    gBar.style.width = `${greenPoint*3.6}%`
    yBar.style.width = `${yellowPoint*3.6}%`
    rBar.style.width = `${redPoint*3.6}%`
}
// let updatePic = ()=>{
//   removePic();
//   tmp = currentNum[index];
//       switch(tmp){
//         case 1: rotanakPic.style.display = "block"; break;
//         case 2: mondolPic.style.display = "block"; break;
//         case 3: kratiePic.style.display = "block"; break;
//         case 4: svayPic.style.display = "block"; break;
//         case 5: preyPic.style.display = "block"; break;
//         case 6: kandalPic.style.display = "block"; break;
//         case 7: takevPic.style.display = "block"; break;
//         case 8: kampotPic.style.display = "block"; break;
//         case 9: oudorPic.style.display = "block"; break;
//         case 10: preahPic.style.display = "block"; break;
//         case 11: siemPic.style.display = "block"; break;
//         case 12: banteayPic.style.display = "block"; break;
//         case 13: kohPic.style.display = "block"; break;
//         case 14: pusatPic.style.display = "block"; break;
//         case 15: batPic.style.display = "block"; break;
//         case 16: pailinPic.style.display = "block"; break;
//         case 17: stengPic.style.display = "block"; break;
//         case 18: sihaPic.style.display = "block"; break;
//         case 19: kepPic.style.display = "block"; break;
//         case 20: chnangPic.style.display = "block"; break;
//         case 21: thumPic.style.display = "block"; break;
//         case 22: spePic.style.display = "block"; break;
//         case 23: phnomPic.style.display = "block"; break;
//         case 24: chamPic.style.display = "block"; break;
//         case 25: tboungPic.style.display = "block"; break;
//           default: break;
//       }
//       index++;
//       if(index>25){
//           index = 0;
//           proTxt.innerHTML = "End"
//           needlepng.classList.remove("needlespin")
//           timePause();
//           popupOn();
//       }
//   console.log(tmp);
//   gTracker.innerHTML=greenPoint;
//   yTracker.innerHTML=yellowPoint;
//   rTracker.innerHTML=redPoint;

//   gBar.style.width = `${greenPoint*3.6}%`
//   yBar.style.width = `${yellowPoint*3.6}%`
//   rBar.style.width = `${redPoint*3.6}%`
// }
let removePic = ()=>{
  rotanakPic.style.display = "none";
  mondolPic.style.display = "none";
  kratiePic.style.display = "none";
  svayPic.style.display = "none";
  preyPic.style.display = "none";
  kandalPic.style.display = "none";
  takevPic.style.display = "none";
  kampotPic.style.display = "none";
  oudorPic.style.display = "none";
  preahPic.style.display = "none";
  siemPic.style.display = "none";
  banteayPic.style.display = "none";
  kohPic.style.display = "none";
  pusatPic.style.display = "none";
  batPic.style.display = "none";
pailinPic.style.display = "none";
stengPic.style.display = "none";
sihaPic.style.display = "none";
kepPic.style.display = "none";
chnangPic.style.display = "none";
thumPic.style.display = "none";
spePic.style.display = "none";
phnomPic.style.display = "none";
chamPic.style.display = "none";
tboungPic.style.display = "none";

}
let correct = ()=>{
    switch (tmp) {
        case 1:
          rotanak.classList.add("correct");
          break;
        case 2:
          mondol.classList.add("correct");
          break;
        case 3:
          kratie.classList.add("correct");
          break;
        case 4:
          svay.classList.add("correct");
          break;
        case 5:
          prey.classList.add("correct");
          break;
        case 6:
          kandal.classList.add("correct");
          break;
        case 7:
          takev.classList.add("correct");
          break;
        case 8:
          kampot.classList.add("correct");
          break;
        case 9:
          oudor.classList.add("correct");
          break;
        case 10:
          preah.classList.add("correct");
          break;
        case 11:
          siem.classList.add("correct");
          break;
        case 12:
          banteay.classList.add("correct");
          break;
        case 13:
          koh.classList.add("correct");
          break;
        case 14:
          pusat.classList.add("correct");
          break;
        case 15:
          bat.classList.add("correct");
          break;
        case 16:
          pailin.classList.add("correct");
          break;
        case 17:
          steng.classList.add("correct");
          break;
        case 18:
          siha.classList.add("correct");
          break;
        case 19:
          kep.classList.add("correct");
          break;
        case 20:
          chnang.classList.add("correct");
          break;
        case 21:
          thum.classList.add("correct");
          break;
        case 22:
          spe.classList.add("correct");
          break;
        case 23:
          phnom.classList.add("correct");
          break;
        case 24:
          cham.classList.add("correct");
          break;
        case 25:
          tboung.classList.add("correct");
          break;
        default:
          console.log("Invalid input");
      }
      greenPoint++;

}
let wrong = ()=>{
    switch (tmp) {
        case 1:
          rotanak.classList.add("wrong");
          break;
        case 2:
          mondol.classList.add("wrong");
          break;
        case 3:
          kratie.classList.add("wrong");
          break;
        case 4:
          svay.classList.add("wrong");
          break;
        case 5:
          prey.classList.add("wrong");
          break;
        case 6:
          kandal.classList.add("wrong");
          break;
        case 7:
          takev.classList.add("wrong");
          break;
        case 8:
          kampot.classList.add("wrong");
          break;
        case 9:
          oudor.classList.add("wrong");
          break;
        case 10:
          preah.classList.add("wrong");
          break;
        case 11:
          siem.classList.add("wrong");
          break;
        case 12:
          banteay.classList.add("wrong");
          break;
        case 13:
          koh.classList.add("wrong");
          break;
        case 14:
          pusat.classList.add("wrong");
          break;
        case 15:
          bat.classList.add("wrong");
          break;
        case 16:
          pailin.classList.add("wrong");
          break;
        case 17:
          steng.classList.add("wrong");
          break;
        case 18:
          siha.classList.add("wrong");
          break;
        case 19:
          kep.classList.add("wrong");
          break;
        case 20:
          chnang.classList.add("wrong");
          break;
        case 21:
          thum.classList.add("wrong");
          break;
        case 22:
          spe.classList.add("wrong");
          break;
        case 23:
          phnom.classList.add("wrong");
          break;
        case 24:
          cham.classList.add("wrong");
          break;
        case 25:
          tboung.classList.add("wrong");
          break;
        default:
          console.log("Invalid input");
      }
      trial = 0;
      redPoint++
}
let nearMissed=()=>{
    switch (tmp) {
        case 1:
          rotanak.classList.add("nearMiss");
          break;
        case 2:
          mondol.classList.add("nearMiss");
          break;
        case 3:
          kratie.classList.add("nearMiss");
          break;
        case 4:
          svay.classList.add("nearMiss");
          break;
        case 5:
          prey.classList.add("nearMiss");
          break;
        case 6:
          kandal.classList.add("nearMiss");
          break;
        case 7:
          takev.classList.add("nearMiss");
          break;
        case 8:
          kampot.classList.add("nearMiss");
          break;
        case 9:
          oudor.classList.add("nearMiss");
          break;
        case 10:
          preah.classList.add("nearMiss");
          break;
        case 11:
          siem.classList.add("nearMiss");
          break;
        case 12:
          banteay.classList.add("nearMiss");
          break;
        case 13:
          koh.classList.add("nearMiss");
          break;
        case 14:
          pusat.classList.add("nearMiss");
          break;
        case 15:
          bat.classList.add("nearMiss");
          break;
        case 16:
          pailin.classList.add("nearMiss");
          break;
        case 17:
          steng.classList.add("nearMiss");
          break;
        case 18:
          siha.classList.add("nearMiss");
          break;
        case 19:
          kep.classList.add("nearMiss");
          break;
        case 20:
          chnang.classList.add("nearMiss");
          break;
        case 21:
          thum.classList.add("nearMiss");
          break;
        case 22:
          spe.classList.add("nearMiss");
          break;
        case 23:
          phnom.classList.add("nearMiss");
          break;
        case 24:
          cham.classList.add("nearMiss");
          break;
        case 25:
          tboung.classList.add("nearMiss");
          break;
        default:
          console.log("Invalid input");
      }
      trial = 0;
      yellowPoint++;
}
let removeNearMiss=()=>{
    rotanak.classList.remove("nearMiss");
    mondol.classList.remove("nearMiss");
    kratie.classList.remove("nearMiss");
    svay.classList.remove("nearMiss");
    prey.classList.remove("nearMiss");
    kandal.classList.remove("nearMiss");
    takev.classList.remove("nearMiss");
    kampot.classList.remove("nearMiss");
    oudor.classList.remove("nearMiss");
    preah.classList.remove("nearMiss");
    siem.classList.remove("nearMiss");
    banteay.classList.remove("nearMiss");
    koh.classList.remove("nearMiss");
    pusat.classList.remove("nearMiss");
    bat.classList.remove("nearMiss");
    pailin.classList.remove("nearMiss");
    steng.classList.remove("nearMiss");
    siha.classList.remove("nearMiss");
    kep.classList.remove("nearMiss");
    chnang.classList.remove("nearMiss");
    thum.classList.remove("nearMiss");
    spe.classList.remove("nearMiss");
    phnom.classList.remove("nearMiss");
    cham.classList.remove("nearMiss");
    tboung.classList.remove("nearMiss");
    yellowPoint = 0;
}
let removeWrong=()=>{
    rotanak.classList.remove("wrong")
    mondol.classList.remove("wrong");
    kratie.classList.remove("wrong");
    svay.classList.remove("wrong");
    prey.classList.remove("wrong");
    kandal.classList.remove("wrong");
    takev.classList.remove("wrong");
    kampot.classList.remove("wrong");
    oudor.classList.remove("wrong");
    preah.classList.remove("wrong");
    siem.classList.remove("wrong");
    banteay.classList.remove("wrong");
    koh.classList.remove("wrong");
    pusat.classList.remove("wrong");
    bat.classList.remove("wrong");
    pailin.classList.remove("wrong");
    steng.classList.remove("wrong");
    siha.classList.remove("wrong");
    kep.classList.remove("wrong");
    chnang.classList.remove("wrong");
    thum.classList.remove("wrong");
    spe.classList.remove("wrong");
    phnom.classList.remove("wrong");
    cham.classList.remove("wrong");
    tboung.classList.remove("wrong");
    redPoint = 0;

}
let removeCorrect=()=>{
    rotanak.classList.remove("correct");
    mondol.classList.remove("correct");
    kratie.classList.remove("correct");
    svay.classList.remove("correct");
    prey.classList.remove("correct");
    kandal.classList.remove("correct");
    takev.classList.remove("correct");
    kampot.classList.remove("correct");
    oudor.classList.remove("correct");
    preah.classList.remove("correct");
    siem.classList.remove("correct");
    banteay.classList.remove("correct");
    koh.classList.remove("correct");
    pusat.classList.remove("correct");
    bat.classList.remove("correct");
    pailin.classList.remove("correct");
    steng.classList.remove("correct");
    siha.classList.remove("correct");
    kep.classList.remove("correct");
    chnang.classList.remove("correct");
    thum.classList.remove("correct");
    spe.classList.remove("correct");
    phnom.classList.remove("correct");
    cham.classList.remove("correct");
    tboung.classList.remove("correct");
    greenPoint = 0;
}

let restart = () => {
    removeCorrect();
    removeNearMiss();
    removeWrong();
    counter = 0;
    currentNum = shuffle(totalNum);
    index=0;
    startVerify = 1;
    pauseVerify=0;
    timeReset();
    timeStart();
    pausebtn.innerHTML="Pause"
    needlepng.classList.remove("needlespin")
    needlepng.classList.add("needlespin")
    updateTxt();

}
let restart2 = () => {
    removeCorrect();
    removeNearMiss();
    removeWrong();
    counter = 0;
    index=0;
    startVerify = 0;
    pauseVerify=0;
    timeReset();
    pausebtn.innerHTML="Pause"
    needlepng.classList.remove("needlespin")
    startbtn.style.opacity = "1"
    proTxt.innerHTML = "Province of Cambodia"
    removePic();
    gTracker.innerHTML=greenPoint;
    yTracker.innerHTML=yellowPoint;
    rTracker.innerHTML=redPoint;

    gBar.style.width = `${greenPoint*3.6}%`
    yBar.style.width = `${yellowPoint*3.6}%`
    rBar.style.width = `${redPoint*3.6}%`
  }

let startVerify = 0;
startbtn.addEventListener("click",()=>{
  if(startVerify===0){
    currentNum = shuffle(totalNum);
    startbtn.style.opacity = "0.3";
    needlepng.classList.add("needlespin");
    startVerify = 1;
    timeReset();
    timeStart();
    updateTxt();
  }
  else if(startVerify===1){
    restart();
  }
})


restartbtn.addEventListener("click", ()=>{
    restart();
})


pauseVerify = 0;
pausebtn.addEventListener("click", ()=>{
    if(startVerify==1&&pauseVerify==0){
      pauseVerify = 1;
      startVerify = 0;
      pausebtn.innerHTML="Resume";
      needlepng.classList.remove("needlespin")
      timePause();
    }
    else if(startVerify==0&&pauseVerify==1){
      pauseVerify = 0;
      startVerify = 1;
      pausebtn.innerHTML="Pause";
      needlepng.classList.add("needlespin")
      timeStart();
    }
    
})


let counter = 0;
let checker = (id)=>{
  if(startVerify==0&&pauseVerify==0){
    startbtn.style.scale = "1.5";
    startbtn.style.borderColor = "red";
    setTimeout(() => {
      startbtn.style.scale = "1";
      startbtn.style.borderColor = "black";

    }, 100);
  }
  else if(startVerify==0&&pauseVerify==1){
    pausebtn.style.scale = "1.5";
    pausebtn.style.borderColor = "red";
    setTimeout(() => {
      pausebtn.style.scale = "1";
      pausebtn.style.borderColor = "black";

    }, 100);
  }
  if(counter<25&&startVerify===1){
    if(tmp!=id){
        trial++
    }
    else if(tmp===id&&trial===0){
        correct();
        counter++;
        updateTxt();
    }
    else if (tmp===id&&trial===1){
        nearMissed();
        counter++
        updateTxt();
    }
    if(trial>1){
        wrong();
        counter++;
        updateTxt();
    }
  }
}

let tmp = 0;
let index = 0;
let trial = 0;


rotanak.addEventListener("click",()=>{
    checker(1)
})
mondol.addEventListener("click",()=>{
    checker(2);
})
kratie.addEventListener("click",()=>{
    checker(3);
})
svay.addEventListener("click",()=>{
    checker(4);
})
prey.addEventListener("click",()=>{
    checker(5);
})
kandal.addEventListener("click",()=>{
    checker(6);
})
takev.addEventListener("click",()=>{
    checker(7);
})
kampot.addEventListener("click",()=>{
    checker(8);
})
oudor.addEventListener("click",()=>{
    checker(9);
})
preah.addEventListener("click",()=>{
    checker(10);
})
siem.addEventListener("click",()=>{
    checker(11);
})
banteay.addEventListener("click",()=>{
    checker(12);
})
koh.addEventListener("click",()=>{
    checker(13);
})
pusat.addEventListener("click",()=>{
    checker(14);
})
bat.addEventListener("click",()=>{
    checker(15);
})
pailin.addEventListener("click",()=>{
    checker(16);
})
steng.addEventListener("click",()=>{
    checker(17);
})
siha.addEventListener("click",()=>{
    checker(18);
})
kep.addEventListener("click",()=>{
    checker(19);
})
chnang.addEventListener("click",()=>{
    checker(20);
})
thum.addEventListener("click",()=>{
    checker(21);
})
spe.addEventListener("click",()=>{
    checker(22);
})
phnom.addEventListener("click",()=>{
    checker(23);
})
cham.addEventListener("click",()=>{
    checker(24);
})
tboung.addEventListener("click",()=>{
    checker(25);
})

startbtn.addEventListener("mouseover",()=>{
  needlepng.style.rotate = "-38deg";
})
restartbtn.addEventListener("mouseover",()=>{
  needlepng.style.rotate = "38deg";
})
pausebtn.addEventListener("mouseover",()=>{
  needlepng.style.rotate = "0deg";
})
startbtn.addEventListener("mouseleave",()=>{
  needlepng.style.rotate = "20deg";
})
restartbtn.addEventListener("mouseleave",()=>{
  needlepng.style.rotate = "20deg";
})
pausebtn.addEventListener("mouseleave",()=>{
  needlepng.style.rotate = "20deg";
})


statRestartbtn.addEventListener("mouseover",()=>{
  needle.style.rotate = "-90deg";
})
statDonebtn.addEventListener("mouseover",()=>{
  needle.style.rotate = "90deg";
})
statRestartbtn.addEventListener("mouseleave",()=>{
  needle.style.rotate = "0deg";
})
statDonebtn.addEventListener("mouseleave",()=>{
  needle.style.rotate = "0deg";
})

statRestartbtn.addEventListener("click",()=>{
  restart();
  popupOff();
})
statDonebtn.addEventListener("click",()=>{
  popupOff();
  startVerify=0;
})

let popupOff = ()=>{
  BackGround.style.opacity = "1";
  dis1Wrap.style.filter = "brightness(1)";
  finishedPopup.style.scale = "0";
  setTimeout(() => {
    finishedPopup.style.display = "none"
  }, 160);
  removeScore();
}
let popupOn = ()=>{
  BackGround.style.opacity = "0.5";
  dis1Wrap.style.filter = "brightness(0.5)";
  finishedPopup.style.display = "block"
  finishedPopup.style.scale = "0";
  setTimeout(() => {
  finishedPopup.style.scale = "1";
  }, 160);
  scoring();
}

//Scoring System
let overallTxt = document.querySelector(".overall")
let timeUsedTxt = document.querySelector(".timeUsed")
let speedTxt = document.querySelector(".speed")
let rateTxt = document.querySelector(".rate")

let overall = 0
let timeUsed = 0
let speed = 0
let rate = 0

let removeScore = ()=>{
 overall = 0
 timeUsed = 0
 speed = 0
 rate = 0
}
let scoring = ()=>{
  overall = (greenPoint*4)+(yellowPoint*2)
  speed = ((mins*60)+secs)/25
  rate = greenPoint/25
  overallTxt.innerHTML = `: ${overall}%`
  timeUsedTxt.innerHTML = `: ${mins}mn ${secs}s`
  speedTxt.innerHTML = `: ${speed} s/province`
  rateTxt.innerHTML = `: ${rate}`
}
}