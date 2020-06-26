var a=prompt("Enter your name :)")
alert("hello " + a + ":)","Friend")

function getvalues(num){
    var answer=document.getElementById("div_1");
  answer.value+=num;

}
// function getnu(num){
//     var answer=document.getElementById("div_1")

// }
function calc(){
    var answer=document.getElementById("div_1")
    answer.value=eval(answer.value)
    
}
function cancel(){
    var answer=document.getElementById("div_1")
    answer.value=""
}
function percent(numb){
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
        
        
    
}






        function greet(){
           var rate= prompt("Rate my calculator out of 10?")
            
     


alert(a + " , you have give my calculator " + rate + " out of 10 thank u :) ")
}

 




















//         ar a="The quick brown fox jumps over  the lazy dog";
// var b=a.toLowerCase();
// var as=[]
// for(var i=0;i<b.length;i++){
//     if(b.slice(i,i+3) === "the"){
//         as.push("the");

//     }

// }
// document.write("Text :  " + a +  "<br> Number of occurrences of word 'the' :  " + as.length);
