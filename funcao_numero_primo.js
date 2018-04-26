function numeroPrimo(n){
	var contador=0;
 	for(var x = 1 ; x <= n; x++) {   
  		if(n%x==0) {
    	   contador++;
  		}
 	}
 	if(contador==2){
 		console.log("é primo")
  		return true;
 	}else {
 		console.log("não é primo");
  		return false;
  	}
}