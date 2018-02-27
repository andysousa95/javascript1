function tabuada(){
  
   var numero = document.getElementById("numero".value;
   var result = document.getElementById("resultado");
   
   var tabu = "":
   for(i=0; i<=10; i++){
      tabu = tabu + numero + " x " + i " = " + i*numero+ "<br>;
      }
      
     resultado.innerHTML = tabu;
