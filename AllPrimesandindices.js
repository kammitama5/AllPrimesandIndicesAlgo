function Prime(){
	var counter = 0; //counts number prime number
	//outer loop of incrementing numbers to value n
	for (var x = 1; x <= 10; x++){ // ** change prime number need to match Line 24
		// this is counter
		var z = 0;
		//this is inner, decrementing loop (n - 1)
		for (var y=x; y>=1; y--){
			if (x % y == 0){
				z = z + 1;
			}
		}
		if (z == 2)
		{counter++;
			console.log("Prime number: " + "#"+ counter + " = " + x);
			}
	}
	
}



//Prime test
Prime(10); // ** change prime number to match number changed Line 4
