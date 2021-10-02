 
 function clears()
 {
    document.getElementById("valueIs").value =""
    document.getElementById("ans").value =""
 }

 function disp(val){
     document.getElementById("valueIs").value += val;
     console.log(val);
 }

 function calculate(){
     let x = document.getElementById("valueIs").value;
     let y = eval(x);

     document.getElementById("ans").value = y;
 }