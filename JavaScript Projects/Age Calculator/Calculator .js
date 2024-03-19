

function s(){
    // Today
    const Today = new Date()
    const td = Today.getDate()
    const tm = Today.getMonth()+1
    const ty = Today.getFullYear()

    // UserBday
    const UserAge = document.querySelector('input').valueAsDate;
    const ud = UserAge.getDate()
    const um = UserAge.getMonth()+1
    const uy = UserAge.getFullYear()
 
    // Find Year

    
    if(ty>=uy){
       var Fy = ty-uy
       console.log(Fy)
       let big = tm
       let bigd = td
       let small = um 
       let smalld = ud
       if(um>big){
        big = um
        small = tm
       }
       if(ud>bigd){
        bigd = ud
        smalld = td
       }
            var Fm = big-small
            
            var Fd = bigd-smalld
            console.log(Fy)
            console.log(Fm)
            console.log(Fd)
    }else{
        console.log("You are Not Born Yet")
    }


    console.log(document.querySelector(".Dt").innerText=Fd)
    console.log(document.querySelector(".Mn").innerText=Fm)
    console.log(document.querySelector(".Yr").innerText=Fy)


    //  Find Month
    


}