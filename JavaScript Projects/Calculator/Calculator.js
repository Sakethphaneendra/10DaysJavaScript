var buttons = document.querySelectorAll('.Btn');
var CalcualtorOperation=[]
var DisplayValu=[]
var numm
var ValueArray =[]
var i=0
var Operations = ['+','-','*','/']
for(let i=0;i<buttons.length;i++){
    buttons[i].onclick = function ds(e){
        AddtoArray(buttons[i].innerHTML)
    }
}

function AddtoArray(value){
    if(Operations.includes(value)){
        console.log("operation added")
        numm=CalcualtorOperation.join('')

        CALCC(numm,value)

    }
    CalcualtorOperation[i]=value
    i++
    console.log(CalcualtorOperation,numm)
}
function CALCC(num,op){
     ValueArray[0]=num
    if(op=='+'){
         finalval = num + 0 
    }
    else if(op=='-'){
         finalval = num - 0
    }
    else if(op=='*'){
         finalval = num *1 
    }
    else if(op=='/'){
        finalval = num / 1 
    }
    else if(op=='='){
        document.querySelector('.span').innerHTML = "s"
    }else;
}



