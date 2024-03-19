function CreatePassword(){
    
    const Uppercase = "AKGSTUVWXLMEFBHIJYNOPQRCDZ"    
    const Lowercase = "ahwxbcpqrvzstudefgyijklmno"
    const Numbers = "9123067845"
    const Symbols = "!@#$%|^&*(')_+?/"
    const FinalPassword=""
    Password2()
    function Password2(){
    let a = Math.floor(Math.random(0,1)*Uppercase.length)
    let b = Math.floor(Math.random(0,1)*Lowercase.length)
    let c = Math.floor(Math.random(0,1)*Numbers.length)
    let d = Math.floor(Math.random(0,1)*Symbols.length)
    let Passs = Uppercase[a] + Lowercase[b] + Numbers[c] + Symbols[d]


    for(let i=4;i<12;i++){
        // let Passs = Uppercase[a] + Lowercase[b] + Numbers[c] + Symbols[d]
        dum = (Math.floor(Math.random(0,1)*5))
        if(dum==0){
         Passs =Passs+Uppercase[a]
        }
        else if(dum==1){
            Passs =Passs+Lowercase[b]
           }
           else if(dum==2){
            Passs =Passs+Symbols[d]
           }
           else{
            Passs =Passs+Numbers[c]
           }
    }
    var s =document.querySelector('.pass').innerHTML = Passs
    var copy = document.getElementById("myButton");
    if(copy.length !=0){
        copy.style.display = "block"
    }
    }
    
}

function CopyText(){
    var xx = document.querySelector('.pass').textContent
    alert(`Copied Password ${xx} to the ClipBoard`)
    navigator.clipboard.writeText(xx)
    }