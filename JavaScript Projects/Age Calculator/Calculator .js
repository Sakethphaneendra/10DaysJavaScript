

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
       const Fy = ty-uy
       console.log(Fy)
    }else{
        console.log("You are Not Born Yet")
    }

}