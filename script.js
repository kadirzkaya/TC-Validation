const check=document.querySelector("#checkBtn");
const inputTC=document.querySelector("#inputTC");
const warning=document.querySelector("#warning");
const form=document.querySelector(".form");

window.onload = () => {
    warning.textContent=""
  };

check.addEventListener("click",(e)=>{
    e.preventDefault();

    if( (isNaN(inputTC.value))){
        warning.textContent="Please enter a number";
        form.style.background ="cadetblue";
        inputTC.value="";
    }
    else if(inputTC.value.length===11){
        warning.textContent="";
        if(isFirstZero(inputTC.value)){
            warning.textContent="The first digit of the number can't be 0";
            form.style.background ="cadetblue";
            inputTC.value="";
        }else{
            if(TCValidate(inputTC.value)){
                warning.textContent=inputTC.value+" is VALID";
                form.style.background ="green";
                inputTC.value="";
            }else{
                warning.textContent=inputTC.value+" is INVALID";
                form.style.background ="red";
                inputTC.value="";
            }
        }
        
    }else{
        warning.textContent="The number should have 11 digits";
        form.style.background ="cadetblue";
        inputTC.textContent="";
    }

})


const TCValidate=(tc)=>{
    let even=0;
    let odd=0;
    
    for(let i=0; i<tc.length-2;i++){
        if((i+1)%2==0){
            even+=Number(tc[i]);
        }else{
            odd+=Number(tc[i]);
        }
        
    }

    let res=((odd*7)-even)%10;
    if(Number(tc[9])!=res){
        return false;
    }else{
        let total=tenDigitSum(tc);

        if((total%10)==Number(tc[10])){
            return true;
        }
        return false;
    }
}

const isFirstZero=(tc)=>{
    return tc.startsWith("0");
}

const tenDigitSum=(tc)=>{
    let total=0;
    for(let i=0; i<tc.length-1;i++){
        total+=Number(tc[i]);
    }
    return total;
}