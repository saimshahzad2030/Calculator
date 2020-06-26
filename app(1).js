

function getvalues(num){
    var answer=document.getElementById("div_1");
  answer.value+=num;

}

function calc(){
    var answer=document.getElementById("div_1")
    answer.value=eval(answer.value)
    
}

function cancel(){
    var answer=document.getElementById("div_1")
    answer.value="0"
}
function percent(numb){
    function clr_otpt(){
        var answer=document.getElementById("div_1");
        answer.value="";
      
    }
    var answer=document.getElementById("div_1")
            if (numb === "%" ){
            var z=answer.value
            z.slice(0,z.length-2)
            answer.value=z/100;
            
        }
     else if (numb === "Sq.rt(x)"){
            var sq=answer.value
            sq.slice(0,sq.length-2)
            answer.value=Math.sqrt(sq);
            
        }
        else if (numb === "x3"){
            var pw=answer.value
            pw.slice(0)
            answer.value=Math.pow(pw,3);
            
        }
        else if (numb === "x2"){
            
            var pw2=answer.value
            pw2.slice(0)
            answer.value=Math.pow(pw2,2);
            
        }
        else if (numb === "!"){
            
            var num=answer.value
            var res=1;
            num.slice(0,num.length-2)
            for (var fact=num;fact>1;fact--){
                res=res*fact;
            }
            answer.value=res;
            
        }
        else if (numb === "sin"){
            
            var sin=answer.value
            sin.slice(0)
            answer.value=Math.sin(sin);
            
        }
        else if (numb === "cos"){
            
            var cos=answer.value
            cos.slice(0)
            answer.value=Math.cos(cos);
            
        }

        else if (numb === "tan"){
            
            var tan=answer.value
            tan.slice(0)
            answer.value=Math.tan(tan);
            
        }
        else if (numb === "sin_1"){
            
            var sin_1=answer.value
            sin_1.slice(0)
            answer.value=Math.asin(sin_1);
            
        }
        else if (numb === "cos_1"){
            
            var cos_1=answer.value
            cos_1.slice(0)
            answer.value=Math.acos(cos_1) ;
            
        }
        else if (numb === "tan_1"){
            
            var tan_1=answer.value
            tan_1.slice(0)
            answer.value=Math.atan(tan_1)  ;
            
        }
        
       
    
}
function topi(){
    var answer1=document.getElementById("div_1")
  
    var base=prompt("value of x")
    var power=prompt("Enter power or Exponent")
        answer1.value=Math.pow(base,power);
}






        function greet(){
           var rate= prompt("Rate my calculator out of 10?")
            
     


alert(a + " , you have give my calculator " + rate + " out of 10 thank u :) ")
}
