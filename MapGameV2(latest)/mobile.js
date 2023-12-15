if(window.innerWidth<1000){
    //Background Function
    let Mstartbtn = document.querySelector(".Mstartbtn");
    let Mpausebtn = document.querySelector(".Mpausebtn");
    let Mrestartbtn = document.querySelector(".Mrestartbtn");
    let MProTxt = document.querySelector(".MProTxt");
    let MstatRestartbtn = document.querySelector(".MstatRestartbtn");
    let MstatDonebtn = document.querySelector(".MstatDonebtn");
    let Mbg1 = document.querySelector(".Mbg1");
    let Mbg2 = document.querySelector(".Mbg2");
    let Mbg3 = document.querySelector(".Mbg3");
    let MBackGround = document.querySelector(".MBackGround");
    let MfinishedPopup = document.querySelector(".MfinishedPopup");
    let MleftArrow = document.querySelector(".MarrowLeft");
    let MrightArrow = document.querySelector(".MarrowRight");
    // Assign all the Province ID
    let Mrotanak = document.querySelector("#MKHM1795");
    let Mmondol = document.querySelector("#MKHM1794");
    let Mkratie = document.querySelector("#MKHM1793");
    let Msvay = document.querySelector("#MKHM1801");
    let Mprey = document.querySelector("#MKHM1790");
    let Mkandal = document.querySelector("#MKHM1786");
    let Mtakev = document.querySelector("#MKHM1802");
    let Mkampot = document.querySelector("#MKHM1797");
    let Moudor = document.querySelector("#MKHM1782");
    let Mpreah = document.querySelector("#MKHM1791");
    let Msiem = document.querySelector("#MKHM1781");
    let Mbanteay = document.querySelector("#MKHM1777");
    let Mkoh = document.querySelector("#MKHM1779");
    let Mpusat = document.querySelector("#MKHM1780");
    let Mbat = document.querySelector("#MKHM1778");
    let Mpailin = document.querySelector("#MKHM1783");
    let Msteng = document.querySelector("#MKHM1792");
    let Msiha = document.querySelector("#MKHM1800");
    let Mkep = document.querySelector("#MKHM1798");
    let Mchnang = document.querySelector("#MKHM1785");
    let Mthum = document.querySelector("#MKHM1788");
    let Mspe = document.querySelector("#MKHM1787");
    let Mphnom = document.querySelector("#MKHM1789");
    let Mcham = document.querySelector("#MKHM1784");
    let Mtboung = document.querySelector("#MKHM1803");
    
    // Pointing System
    let MgTracker = document.querySelector(".MgTracker")
    let MyTracker = document.querySelector(".MyTracker")
    let MrTracker = document.querySelector(".MrTracker")
    
    //Background Changer
    let cValue = 0;
        MleftArrow.addEventListener("click",()=>{
        // if(cValue<1550){
        //     cValue = cValue + xValue;
        //     BackGround.style.transform = `translateX(${cValue}px)`;
        // }
        if(cValue>-1){
            cValue--
        }
        if(cValue===0){
            Mbg1.style.display = "none"
            Mbg2.style.display = "block"
            Mbg3.style.display = "none"
            MrightArrow.style.opacity = "1";
            MleftArrow.style.opacity = "1";
        }
        if(cValue===-1){
            MleftArrow.style.opacity = "0.2";
            Mbg1.style.display = "block"
            Mbg2.style.display = "none"
            Mbg3.style.display = "none"
        }
    })
    MrightArrow.addEventListener("click",()=>{
        // if(cValue>-1550){
        //     cValue = cValue - xValue;
        //     BackGround.style.transform = `translateX(${cValue}px)`;
        // }
        if(cValue<1){
            cValue++
        }
        if(cValue===0){
            Mbg1.style.display = "none"
            Mbg2.style.display = "block"
            Mbg3.style.display = "none"
            MrightArrow.style.opacity = "1";
            MleftArrow.style.opacity = "1";
        }
        if(cValue===1){
            MrightArrow.style.opacity = "0.2";
            Mbg1.style.display = "none"
            Mbg2.style.display = "none"
            Mbg3.style.display = "block"
        }
    })
    //Version 2.0 Extended
    let MrotanakPic = document.querySelector(".MrotanakPic");
    let MmondolPic = document.querySelector(".MmondolPic");
    let MkratiePic = document.querySelector(".MkratiePic");
    let MsvayPic = document.querySelector(".MsvayPic");
    let MpreyPic = document.querySelector(".MpreyPic");
    let MkandalPic = document.querySelector(".MkandalPic");
    let MtakevPic = document.querySelector(".MtakevPic");
    let MkampotPic = document.querySelector(".MkampotPic");
    let MoudorPic = document.querySelector(".MoudorPic");
    let MpreahPic = document.querySelector(".MpreahPic");
    let MsiemPic = document.querySelector(".MsiemPic");
    let MbanteayPic = document.querySelector(".MbanteayPic");
    let MkohPic = document.querySelector(".MkohPic");
    let MpusatPic = document.querySelector(".MpusatPic");
    let MbatPic = document.querySelector(".MbatPic");
    let MpailinPic = document.querySelector(".MpailinPic");
    let MstengPic = document.querySelector(".MstengPic");
    let MsihaPic = document.querySelector(".MsihaPic");
    let MkepPic = document.querySelector(".MkepPic");
    let MchnangPic = document.querySelector(".MchnangPic");
    let MthumPic = document.querySelector(".MthumPic");
    let MspePic = document.querySelector(".MspePic");
    let MphnomPic = document.querySelector(".MphnomPic");
    let MchamPic = document.querySelector(".MchamPic");
    let MtboungPic = document.querySelector(".MtboungPic");
    optSelect = 1;
    let MDrop = document.querySelector(".MDrop")
    let dropArrow = document.querySelector(".dropArrow")
    let MoptDrop = document.querySelector(".MoptDrop")
    let Mopt1 = document.querySelector(".Mopt1")
    let Mopt2 = document.querySelector(".Mopt2")
    let Mopt3 = document.querySelector(".Mopt3")
    let drop1 = document.querySelector(".drop1")
    let drop2 = document.querySelector(".drop2")
    let drop3 = document.querySelector(".drop3")
    let MTitle = document.querySelector(".MTitle")
    let MProPic = document.querySelector(".MProPic")
    let MMap = document.querySelector(".MMap")
    let clearMopt= ()=>{
      Mopt1.style.opacity = "0"
      Mopt2.style.opacity = "0"
      Mopt3.style.opacity = "0"
    }
    let removeDisplay = ()=>{
      MProTxt.style.display="none"
      MProPic.style.display="none"
      MMap.classList.remove("theMapHard")
      MProTxt.classList.remove("MProTxtH")

    }
    let removePic = () => {
      MrotanakPic.style.display = "none";
      MmondolPic.style.display = "none";
      MkratiePic.style.display = "none";
      MsvayPic.style.display = "none";
      MpreyPic.style.display = "none";
      MkandalPic.style.display = "none";
      MtakevPic.style.display = "none";
      MkampotPic.style.display = "none";
      MoudorPic.style.display = "none";
      MpreahPic.style.display = "none";
      MsiemPic.style.display = "none";
      MbanteayPic.style.display = "none";
      MkohPic.style.display = "none";
      MpusatPic.style.display = "none";
      MbatPic.style.display = "none";
      MpailinPic.style.display = "none";
      MstengPic.style.display = "none";
      MsihaPic.style.display = "none";
      MkepPic.style.display = "none";
      MchnangPic.style.display = "none";
      MthumPic.style.display = "none";
      MspePic.style.display = "none";
      MphnomPic.style.display = "none";
      MchamPic.style.display = "none";
      MtboungPic.style.display = "none";
    }
    let showDisplay = (select)=>{
      if(select===1){
        MProTxt.style.display = "flex"
      }
      else if(select===2){
        MProPic.style.display = "block"
      }
      else if(select===3){
        MProTxt.style.display = "flex"
        MProTxt.classList.add("MProTxtH")
        MMap.classList.add("theMapHard")
      }
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
      Mpausebtn.innerHTML="Pause"
      Mstartbtn.style.opacity = "1"
      MProTxt.innerHTML = "Province of Cambodia"
      // removePic();
      MgTracker.innerHTML=greenPoint;
      MyTracker.innerHTML=yellowPoint;
      MrTracker.innerHTML=redPoint;
    }



    dropArrow.addEventListener("click",()=>{
      // clearMopt();
      MDrop.classList.toggle("dropArrowFlip")
      MoptDrop.classList.toggle("MoptDropActive")
    })

    drop1.addEventListener("click",()=>{
      clearMopt();
      removeDisplay();
      optSelect = 1
      MDrop.classList.toggle("dropArrowFlip")
      MoptDrop.classList.toggle("MoptDropActive")
      Mopt1.style.opacity = "1"
      MTitle.innerHTML="Province Name";
      restart2();
      removePic();
      showDisplay(optSelect);

    })
    drop2.addEventListener("click",()=>{
      clearMopt();
      removeDisplay();
      optSelect = 2
      MDrop.classList.toggle("dropArrowFlip")
      MoptDrop.classList.toggle("MoptDropActive")
      Mopt2.style.opacity = "1"
      MTitle.innerHTML="Province Landmark";
      restart2();
      removePic();
      showDisplay(optSelect);
    })
    drop3.addEventListener("click",()=>{
      clearMopt();
      removeDisplay();
      optSelect = 3
      MDrop.classList.toggle("dropArrowFlip")
      MoptDrop.classList.toggle("MoptDropActive")
      Mopt3.style.opacity = "1"
      MTitle.innerHTML="Province Name (Hard)";
      restart2();
      removePic();
      showDisplay(optSelect);
    })

    let totalNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let currentNum = [];
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    let greenPoint = 0
    let yellowPoint = 0
    let redPoint = 0
    let updateTxt = ()=>{
      if(optSelect===1||optSelect===3){
        tmp = currentNum[index];
            switch(tmp){
                case 1: MProTxt.innerHTML = "រតនគីរី"; break;
                case 2: MProTxt.innerHTML = "មណ្ឌលគីរី"; break;
                case 3: MProTxt.innerHTML = "ក្រចេះ"; break;
                case 4: MProTxt.innerHTML = "ស្វាយរៀង"; break;
                case 5: MProTxt.innerHTML = "ព្រៃវែង"; break;
                case 6: MProTxt.innerHTML = "កណ្តាល"; break;
                case 7: MProTxt.innerHTML = "តាកែវ"; break;
                case 8: MProTxt.innerHTML = "កំពត"; break;
                case 9: MProTxt.innerHTML = "ឧត្តរមានជ័យ"; break;
                case 10: MProTxt.innerHTML = "ព្រះវិហារ"; break;
                case 11: MProTxt.innerHTML = "សៀមរាប"; break;
                case 12: MProTxt.innerHTML = "បន្ទាយមានជ័យ"; break;
                case 13: MProTxt.innerHTML = "កោះកុង"; break;
                case 14: MProTxt.innerHTML = "ពោធិ៍សាត់"; break;
                case 15: MProTxt.innerHTML = "បាត់ដំបង"; break;
                case 16: MProTxt.innerHTML = "ប៉ៃលិន"; break;
                case 17: MProTxt.innerHTML = "ស្ទឹងត្រែង"; break;
                case 18: MProTxt.innerHTML = "ព្រះសីហនុ"; break;
                case 19: MProTxt.innerHTML = "កែប"; break;
                case 20: MProTxt.innerHTML = "កំពង់ឆ្នាំង"; break;
                case 21: MProTxt.innerHTML = "កំពង់ធំ"; break;
                case 22: MProTxt.innerHTML = "កំពង់ស្ពី"; break;
                case 23: MProTxt.innerHTML = "ភ្នំពេញ"; break;
                case 24: MProTxt.innerHTML = "កំពង់ចាម"; break;
                case 25: MProTxt.innerHTML = "ត្បូងឃ្មុំ"; break;
                default: break;
            }
            index++;
      }
    else if(optSelect===2){
      tmp = currentNum[index];
      removePic();
      MProTxt.innerHTML = "Province of Cambodia";
      switch (tmp) {
        case 1: MrotanakPic.style.display = "block"; break;
        case 2: MmondolPic.style.display = "block"; break;
        case 3: MkratiePic.style.display = "block"; break;
        case 4: MsvayPic.style.display = "block"; break;
        case 5: MpreyPic.style.display = "block"; break;
        case 6: MkandalPic.style.display = "block"; break;
        case 7: MtakevPic.style.display = "block"; break;
        case 8: MkampotPic.style.display = "block"; break;
        case 9: MoudorPic.style.display = "block"; break;
        case 10: MpreahPic.style.display = "block"; break;
        case 11: MsiemPic.style.display = "block"; break;
        case 12: MbanteayPic.style.display = "block"; break;
        case 13: MkohPic.style.display = "block"; break;
        case 14: MpusatPic.style.display = "block"; break;
        case 15: MbatPic.style.display = "block"; break;
        case 16: MpailinPic.style.display = "block"; break;
        case 17: MstengPic.style.display = "block"; break;
        case 18: MsihaPic.style.display = "block"; break;
        case 19: MkepPic.style.display = "block"; break;
        case 20: MchnangPic.style.display = "block"; break;
        case 21: MthumPic.style.display = "block"; break;
        case 22: MspePic.style.display = "block"; break;
        case 23: MphnomPic.style.display = "block"; break;
        case 24: MchamPic.style.display = "block"; break;
        case 25: MtboungPic.style.display = "block"; break;
        default: break;
      }
      index++;

    }
            if(index>25){
                index = 0;
                MProTxt.innerHTML = "End"
                timePause();
                popupOn();
                removePic();
            }   
        MgTracker.innerHTML=greenPoint;
        MyTracker.innerHTML=yellowPoint;
        MrTracker.innerHTML=redPoint;     
        }
        let correct = ()=>{
            switch (tmp) {
                case 1:
                    Mrotanak.classList.add("correct");
                    break;
                  case 2:
                    Mmondol.classList.add("correct");
                    break;
                  case 3:
                    Mkratie.classList.add("correct");
                    break;
                  case 4:
                    Msvay.classList.add("correct");
                    break;
                  case 5:
                    Mprey.classList.add("correct");
                    break;
                  case 6:
                    Mkandal.classList.add("correct");
                    break;
                  case 7:
                    Mtakev.classList.add("correct");
                    break;
                  case 8:
                    Mkampot.classList.add("correct");
                    break;
                  case 9:
                    Moudor.classList.add("correct");
                    break;
                  case 10:
                    Mpreah.classList.add("correct");
                    break;
                  case 11:
                    Msiem.classList.add("correct");
                    break;
                  case 12:
                    Mbanteay.classList.add("correct");
                    break;
                  case 13:
                    Mkoh.classList.add("correct");
                    break;
                  case 14:
                    Mpusat.classList.add("correct");
                    break;
                  case 15:
                    Mbat.classList.add("correct");
                    break;
                  case 16:
                    Mpailin.classList.add("correct");
                    break;
                  case 17:
                    Msteng.classList.add("correct");
                    break;
                  case 18:
                    Msiha.classList.add("correct");
                    break;
                  case 19:
                    Mkep.classList.add("correct");
                    break;
                  case 20:
                    Mchnang.classList.add("correct");
                    break;
                  case 21:
                    Mthum.classList.add("correct");
                    break;
                  case 22:
                    Mspe.classList.add("correct");
                    break;
                  case 23:
                    Mphnom.classList.add("correct");
                    break;
                  case 24:
                    Mcham.classList.add("correct");
                    break;
                  case 25:
                    Mtboung.classList.add("correct");
                    break;
                  
                default:
                  console.log("Invalid input");
              }
              greenPoint++;
        
        }
        let wrong = ()=>{
            switch (tmp) {
                case 1:
                    Mrotanak.classList.add("wrong");
                    break;
                  case 2:
                    Mmondol.classList.add("wrong");
                    break;
                  case 3:
                    Mkratie.classList.add("wrong");
                    break;
                  case 4:
                    Msvay.classList.add("wrong");
                    break;
                  case 5:
                    Mprey.classList.add("wrong");
                    break;
                  case 6:
                    Mkandal.classList.add("wrong");
                    break;
                  case 7:
                    Mtakev.classList.add("wrong");
                    break;
                  case 8:
                    Mkampot.classList.add("wrong");
                    break;
                  case 9:
                    Moudor.classList.add("wrong");
                    break;
                  case 10:
                    Mpreah.classList.add("wrong");
                    break;
                  case 11:
                    Msiem.classList.add("wrong");
                    break;
                  case 12:
                    Mbanteay.classList.add("wrong");
                    break;
                  case 13:
                    Mkoh.classList.add("wrong");
                    break;
                  case 14:
                    Mpusat.classList.add("wrong");
                    break;
                  case 15:
                    Mbat.classList.add("wrong");
                    break;
                  case 16:
                    Mpailin.classList.add("wrong");
                    break;
                  case 17:
                    Msteng.classList.add("wrong");
                    break;
                  case 18:
                    Msiha.classList.add("wrong");
                    break;
                  case 19:
                    Mkep.classList.add("wrong");
                    break;
                  case 20:
                    Mchnang.classList.add("wrong");
                    break;
                  case 21:
                    Mthum.classList.add("wrong");
                    break;
                  case 22:
                    Mspe.classList.add("wrong");
                    break;
                  case 23:
                    Mphnom.classList.add("wrong");
                    break;
                  case 24:
                    Mcham.classList.add("wrong");
                    break;
                  case 25:
                    Mtboung.classList.add("wrong");
                    break;
                                  
                default:
                  console.log("Invalid input");
              }
              trial = 0;
              redPoint++
        }
        let nearMissed = () => {
            switch (tmp) {
              case 1:
                Mrotanak.classList.add("nearMiss");
                break;
              case 2:
                Mmondol.classList.add("nearMiss");
                break;
              case 3:
                Mkratie.classList.add("nearMiss");
                break;
              case 4:
                Msvay.classList.add("nearMiss");
                break;
              case 5:
                Mprey.classList.add("nearMiss");
                break;
              case 6:
                Mkandal.classList.add("nearMiss");
                break;
              case 7:
                Mtakev.classList.add("nearMiss");
                break;
              case 8:
                Mkampot.classList.add("nearMiss");
                break;
              case 9:
                Moudor.classList.add("nearMiss");
                break;
              case 10:
                Mpreah.classList.add("nearMiss");
                break;
              case 11:
                Msiem.classList.add("nearMiss");
                break;
              case 12:
                Mbanteay.classList.add("nearMiss");
                break;
              case 13:
                Mkoh.classList.add("nearMiss");
                break;
              case 14:
                Mpusat.classList.add("nearMiss");
                break;
              case 15:
                Mbat.classList.add("nearMiss");
                break;
              case 16:
                Mpailin.classList.add("nearMiss");
                break;
              case 17:
                Msteng.classList.add("nearMiss");
                break;
              case 18:
                Msiha.classList.add("nearMiss");
                break;
              case 19:
                Mkep.classList.add("nearMiss");
                break;
              case 20:
                Mchnang.classList.add("nearMiss");
                break;
              case 21:
                Mthum.classList.add("nearMiss");
                break;
              case 22:
                Mspe.classList.add("nearMiss");
                break;
              case 23:
                Mphnom.classList.add("nearMiss");
                break;
              case 24:
                Mcham.classList.add("nearMiss");
                break;
              case 25:
                Mtboung.classList.add("nearMiss");
                break;
              default:
                console.log("Invalid input");
            }
            trial = 0;
            yellowPoint++;
          }
        let removeNearMiss = () => {
            Mrotanak.classList.remove("nearMiss");
            Mmondol.classList.remove("nearMiss");
            Mkratie.classList.remove("nearMiss");
            Msvay.classList.remove("nearMiss");
            Mprey.classList.remove("nearMiss");
            Mkandal.classList.remove("nearMiss");
            Mtakev.classList.remove("nearMiss");
            Mkampot.classList.remove("nearMiss");
            Moudor.classList.remove("nearMiss");
            Mpreah.classList.remove("nearMiss");
            Msiem.classList.remove("nearMiss");
            Mbanteay.classList.remove("nearMiss");
            Mkoh.classList.remove("nearMiss");
            Mpusat.classList.remove("nearMiss");
            Mbat.classList.remove("nearMiss");
            Mpailin.classList.remove("nearMiss");
            Msteng.classList.remove("nearMiss");
            Msiha.classList.remove("nearMiss");
            Mkep.classList.remove("nearMiss");
            Mchnang.classList.remove("nearMiss");
            Mthum.classList.remove("nearMiss");
            Mspe.classList.remove("nearMiss");
            Mphnom.classList.remove("nearMiss");
            Mcham.classList.remove("nearMiss");
            Mtboung.classList.remove("nearMiss");
            yellowPoint = 0;
        }
        
        let removeWrong = () => {
            Mrotanak.classList.remove("wrong");
            Mmondol.classList.remove("wrong");
            Mkratie.classList.remove("wrong");
            Msvay.classList.remove("wrong");
            Mprey.classList.remove("wrong");
            Mkandal.classList.remove("wrong");
            Mtakev.classList.remove("wrong");
            Mkampot.classList.remove("wrong");
            Moudor.classList.remove("wrong");
            Mpreah.classList.remove("wrong");
            Msiem.classList.remove("wrong");
            Mbanteay.classList.remove("wrong");
            Mkoh.classList.remove("wrong");
            Mpusat.classList.remove("wrong");
            Mbat.classList.remove("wrong");
            Mpailin.classList.remove("wrong");
            Msteng.classList.remove("wrong");
            Msiha.classList.remove("wrong");
            Mkep.classList.remove("wrong");
            Mchnang.classList.remove("wrong");
            Mthum.classList.remove("wrong");
            Mspe.classList.remove("wrong");
            Mphnom.classList.remove("wrong");
            Mcham.classList.remove("wrong");
            Mtboung.classList.remove("wrong");
            redPoint = 0;
        }
        let removeCorrect = () => {
            Mrotanak.classList.remove("correct");
            Mmondol.classList.remove("correct");
            Mkratie.classList.remove("correct");
            Msvay.classList.remove("correct");
            Mprey.classList.remove("correct");
            Mkandal.classList.remove("correct");
            Mtakev.classList.remove("correct");
            Mkampot.classList.remove("correct");
            Moudor.classList.remove("correct");
            Mpreah.classList.remove("correct");
            Msiem.classList.remove("correct");
            Mbanteay.classList.remove("correct");
            Mkoh.classList.remove("correct");
            Mpusat.classList.remove("correct");
            Mbat.classList.remove("correct");
            Mpailin.classList.remove("correct");
            Msteng.classList.remove("correct");
            Msiha.classList.remove("correct");
            Mkep.classList.remove("correct");
            Mchnang.classList.remove("correct");
            Mthum.classList.remove("correct");
            Mspe.classList.remove("correct");
            Mphnom.classList.remove("correct");
            Mcham.classList.remove("correct");
            Mtboung.classList.remove("correct");
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
            Mpausebtn.innerHTML="Pause"
            updateTxt();
        } 
        let startVerify = 0;
        Mstartbtn.addEventListener("click",()=>{
          if(startVerify===0){
            currentNum = shuffle(totalNum);
            Mstartbtn.style.opacity = "0.3";
            startVerify = 1;
            timeReset();
            timeStart();
            updateTxt();
          }
          else if(startVerify===1){
            restart();
          }
        })  
        Mrestartbtn.addEventListener("click", ()=>{
            restart();
        })   
        pauseVerify = 0;
        Mpausebtn.addEventListener("click", ()=>{
            if(startVerify==1&&pauseVerify==0){
              pauseVerify = 1;
              startVerify = 0;
              Mpausebtn.innerHTML="Resume";
              timePause();
            }
            else if(startVerify==0&&pauseVerify==1){
              pauseVerify = 0;
              startVerify = 1;
              Mpausebtn.innerHTML="Pause";
              timeStart();
            }
            
        })  
        let counter = 0;
        let checker = (id)=>{
          if(startVerify==0&&pauseVerify==0){
            Mstartbtn.style.scale = "1.5";
            Mstartbtn.style.borderColor = "red";
            setTimeout(() => {
              Mstartbtn.style.scale = "1";
              Mstartbtn.style.borderColor = "black";
        
            }, 100);
          }
          else if(startVerify==0&&pauseVerify==1){
            Mpausebtn.style.scale = "1.5";
            Mpausebtn.style.borderColor = "red";
            setTimeout(() => {
              Mpausebtn.style.scale = "1";
              Mpausebtn.style.borderColor = "black";
        
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
        Mrotanak.addEventListener("click", () => {
            checker(1);
        });
        
        Mmondol.addEventListener("click", () => {
            checker(2);
        });
        
        Mkratie.addEventListener("click", () => {
            checker(3);
        });
        
        Msvay.addEventListener("click", () => {
            checker(4);
        });
        
        Mprey.addEventListener("click", () => {
            checker(5);
        });
        
        Mkandal.addEventListener("click", () => {
            checker(6);
        });
        
        Mtakev.addEventListener("click", () => {
            checker(7);
        });
        
        Mkampot.addEventListener("click", () => {
            checker(8);
        });
        
        Moudor.addEventListener("click", () => {
            checker(9);
        });
        
        Mpreah.addEventListener("click", () => {
            checker(10);
        });
        
        Msiem.addEventListener("click", () => {
            checker(11);
        });
        
        Mbanteay.addEventListener("click", () => {
            checker(12);
        });
        
        Mkoh.addEventListener("click", () => {
            checker(13);
        });
        
        Mpusat.addEventListener("click", () => {
            checker(14);
        });
        
        Mbat.addEventListener("click", () => {
            checker(15);
        });
        
        Mpailin.addEventListener("click", () => {
            checker(16);
        });
        
        Msteng.addEventListener("click", () => {
            checker(17);
        });
        
        Msiha.addEventListener("click", () => {
            checker(18);
        });
        
        Mkep.addEventListener("click", () => {
            checker(19);
        });
        
        Mchnang.addEventListener("click", () => {
            checker(20);
        });
        
        Mthum.addEventListener("click", () => {
            checker(21);
        });
        
        Mspe.addEventListener("click", () => {
            checker(22);
        });
        
        Mphnom.addEventListener("click", () => {
            checker(23);
        });
        
        Mcham.addEventListener("click", () => {
            checker(24);
        });
        
        Mtboung.addEventListener("click", () => {
            checker(25);
        });

        

          
          
          
          MstatRestartbtn.addEventListener("click",()=>{
            restart();
            popupOff();
          })
          MstatDonebtn.addEventListener("click",()=>{
            popupOff();
            startVerify=0;
          })
          
          let popupOff = ()=>{
            MBackGround.style.opacity = "1";
            // dis1Wrap.style.filter = "brightness(1)";
            MfinishedPopup.style.scale = "0";
            setTimeout(() => {
              MfinishedPopup.style.display = "none"
            }, 160);
            removeScore();
          }
          let popupOn = ()=>{
            MBackGround.style.opacity = "0.5";
            // dis1Wrap.style.filter = "brightness(0.5)";
            MfinishedPopup.style.display = "block"
            MfinishedPopup.style.scale = "0";
            setTimeout(() => {
            MfinishedPopup.style.scale = "1";
            }, 160);
            scoring();
          }
          
          //Scoring System
          let MoverallTxt = document.querySelector(".Moverall")
          let MtimeUsedTxt = document.querySelector(".MtimeUsed")
          let MspeedTxt = document.querySelector(".Mspeed")
          let MrateTxt = document.querySelector(".Mrate")
          
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
            MoverallTxt.innerHTML = `: ${overall}%`
            MtimeUsedTxt.innerHTML = `: ${mins}mn ${secs}s`
            MspeedTxt.innerHTML = `: ${speed} s/province`
            MrateTxt.innerHTML = `: ${rate}`
          }
          
}