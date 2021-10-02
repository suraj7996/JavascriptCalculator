
//To clear the input box

 function clears() //clear() use garna napaine, maybe clear() is the function of JS
 {
    document.getElementById("valueIs").value =""
    document.getElementById("ans").value =""  //Seperate box for answer is created.
 }


//To display the numbers and expressions 

 function disp(val){
     document.getElementById("valueIs").value += val;
 }


 //To calculate the values

 function calculate(){
     let x = document.getElementById("valueIs").value;
     let y = eval(x); //eval() calculates the values according to the expressions provided.

     document.getElementById("ans").value = y;  //answer is displayed in different box
 }