function Flames(){
    // Take the name
    var Username = document.querySelector("#UserName").value;  
    var Crushname = document.querySelector("#UserCrush").value;
    Username = Username.toLowerCase();
    Crushname = Crushname.toLowerCase();
    var FlamesKey = ["Friendship","Love","Affection","Marriage","Enemies","Siblings"]
    console.log(Username,Crushname)
    var count = (Username.length+ Crushname.length)
    console.log("Lenght : ",count)
    var coun2=count
    
    let indexRemove=0;
        for(i=0;i<Username.length;i++){
            for(j=0;j<Crushname.length;j++){
                if(Username[i]==Crushname[j]){
                    coun2 = coun2-2;
                    break;
                }
            }
        }
        console.log("Number : ",coun2)
        if(coun2 ==0){
            coun2 = count
}
    console.log(FlamesKey[FlamesKey.length-1],FlamesKey.length-1)

// 
// -------------------------------------------

while(true){

    dum =indexRemove
for(let i=0;i<coun2;i++){
    if(dum==FlamesKey.length){
        dum = 0
    }
    removeee =FlamesKey[dum]
    dum++;
}
indexRemove=FlamesKey.indexOf(removeee)
        console.log(indexRemove)
        FlamesKey.splice(indexRemove,1)
        console.log(FlamesKey)

if(FlamesKey.length == 1){
            break;
}
}


message = document.querySelector("#Text").innerHTML = `The relationship between ${Username} and ${Crushname} will end in <span class="sas" > <br> "${FlamesKey[0]}"  </span>`


}